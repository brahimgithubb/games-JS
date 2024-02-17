import React from "react";

import { FaHandPaper } from "react-icons/fa";

const Paper = ({ afficheId }) => {
  return (
    <span
      id="paper"
      onClick={(e) => {
        afficheId ? afficheId(e) : "";
      }}
      className="iconRPS "
    >
      <FaHandPaper />
    </span>
  );
};

export default Paper;
