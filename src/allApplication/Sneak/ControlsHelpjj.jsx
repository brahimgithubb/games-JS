import React from "react";

const ControlsHelp = ({ start, stop }) => {
  return (
    <div>
      <button onClick={start()}> start </button>
      <button onClick={stop()}> stop </button>
    </div>
  );
};

export default ControlsHelp;
