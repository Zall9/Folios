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
import { FaUserGraduate } from "react-icons/fa";

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
  data.map((item) => {
    VALUES.push(convertTimestampToDate(item.date));
  });
  console.log("VALUES", VALUES);
  const [stateVal, setStateVal] = useState(0);
  const [statePrevious, setStatePrevious] = useState(0);
  const dataWithoutDateAndId = data.map(({ id, ...rest }) => rest);
  return (
    <Box sx={{ paddingTop: "3rem" }}>
      {/* Bounding box for the Timeline */}
      <Timeline minEvents={15} placeholder>
        {dataWithoutDateAndId.map(
          (item, index) => (
            console.log(
              "convertTimestampToDate(item.date)",
              convertTimestampToDate(item.date),
              item.date
            ),
            (
              <TimelineEvent
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={convertTimestampToDate(item.date)}
              />
            )
          )
        )}
      </Timeline>
    </Box>
  );
};
export default TimelineExp;
