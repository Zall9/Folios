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
      (
      <>
        <Appbar></Appbar>
        <AboutMe></AboutMe>
        <Hive></Hive>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <TimelineExp></TimelineExp> */}
        </Box>
      </>
      )
    </>
  );
}
