import { Fade, Slide, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import LkIcon from "./LkIcon";
import { db } from "../db";
import { useEffect } from "react";
import bg from "../public/static/images/code.jpg";

const AboutMe = (props) => {
  // const [data, setData] = useState([]);
  const data = db.about;
  const IN = props.in;

  return (
    <Box
      id="about-me"
      sx={{
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "",
        height: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        {data?.map((item, index) => {
          return (
            <Box key={"c"}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Slide direction="right" in={IN} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{
                      color: "#fbfbfbfb",
                      marginLeft: "calc(10vw + " + index * 10 + "rem)",
                      marginTop: "calc(20vh + " + index * 10 + "rem)",
                    }}
                    variant="h1"
                  >
                    {item.title.split(" ")[0]}&nbsp;
                  </Typography>
                </Slide>
                <Fade in={IN} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{
                      color: "rgb(129, 156, 216)",
                      marginLeft: "calc(" + index * 10 + "rem)",
                      marginTop: "calc(20vh + " + index * 10 + "rem)",
                    }}
                    variant="h1"
                  >
                    {item.title.split(" ")[1].split(["lifer"])}
                  </Typography>
                </Fade>
                <Fade in={IN} mountOnEnter unmountOnExit>
                  <Typography
                    sx={{
                      color: "#fbfbfbfb",
                      marginTop: "25%",
                      marginLeft: "calc(" + index * 10 + "rem)",
                      marginTop: "calc(20vh + " + index * 10 + "rem)",
                    }}
                    variant="h1"
                  >
                    {item.title.split(" ")[1].split(["De"])}
                  </Typography>
                </Fade>
              </Box>
              <Slide direction="left" in={IN} mountOnEnter>
                <Box sx={{ marginLeft: "6%" }}>
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
              <Slide direction="left" in={IN} mountOnEnter>
                <Box sx={{ marginLeft: "12%" }}>
                  <Typography
                    sx={{
                      color: "#fbfbfbfb",
                    }}
                    variant="h5 Fade,"
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
                <Zoom in={1} style={{ transitionDelay: "750ms" }} mountOnEnter>
                  <Box sx={{ paddingBottom: "6rem" }}>
                    <LkIcon></LkIcon>
                  </Box>
                </Zoom>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutMe;
