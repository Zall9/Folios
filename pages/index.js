import { Box } from "@mui/system";
import Appbar from "../components/Appbar";
import CardGrid from "../components/wrapper/CardGrid";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Skills from "../components/wrapper/Skills";

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
      <Container fixed>
        <motion.div
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <Grid spacing={3}>
            <Grid item xs={4}>
              <CardGrid></CardGrid>
            </Grid>
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
        </motion.div>
      </Container>
    </>
  );
}
