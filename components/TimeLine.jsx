import axios from "axios";
import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Grow, Typography } from "@mui/material";
import { db } from "../db";
const TimeLine = (props) => {
  const data = db.experiences;
  console.log("data", data);
  console.log("db", db);
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "error",
  ];
  return (
    <Box sx={{ paddingTop: "6.5rem" }}>
      <Timeline position="alternate">
        {data?.map((item, index) => {
          return (
            <Grow
              key={(item.id + index).toString()}
              in={props.in}
              style={{ transformOrigin: "0 0 0" }}
              {...(props.in && index == 0
                ? {
                    timeout: {
                      enter: index * 1000 + 1500,
                      exit: 1000,
                    },
                  }
                : {
                    timeout: {
                      enter: index * 1000 + 1000,
                      exit: 1000,
                    },
                  })}
            >
              <TimelineItem key={item.id}>
                {index < data.length - 1 ? (
                  <>
                    <TimelineSeparator>
                      <TimelineDot color={colors[index]} variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      {
                        <>
                          <Typography>{item.title}</Typography>
                          <Typography
                            sx={{
                              color: "#aaaaaa",
                            }}
                          >
                            {item.description}
                          </Typography>
                        </>
                      }
                    </TimelineContent>
                  </>
                ) : (
                  <>
                    <TimelineDot color={colors[index]} variant="outlined" />
                    <TimelineContent>
                      {
                        <>
                          <Typography>{item.title}</Typography>
                          <Typography
                            sx={{
                              color: "#aaaaaa",
                            }}
                          >
                            {item.description}
                          </Typography>
                        </>
                      }
                    </TimelineContent>
                  </>
                )}
              </TimelineItem>
            </Grow>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default TimeLine;
