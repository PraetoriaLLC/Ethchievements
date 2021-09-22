import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const Achievement = ({ach}) => {
  const {name, img} = ach
  return (
    <Card style={{width: "250px"}}>
      <CardMedia
        component="img"
        alt="Achievement Image"
        height="250"
        image={img}
      />
       {/* <img src={img} style={{width: "250px", backgroundColor: "aquamarine"}} /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
      </CardContent>
    </Card>
  )
}

export default Achievement
