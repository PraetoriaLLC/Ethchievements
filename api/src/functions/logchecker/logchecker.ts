import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { ethers } from 'ethers'
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

  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

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
  provider: ethers.providers.Provider,
  address: string,
  _integration: string,
  _task: string
): Promise<boolean> {
  const filter = {
    address: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
    topics: [
      '0xde6857219544bb5b7746f48ed30be6386fefc61b2f864cacf559893bf50fd951', // Deposit
      null,
      '0x' + address.slice(2).padStart(64, '0'),
      null,
    ],
    fromBlock: 0,
    toBlock: 'latest',
  }

  const logs = await provider.getLogs(filter)
  return logs.length >= 1
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
