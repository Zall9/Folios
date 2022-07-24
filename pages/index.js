import { Box } from "@mui/system";
import Appbar from "../components/wrapper/Appbar";
import CardItem from "../components/CardItem";
import CardGrid from "../components/wrapper/CardGrid";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import { Grid } from "@mui/material";

export default function Home() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);
  return (
    <>
      <Appbar></Appbar>
      <Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#121212",
            paddingTop: "2rem",
          }}
        >
          <CardGrid></CardGrid>
        </Grid>
        <Grid item sx={12}>
          <CardGrid></CardGrid>
        </Grid>
        <Grid item sx={12}>
          <CardGrid></CardGrid>
        </Grid>
      </Grid>
    </>
  );
}
