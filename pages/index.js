import { Box } from "@mui/system";
import Appbar from "../components/Appbar";
import CardGrid from "../components/wrapper/CardGrid";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CircularProgress,
  Container,
  Grid,
  Slide,
  Slider,
} from "@mui/material";
import Skills from "../components/wrapper/Skills";
import AboutMe from "../components/AboutMe";
import TimelineExp from "../components/wrapper/TimeLineExp";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [lastYpos, setLastYpos] = useState(0);
  const [doOnce, setDoOnce] = useState(false);
  useEffect(() => {
    if (!doOnce) {
      setTimeout(setDoOnce, 1000, true);
    }
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
      setLastYpos(latest);
    });
  }, []);
  return (
    <>
      {doOnce == false ? (
        <CircularProgress></CircularProgress>
      ) : (
        <>
          <Appbar></Appbar>
          <AboutMe></AboutMe>
          <Box>
            <Container disableGutters maxWidth="lg">
              <TimelineExp></TimelineExp>
            </Container>
          </Box>
          <Container disableGutters maxWidth="lg">
            <Grid>
              <Grid
                item
                sx={{
                  marginBottom: "1rem",
                }}
                xs={4}
              >
                <Skills lastYpos={lastYpos} setLastYpos={setLastYpos}></Skills>
              </Grid>
              {/* 
              <Grid item xs={4}>
                <CardGrid></CardGrid>
              </Grid> */}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
