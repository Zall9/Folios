import axios from "axios";
import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Grow } from "@mui/material";

const TimeLine = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/experiences")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Timeline>
        {data?.map((item, index) => {
          return (
            <Grow
              key={(item.id + index).toString()}
              in={props.in}
              style={{ transformOrigin: "0 0 0" }}
              {...(props.in && index == 0
                ? {
                    timeout: {
                      enter: index * 1000 + 1000,
                      exit: index * 1000 + 1000,
                    },
                  }
                : {
                    timeout: {
                      enter: index * 1000 + 1000,
                      exit: index * 1000 + 1000,
                    },
                  })}
            >
              <TimelineItem key={item.id}>
                {index < data.length - 1 ? (
                  <>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </>
                ) : (
                  <>
                    <TimelineDot />
                    <TimelineContent>{item.title}</TimelineContent>
                  </>
                )}
              </TimelineItem>
            </Grow>
          );
        })}
      </Timeline>
    </>
  );
};

export default TimeLine;
