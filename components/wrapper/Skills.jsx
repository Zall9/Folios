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
  const IN = lastYpos > 0.35 && lastYpos < 1;

  return (
    <Grid alignItems="center" justifyContent="center" container spacing={3}>
      <Grid item xs={12}>
        <Slide
          direction="right"
          in={IN}
          mountOnEnter
          timeout={{
            appear: 500,
            enter: 500,
            exit: 500,
          }}
        >
          <Box
            component="div"
            sx={{
              position: "absolute",
              display: "flex",
            }}
          >
            <Typography sx={{ position: "relative" }} variant="h1">
              Mes compétences
            </Typography>
            <Typography
              sx={{ position: "relative", color: "#b8b8b8" }}
              variant="h3"
            >
              Mes spécialités
            </Typography>
          </Box>
        </Slide>
      </Grid>
      <Grid item xs={5}>
        <ImageList sx={{ paddingTop: "6.5rem" }} cols={3}>
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
                in={IN}
              >
                <ImageListItem key={item.image}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                    <Typography key={item.id + "typo"} variant="h5" sx={{}}>
                      {item.title}
                    </Typography>
                  </Box>
                </ImageListItem>
              </Grow>
            );
          })}
        </ImageList>
      </Grid>
      <Grid item xs={6}>
        <TimeLine in={IN}></TimeLine>
      </Grid>
    </Grid>
  );
};

export default Skills;
