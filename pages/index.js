import { Box } from "@mui/system";
import Appbar from "../components/Appbar";
import CardGrid from "../components/wrapper/CardGrid";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Grid, Slide, Slider } from "@mui/material";
import Skills from "../components/wrapper/Skills";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [lastYpos, setLastYpos] = useState(0);
  const [widthBox, setWidthBox] = useState(0);
  useEffect(() => {
    document.getEme;
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
      setLastYpos(latest);
    });
  }, []);
  return (
    <>
      <Appbar></Appbar>
      <Container disableGutters maxWidth="lg">
        <Grid>
          <AboutMe></AboutMe>

          <Grid
            item
            sx={{
              marginBottom: "1rem",
            }}
            xs={4}
          >
            <Skills lastYpos={lastYpos} setLastYpos={setLastYpos}></Skills>
          </Grid>

          <Grid item xs={4}>
            <CardGrid></CardGrid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
