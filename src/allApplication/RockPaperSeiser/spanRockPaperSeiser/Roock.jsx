import React from "react";
import { FaHandRock } from "react-icons/fa";

const Roock = ({ afficheId }) => {
  return (
    <span
      onClick={(e) => {
        afficheId ? afficheId(e) : "";
      }}
      id="roock"
      className=" iconRPS"
    >
      <FaHandRock />
    </span>
  );
};

export default Roock;
