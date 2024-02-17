import React, { useEffect, useRef, useState } from "react";

// icons of sun and moon
import { MdOutlineDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
// get the icones :

import { Sun, Moon } from "./../../Icones/icones";

const Them = () => {
  // the toggle button
  const [toggle, setTheToggle] = useState(false);
  const [refTime, setRefItem] = useState();

  // the references :
  const sun = useRef();
  const moon = useRef();
  const [current, setTheCurrent] = useState([sun, moon]);

  // hide the moon in the first rendering
  useEffect(() => {
    moon.current.style.visibility = "hidden";
  }, []);
  // onClick function :
  const addTheClass = () => {
    moon.current.style.visibility = "visible";
    // for the current[0]
    if (current[0].current.classList.contains("show")) {
      console.log("yes !!!!!!!");
      current[0].current.classList.remove("show");
    }
    if (current[1].current.classList.contains("hide")) {
      console.log("hello !!!!!!!");
      current[1].current.classList.remove("hide");
    }

    // add the hide Class
    current[0].current.classList.toggle("hide");
    // add the afterHide class
    // current[0].current.classList.add("afterHide");

    // for the current[1]

    // add the class show
    current[1].current.classList.toggle("show");

    console.log([current[0].current.id, current[1].current.id]);

    toggle ? setTheCurrent([sun, moon]) : setTheCurrent([moon, sun]);

    console.log("Hello yess exist");
    document.getElementById("root").classList.toggle("darkHello");

    setTheToggle(!toggle);
  };

  return (
    <section id="container">
      <div className="TheIcon pt-16 relative  text-white flex flex-col w-45 h-20 ">
        <span
          className="    text-white  w-10 h-10 absolute top-10% left-1/2  "
          id="sun"
          ref={sun}
        >
          <Sun />
        </span>
        <span
          className="  text-black w-10 h-10 absolute top-90% left-0  "
          id="moon  "
          ref={moon}
        >
          <Moon />
        </span>
      </div>

      <div className="change flex flex-col items-center justify-center pt-16">
        <h1 className={` transition duration-1000 pb-4 text-4xl capitalize `}>
          {" "}
          hello there{" "}
        </h1>
        <button
          // style={
          //   toggle
          //     ? { backgroundColor: "rgb(81, 79, 79)" }
          //     : { backgroundColor: "rgb(253 224 71)" }
          // }
          className={`mt-3 h-10 w-40   rounded-sm flex justify-around border border-black  transition duration-1000 ${
            !toggle ? "border-white" : ""
          }`}
          onClick={addTheClass}
        >
          {toggle ? (
            <span className=" pl-4 text-4xl  ">
              {" "}
              <MdOutlineDarkMode />
            </span>
          ) : (
            <span className="  pl-4 text-4xl">
              <CiSun />
            </span>
          )}
          <span className="text-lg pt-1 ">
            {toggle ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Them;
