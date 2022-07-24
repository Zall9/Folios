import {
  Grid,
  Grow,
  ImageList,
  ImageListItem,
  Slide,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import path from "path";
import getConfig from "next/config";
import TimeLine from "../TimeLine";

const Skills = (props) => {
  const lastYpos = props.lastYpos;
  console.log("last", lastYpos);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/skills")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid alignItems="center" justifyContent="center" container spacing={3}>
      <Grid item xs={12}>
        <Slide direction="right" in={lastYpos > 0 && lastYpos < 1} mountOnEnter>
          <Typography variant="h4">Mes compétences</Typography>
        </Slide>
      </Grid>
      <Grid item xs={5}>
        <ImageList cols={3}>
          {data?.map((item) => {
            return (
              <Grow
                easing={{}}
                timeout={{
                  appear: 1000,
                  enter: 1000,
                  exit: 500,
                }}
                key={"grow" + item.id}
                in={lastYpos > 0 && lastYpos < 1}
              >
                <ImageListItem key={item.image}>
                  <Box
                    key={item.id + "box"}
                    sx={{
                      borderRadius: "100%",
                      position: "relative",
                      backgroundColor: "lightgrey",
                      opacity: 0.5,
                      width: "8ch",
                      height: "8ch",
                    }}
                  ></Box>
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      paddingTop: "0.12rem",
                      paddingLeft: "0.12rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      alt=""
                      key={item.id + "image"}
                      width="69%"
                      height="69%"
                      src={"http://localhost:3001/" + item.image}
                    />
                  </Box>
                  <Typography key={item.id + "typo"} variant="h5">
                    {item.title}
                  </Typography>
                </ImageListItem>
              </Grow>
            );
          })}
        </ImageList>
      </Grid>
      <Grid item xs={6}>
        <TimeLine in={lastYpos > 0 && lastYpos < 1}></TimeLine>
      </Grid>
    </Grid>
  );
};

export default Skills;
