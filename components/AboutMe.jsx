import { Fade, Slide, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import LkIcon from "./LkIcon";
import { db } from "../db";
import { useEffect } from "react";
const AboutMe = (props) => {
  // const [data, setData] = useState([]);
  const data = db.about;
  useEffect(() => {
    return () => {
      const maDiv = document?.getElementById("about-me");
      if (maDiv) {
        maDiv.style.backgroundImage = `url(/static/images/code.jpg)`;
        maDiv.style.backgroundSize = "100% 100%";
        maDiv.style.backgroundRepeat = "no-repeat";
        maDiv.style.backgroundColor = "";
      }
    };
  }, []);

  return (
    <Box
      id="about-me"
      sx={{
        backgroundColor: "#121212",
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
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
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
                <Fade in={true} mountOnEnter unmountOnExit>
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
                <Fade in={true} mountOnEnter unmountOnExit>
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
              <Slide direction="left" in={true} mountOnEnter>
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
              <Slide direction="left" in={true} mountOnEnter>
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
                <Zoom
                  in={true}
                  style={{ transitionDelay: "750ms" }}
                  mountOnEnter
                >
                  <Box>
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
