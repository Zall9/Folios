import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import { useEffect, useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { db } from "../../db";
import Skills from "./Skills";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import { GoMortarBoard } from "react-icons/go";
import { AiOutlineScissor } from "react-icons/ai";
import { GiArtificialHive } from "react-icons/gi";
import { SiSololearn } from "react-icons/si";
/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
//convert a timestamp to YYYY-MM-DD
function convertTimestampToDate(timestamp) {
  var date = new Date(timestamp * 1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  // add a 0 before month and day if less than 10
  if (month < 10) {
    month = "0" + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return day + "/" + month + "/" + year;
}

const TimelineExp = (props) => {
  const data = db.cv;
  let VALUES = [];
  const colorsList = [
    "#87a2c7",
    "#9c2919",
    "#b8b8b8",
    "#87a2c7",
    "#212932",
    "#87a2c7",
    "#9c2919",
  ];
  data.map((item) => {
    VALUES.push(convertTimestampToDate(item.date));
  });
  console.log("VALUES", VALUES);

  const dataWithoutDateAndId = data.map(({ id, ...rest }) => rest);
  const listIcon = [
    GoMortarBoard,
    AiOutlineScissor,
    GiArtificialHive,
    SiSololearn,
    SiSololearn,
    GoMortarBoard,
    GoMortarBoard,
  ];
  dataWithoutDateAndId.forEach((v, index) => {
    v.icon = listIcon[index];
  });
  return (
    <Box sx={{ paddingTop: "3rem", width: "85%" }}>
      <Timeline minEvents={5} maxEvents={10}>
        {dataWithoutDateAndId.map((item, index) => (
          <>
            <TimelineEvent
              color={colorsList[index]}
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={convertTimestampToDate(item.date)}
            />
          </>
        ))}
      </Timeline>
    </Box>
  );
};
export default TimelineExp;
