import * as React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import './Data_Stock.css';
import { 
  // Button, 
    // CardActionArea,
     CardActions } from "@mui/material";
import { Button } from '@mantine/core';

export default function NewsCard(props) {
  return (
    // <div className=''>
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={props.data.image}
          alt="king maegor did nothing wrong"
          className="coin img"
        />
        {/* <CardContent> */}
          {/* <Typography gutterBottom variant="p" component="div">
            {props.data.headline}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {props.data.summary}
          </Typography> */}
        {/* </CardContent> */}
      {/* </CardActionArea> */}
      <CardActions>
      <Button
              variant="outline"
              color="violet"
              href={props.data.url}>
                          Article Link

              </Button>
        {/* <Button size="small" color="primary" href={props.data.url}>
          Article Link
        </Button> */}
      </CardActions>
    </Card>

    // </div>
    
  );
}
