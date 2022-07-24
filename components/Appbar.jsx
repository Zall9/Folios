import {
  AppBar,
  Box,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useState } from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Appbar = () => {
  return (
    <Slide
      direction="down"
      in={true}
      mountOnEnter
      unmountOnExit
      easing={{}}
      timeout={{
        appear: 1000,
        enter: 1000,
        exit: 500,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          fontFamily: " Arial, Helvetica, sans-serif",
          fontSize: " 1rem",
          backgroundColor: " rgba(250, 250, 250, 0.3)",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          boxShadow: " 0px 0px 135px rgba(0, 0, 0, 0.45)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AcUnitIcon
              sx={{
                display: { color: "#121212", xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              color="textPrimary"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#121212",
                textDecoration: "none",
              }}
            >
              <strong>Pa</strong>
              <strong style={{ color: "#819CD8" }}>ul</strong>
            </Typography>
            <Box
              component="span"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    "&:before": {
                      content: "''",
                      position: "absolute",
                      width: "0",
                      height: "2px",
                      bottom: "-3px",
                      left: "50%",
                      transform: "translate(-50%,0%)",
                      backgroundColor: "#121212",
                      visibility: "hidden",
                      transition: "all 0.3s ease-in-out",
                    },
                    "&:hover:before": {
                      visibility: "visible",
                      width: "100%",
                    },
                    my: 2,
                    color: "#121212",
                    display: "block",
                  }}
                >
                  <Typography variant="h6">{page}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Appbar;
