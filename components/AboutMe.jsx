import { Fade, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

const AboutMe = (props) => {
  const [data, setData] = useState([]);
  const backgroundImage = "";
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/about")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const maDiv = document.getElementById("about-me");
    if (maDiv) {
      maDiv.style.backgroundImage = `url(/static/images/code.png)`;
      maDiv.style.backgroundSize = "100% 100%";
      maDiv.style.backgroundRepeat = "no-repeat";
      maDiv.style.backgroundColor = "";
    }
  }, []);

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
                <Typography
                  sx={{
                    color: "#fbfbfbfb",
                    marginTop: "1%",
                    marginLeft: "27%",
                  }}
                  variant="h4"
                >
                  &nbsp;&nbsp;&nbsp;{item.description.split("à")[0]}
                </Typography>
              </Slide>
              <Slide direction="left" in={true} mountOnEnter>
                <Typography
                  sx={{
                    color: "#fbfbfbfb",
                    marginTop: "1%",
                    marginLeft: "33%",
                  }}
                  variant="h5"
                >
                  &nbsp;&nbsp;&nbsp;{"à" + item.description.split("à")[1]}
                </Typography>
              </Slide>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutMe;
