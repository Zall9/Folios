import {
  Grid,
  Grow,
  Icon,
  ImageList,
  ImageListItem,
  Slide,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import TimeLine from "../TimeLine";
import { db } from "../../db.js";
import { GrReactjs,GrMysql,GrDocker } from "react-icons/gr";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { SiAndroidstudio,SiMongodb, SiPython } from "react-icons/si";
import { DiGit } from "react-icons/di";
import {RiFlutterFill} from 'react-icons/ri';
const Skills = (props) => {
  const lastYpos = props.lastYpos;
  console.log("last", lastYpos);
  const data = db.skills;
  const IN = lastYpos > 0.35 && lastYpos < 1;
  const iconList = [
    <GrReactjs size={64} key={0} />,
    <FaNodeJs size={64} key={1} />,
    <GrMysql size={64} key={2} />,
    <SiMongodb size={64} key={3} />,
    <DiGit size={64} key={4} />,
    <SiPython size={64} key={5} />,
    <FaPhp size={64} key={6} />,
    <SiAndroidstudio size={64} key={7} />,
    <GrDocker size={64} key={8} />,
    <RiFlutterFill size={64} key={9} />,
  ];
  data.forEach((v, index) => {
    v.icon = iconList[0];
  });
  console.log("DATA ", data);
  return (
    <Box sx={{display:'flex', alignItems:'center',justifyContent:'center',
    flexDirection:'row', paddingTop: "3rem" }}>
    
      {data?.map((item, index) => {
        return (
          <Box key={item.id + "tech"} sx={{
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            {iconList[index]}
            <Typography key={item.id + "typo"} variant="h5" sx={{}}>
              {item.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Skills;
