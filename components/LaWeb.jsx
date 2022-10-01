import { Grid, Grow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { db } from "../db";
import {
  SiSololearn,
  SiDocker,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiSocketdotio,
  SiSwagger,
  SiOpenapiinitiative,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { GiRabbitHead } from "react-icons/gi";
import { FaSync } from "react-icons/fa";
const LaWeb = (props) => {
  const IN = props.in;
  const style = {
    ".changeColor": {
      color: "#f5f5f5",
      animation: "changeColor 1s infinite",
    },
    ".changeColor:hover": {
      color: "#faa91e",
      animation: "changeColor 1s infinite",
    },
  };
  const data1 = db.cv.filter((item) => item.id == 4);
  const data2 = db.cv.filter((item) => item.id == 5);
  const DATA = data1.concat(data2);
  console.log(DATA);
  const size = "6rem";
  const size2 = "4rem";
  const laGif = (
    <Image
      src="/static/images/stageLA.gif"
      alt="Picture of the author"
      width={1195}
      height={396}
    />
  );

  const icons = [
    <span key="span1" style={style}>
      <SiDocker
        size={size2}
        color="white"
        key={"icon-1"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span2" style={style}>
      <SiNodedotjs
        size={size2}
        color="white"
        key={"icon-2"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span3" style={style}>
      <SiJavascript
        size={size2}
        color="white"
        key={"icon-3"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span4" style={style}>
      <SiTypescript
        size={size2}
        color="white"
        key={"icon-4"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span5" style={style}>
      <SiMongodb
        size={size2}
        color="white"
        key={"icon-5"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span6" style={style}>
      <GiRabbitHead
        size={size2}
        color="white"
        key={"icon-6"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span8" style={style}>
      <SiSocketdotio
        size={size2}
        color="white"
        key={"icon-7"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span8" style={style}>
      <SiSwagger
        size={size2}
        color="white"
        key={"icon-8"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
    </span>,
    <span key="span9" style={style}>
      <SiOpenapiinitiative
        size={size2}
        color="white"
        key={"icon-9"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
      ,
    </span>,
    <span key="span10" style={style}>
      <FaSync
        size={size2}
        color="white"
        key={"icon-10"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
      ,
    </span>,
    <span key="span11" style={style}>
      <SiReact
        size={size2}
        color="white"
        key={"icon-11"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
      ,
    </span>,
    <span key="span12" style={style}>
      <SiRedux
        size={size2}
        color="white"
        key={"icon-12"}
        onMouseOver={({ target }) => (target.style.color = "#d42626")}
        onMouseOut={({ target }) => (target.style.color = "#fbfbfb")}
      />
      ,
    </span>,
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "#fbfbfbfb" }}>
          {DATA[0].title.split("W")[0]}
        </Typography>
        <Typography variant="h1" sx={{ color: "#d42626" }}>
          {DATA[0].title.split("a")[1]}
        </Typography>
        <SiSololearn size={size} color="#d42626" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          paddingRight: "3rem",
          paddingTop: "6rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fbfbfbfb",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          {"Réalisation de plusieures API Rest en TypeScript"}
        </Typography>

        <Box
          sx={{
            width: "45%",
          }}
        >
          <Image
            src="/static/images/Swagger.png"
            alt="Picture of the author"
            width={1247}
            height={788}
          />
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: "3rem",
          width: "85%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "auto",
        }}
      >
        {laGif}
        <Typography
          variant="h5"
          sx={{
            paddingLeft: "3rem",
            color: "#fbfbfbfb",
          }}
        >
          {
            "Réalisation d'une interface en React permettant l'analyse des données pédagogiques en temps réel"
          }
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "3rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fbfbfbfb",
          }}
        >
          {"Vidéo de présentation du projet"}
        </Typography>
        <YoutubeEmbed embedId="_uA-jin1DMk" />

        <Typography
          sx={{
            alignSelf: "center",
            color: "#fbfbfbfb",
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
            paddingTop: "3rem",
          }}
        >
          {"Technologies Utilisées"}
        </Typography>
        <Grow in={IN} style={{ transformOrigin: "0 0 0" }}>
          <Grid
            container
            spacing={2}
            sx={{
              paddingTop: "3rem",
            }}
          >
            {icons.map((item, index) => {
              return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column-reverse",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fbfbfbfb",
                      }}
                    >
                      {DATA[0].technologies[index]}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grow>
      </Box>
    </>
  );
};

export default LaWeb;
