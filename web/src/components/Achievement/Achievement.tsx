import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const Achievement = ({ach}) => {
  const {name, img} = ach
  return (
    <Card style={{width: "250px", backgroundColor: "#141517", color: "white", borderRadius: "4px"}} elevation={1}>
      <CardMedia
        component="img"
        alt="Achievement Image"
        height="250"
        image={img}
      />
       {/* <img src={img} style={{width: "250px", backgroundColor: "aquamarine"}} /> */}
      <CardContent style={{}}>
        <span style={{fontSize: "20px"}}>{name}</span>
      </CardContent>
    </Card>
  )
}

export default Achievement
