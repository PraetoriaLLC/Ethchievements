import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "@redwoodjs/router";

const Achievement = ({ach}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const {name, img, score, description, actionUrl, integrationId} = ach
  const flip = e => setIsFlipped(!isFlipped)
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={flip} style={{width: "250px", height: "320px", backgroundColor: "#141517", color: "white", borderRadius: "4px"}} elevation={1}>
        <CardMedia
          component="img"
          alt="Achievement Image"
          height="250"
          image={img}
        />
        {/* <img src={img} style={{width: "250px", backgroundColor: "aquamarine"}} /> */}
        <CardContent style={{paddingTop: "15px"}}>
          <span style={{fontSize: "22px"}}>{name}</span>
          <div className="achScore" style={{float:  "right", fontSize: "20px"}}>
            <span>{score}</span>
          </div>
        </CardContent>
      </Card>

      <Card onClick={flip} style={{width: "250px", height: "320px", backgroundColor: "#141517", color: "white", borderRadius: "4px"}} elevation={1}>
        <CardContent style={{paddingTop: "15px"}} >
          <span style={{fontSize: "22px"}}>{name}</span>
          <div className="achScore" style={{float:  "right", fontSize: "20px"}}>
            <span>{score}</span>
          </div>
          <p>{description}</p>

        </CardContent>
        <div style={{textAlign: "center"}}>
            <Button onClick={()=> window.open(actionUrl)} variant="contained" style={{backgroundColor: "aquamarine", color: "white"}}>Go</Button>
            <Link to={`/i/${integrationId}`} style={{display: "block", marginTop: "5px", color: "aquamarine"}}>More achievements for this integration</Link>
        </div>
      </Card>
    </ReactCardFlip>
  )
}

export default Achievement
