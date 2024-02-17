import React from "react";
import { FaHandPeace } from "react-icons/fa";

const Seiser = ({ afficheId }) => {
  return (
    <span
      id="seiser"
      onClick={(e) => {
        afficheId ? afficheId(e) : "";
      }}
      className=" iconRPS"
    >
      <FaHandPeace />
    </span>
  );
};

export default Seiser;
