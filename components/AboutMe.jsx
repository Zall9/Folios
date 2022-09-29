import { Button, Fade, Slide, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import IconButton from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LkIcon from "./LkIcon";
import GithubIcon from "./GithubIcon";
import { db } from "../db";
const AboutMe = (props) => {
  // const [data, setData] = useState([]);
  const backgroundImage = "";
  const data = db.about;

  const maDiv = document.getElementById("about-me");
  if (maDiv) {
    maDiv.style.backgroundImage = `url(/static/images/code.png)`;
    maDiv.style.backgroundSize = "100% 100%";
    maDiv.style.backgroundRepeat = "no-repeat";
    maDiv.style.backgroundColor = "";
  }

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        height: "90vh",
      }}
    >
      <Box
        id="about-me"
        sx={{
          height: "100%",
        }}
      >
        {data?.map((item) => {
          return (
            <>
              <Box sx={{ display: "flex", marginLeft: "25%" }}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{
                      color: "#fbfbfbfb",
                      marginTop: "25%",
                    }}
                    variant="h1"
                  >
                    {item.title.split(" ")[0]}&nbsp;
                  </Typography>
                </Slide>
                <Fade in={true} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{ color: "rgb(129, 156, 216)", marginTop: "25%" }}
                    variant="h1"
                  >
                    {item.title.split(" ")[1].split(["lifer"])}
                  </Typography>
                </Fade>
                <Fade in={true} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{ color: "#fbfbfbfb", marginTop: "25%" }}
                    variant="h1"
                  >
                    {item.title.split(" ")[1].split(["De"])}
                  </Typography>
                </Fade>
              </Box>
              <Slide direction="left" in={true} mountOnEnter>
                <Box sx={{marginLeft:'6%'}}>
                <Typography
                  sx={{
                    color: "#fbfbfbfb",
                  }}
                  variant="h4"
                >
                  &nbsp;&nbsp;&nbsp;{item.description.split("à")[0]}
                </Typography>
                </Box>
              </Slide>
              <Slide direction="left" in={true} mountOnEnter>
                <Box sx={{marginLeft:'12%'}}>
                <Typography
                  sx={{
                    color: "#fbfbfbfb",
                  }}
                  variant="h5"
                >
                  &nbsp;&nbsp;&nbsp;{"à" + item.description.split("à")[1]}
                </Typography>
                </Box>
              </Slide>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  position: "absolute",
                  bottom: "0",
                  marginLeft: "3%",
                }}
              >
                <Zoom
                  in={true}
                  style={{ transitionDelay: "750ms" }}
                  mountOnEnter
                >
                  <div>
                    <LkIcon></LkIcon>
                  </div>
                </Zoom>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutMe;
