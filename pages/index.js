import { Box } from "@mui/system";

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
import Hive from "../components/Hive";
import LaWeb from "../components/LaWeb";
import BottomNav from "../components/BottomNav";

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
    <Box>
      <>
        <AboutMe in={lastYpos < 0.1}></AboutMe>
        <Hive in={lastYpos > 0.52 && lastYpos < 0.8}></Hive>
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
              <LaWeb in={lastYpos > 0.93}></LaWeb>
            </Box>
          </Box>
        }
        <BottomNav></BottomNav>
      </>
    </Box>
  );
}
