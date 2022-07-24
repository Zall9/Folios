import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CardItem = ({ data }) => {
  console.log("_data", data);
  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          transition: "all 0.25s ease",
        },
        "&:hover img": {
          transform: "scale(1.25)",
          transition: "all 0.25s ease",
        },
        "&:after": {
          width: "100%",
          left: "0px",
          bottom: "0px",
          position: "absolute",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
          zIndex: "20",
          transition: "all 0.25s ease",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/1200px-Lizard.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography
            sx={{
              width: "30ch",
              height: "5vh",
              overflow: "hidden",
            }}
            variant="body2"
            color="#121212"
          >
            {data?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
