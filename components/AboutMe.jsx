import { NoBackpackSharp } from "@mui/icons-material";
import { Fade, Grid, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/about")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data?.map((item) => {
        return (
          <>
            <Box sx={{ display: "flex" }}>
              <Slide direction="right" in={true} mountOnEnter>
                <Typography sx={{ color: "#121212" }} variant="h4">
                  {item.title.split(" ")[0]}&nbsp;
                </Typography>
              </Slide>
              <Fade in={true} mountOnEnter>
                <Typography sx={{ color: "rgb(129, 156, 216)" }} variant="h4">
                  {item.title.split(" ")[1].split(["lifer"])}
                </Typography>
              </Fade>
              <Fade in={true} mountOnEnter>
                <Typography sx={{ color: "#121212" }} variant="h4">
                  {item.title.split(" ")[1].split(["De"])}
                </Typography>
              </Fade>
            </Box>
            <Slide direction="left" in={true} mountOnEnter>
              <Typography variant="h4">
                &nbsp;&nbsp;&nbsp;{item.description}
              </Typography>
            </Slide>
          </>
        );
      })}
    </>
  );
};

export default AboutMe;
