import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

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
  return year + "-" + month + "-" + day;
}

const TimelineExp = () => {
  const [VALUES, setVALUES] = useState([]);
  const [data, setData] = useState([]);
  const [stateVal, setStateVal] = useState(0);
  const [statePrevious, setStatePrevious] = useState(0);
  useEffect(() => {
    let tmp = [];
    axios.get(process.env.NEXT_PUBLIC_API + "/cv").then((res) => {
      res.data.map((item) => {
        tmp.push(convertTimestampToDate(item.date));
      });
      setData(res.data);
      setVALUES(tmp);
      console.log("tmp", VALUES);
    });
  }, []);
  return (
    <Box sx={{ paddingTop: "3rem" }}>
      {/* Bounding box for the Timeline */}
      <div style={{ height: "100px", margin: "0 auto" }}>
        <HorizontalTimeline
          index={stateVal}
          indexClick={(index) => {
            setStatePrevious(stateVal);
            setStateVal(index);
          }}
          values={VALUES}
        />
      </div>
      <div className="text-center">
        {<p>{stateVal}</p>}
        {<p>{statePrevious}</p>}
      </div>
    </Box>
  );
};
export default TimelineExp;
