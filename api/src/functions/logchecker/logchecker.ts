import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { ethers } from 'ethers'
import { db } from 'src/lib/db'
const dotenv = require('dotenv')
dotenv.config()

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info('Invoked logchecker function')

  const provider = new ethers.providers.EtherscanProvider(
    1,
    process.env.ETHERSCAN_KEY
  )

  const req: LogCheckerRequest = JSON.parse(event.body)
  const isValid = await checkValid(
    provider,
    req.address,
    req.integration,
    req.task
  )

  const sig = isValid
    ? await getMintSignature(req.address, req.integration, req.task)
    : ''

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isValid: isValid,
      signature: sig,
    }),
  }
}

async function checkValid(
  provider: ethers.providers.EtherscanProvider,
  address: string,
  integration: string,
  task: string
): Promise<boolean> {
  const [targetAddress, targetSignature] = await getTargetInfo(
    integration,
    task
  )

  const txs = await provider.getHistory(address)
  const matches = txs.filter((tx) => {
    const validAddress = tx.to?.toLowerCase() === targetAddress.toLowerCase()

    const expectedSelector = ethers.utils
      .keccak256(ethers.utils.toUtf8Bytes(targetSignature))
      .slice(2, 8)
    const actualSelector = tx.data.slice(2, 8)
    const validSelector = expectedSelector === actualSelector

    return validAddress && validSelector
  })

  return matches.length !== 0
}

//0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9
//deposit(address,uint256,address,uint16)
async function getTargetInfo(
  _integration: string,
  _task: string
): Promise<string[]> {
  const res = await db.requirement.findFirst({
    where: {
      achievementId: parseInt(_task),
    },
  })
  if (res === null) {
    return ['', '']
  }
  return [res.address, res.signature]
}

async function getMintSignature(
  address: string,
  integration: string,
  task: string
): Promise<string> {
  const owner = new ethers.Wallet(process.env.ETH_OWNER_KEY)

  const messageHash = ethers.utils.solidityKeccak256(
    ['address', 'string', 'string'],
    [address, integration, task]
  )
  const messageHashBinary = ethers.utils.arrayify(messageHash)

  return await owner.signMessage(messageHashBinary)
}

interface LogCheckerRequest {
  integration: string
  task: string
  address: string
}
