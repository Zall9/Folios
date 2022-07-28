import { Timeline } from "@mui/lab";
import { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

/*
Format: YYYY-MM-DD
Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
  "2008-06-01",
  "2010-06-01",
  "2013-06-01",
  "2015-03-01",
  "2019-01-01",
  "2019-06-17",
  "2019-08-01",
];

const TimelineExp = () => {
  const [stateVal, setStateVal] = useState(0);
  const [statePrevious, setStatePrevious] = useState(0);
  return (
    <div>
      {/* Bounding box for the Timeline */}
      <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
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
        {/* any arbitrary component can go here */}
        {<p>{stateVal}</p>}
      </div>
    </div>
  );
};
export default TimelineExp;
