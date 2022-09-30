import { Fade, Grow, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { db } from "../db";
import { GiArtificialHive } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import Image from "next/image";
import {
  SiAndroidstudio,
  SiJava,
  SiPhp,
  SiMysql,
  SiGradle,
} from "react-icons/si";
const Hive = () => {
  const data = db.cv[2];
  console.log("dataHS", data);
  const size = 112;
  const color = "#f5f5f5";
  const icons = [
    <SiAndroidstudio color={color} size={size} key={0} />,
    <SiJava color={color} size={size} key={1} />,
    <SiPhp color={color} size={size} key={2} />,
    <GrMysql color={color} size={size} key={3} />,
    <SiGradle color={color} size={size} key={4} />,
  ];
  return (
    <Box sx={{ backgroundColor: "#121212", paddingTop: "25vh" }}>
      <Box
        sx={{
          backgroundColor: "#121212",
          height: "calc(125vh - 225px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h1" sx={{ color: "#faa91e" }}>
            {data.title.split("v")[0]}
          </Typography>
          <Typography variant="h1" sx={{ color: "#fbfbfbfb" }}>
            {data.title.split("i")[1]}
          </Typography>
          <GiArtificialHive size="8rem" color="#faa91e" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#fbfbfbfb",
            }}
          >
            {data.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: "5rem",
            paddingLeft: "12rem",
          }}
        >
          <Image
            src="/static/images/cours_hive.png"
            alt="Picture of the author"
            width={350}
            height={600}
          ></Image>
          <Typography
            variant="h5"
            sx={{
              width: "25%",
              marginLeft: "4rem",
              color: "#fbfbfbfb",
            }}
          >
            {db.cv[2].content1}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            flexDirection: "row-reverse",
            paddingRight: "10rem",
          }}
        >
          <Image
            src="/static/images/badges_hive.png"
            alt="Picture of the author"
            width={350}
            height={600}
          ></Image>
          <Typography
            variant={"h5"}
            sx={{
              width: "25%",
              color: "#fbfbfbfb",
            }}
          >
            {db.cv[2].content1}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#121212",
          paddingTop: "15rem",
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            color: "#fbfbfbfb",
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {"Technologies Utilisées"}
        </Typography>

        <Box
          sx={{
            backgroundColor: "#121212",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <>
            {icons.map((item, index) => {
              return (
                //center the box content please
                <>
                  <Box
                    key={index + "root"}
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column-reverse",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      key={index + item + "key"}
                      //position relative to the end of the component
                      sx={{}}
                    >
                      {item}
                    </Box>
                    <Typography variant="h6" sx={{ color: "#fbfbfbfb" }}>
                      {data.technologies[index]}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default Hive;
