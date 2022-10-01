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
import Hive from "../components/Hive";
import LaWeb from "../components/LaWeb";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [lastYpos, setLastYpos] = useState(0);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
      setLastYpos(latest);
    });
  }, []);
  return (
    <>
      <Appbar></Appbar>
      <AboutMe></AboutMe>
      <Hive in={lastYpos > 0.1}></Hive>
      {
        <Box
          sx={{
            backgroundColor: "#000000",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <TimelineExp></TimelineExp> */}
          <Box sx={{ paddingTop: "8rem" }}>
            <LaWeb></LaWeb>
          </Box>
        </Box>
      }
    </>
  );
}
