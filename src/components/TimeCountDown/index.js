import React from "react";

import Countdown from "react-countdown";
const TimeCountDown = (props) => {
  const { refTime } = props;
  return (
    <div>
      <Countdown
        date={Date.now() + 40 * 60 * 1000}
        ref={refTime}
        autoStart={false}
        zeroPadTime={2}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            // Render a completed state
            return (
              <div className="pt-4 text-bold">
                Times up!
                {/* {alert("a")} */}
              </div>
            );
          } else {
            // Render a countdown
            return (
              <h1 className="m-0 font-weight-bold pt-2 ">
                {hours}:{minutes}:{seconds}
              </h1>
            );
          }
        }}
      />
    </div>
  );
};

export default TimeCountDown;
