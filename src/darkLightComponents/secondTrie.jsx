import React, { useState } from "react";

import { useRef } from "react";
const SecondTrie = () => {
  const ClickButton = () => {};
  return (
    <>
      <div
        id="theDiv"
        ref={theDiv}
        className=" bg-yellow-400  h-500vh w-500vh ml-50vh rounded-full transition duration-1000   overflow-hidden flex flex-col items-center justify-between  "
      >
        <span
          className="bg-red-300 w-10 h-6 mt-2  transition duration-0 delay-500 "
          ref={theSun}
        >
          sun{" "}
        </span>

        <span
          className="bg-red-300 w-10 h-6   transition duration-0 delay-500 "
          ref={theMoon}
        >
          moon{" "}
        </span>
      </div>
      <div className=" absolute z-20  top-40vh h-100vh bg-slate-400 w-full">
        <h1 className="text-center mb-4">Hello form the dark /light App </h1>
        <button
          className=" w-20 h-10 block bg-yellow-300 text-white border m-auto border-3   rounded-sm "
          onClick={ClickButton}
        >
          {" "}
          rotate 180{" "}
        </button>
      </div>
    </>
  );
};

export default SecondTrie;
