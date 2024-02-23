import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const array = [1, 2, 3, 4, 5];
  const theSneak = useRef();
  const [intervId, setInterId] = useState();
  const [toggleValue, setToggle] = useState();

  // helpfull function :
  // 1/ moveFunction x + 40px
  const moveFunction = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
    elem.classList.add("moveX");
    console.log("move Function ");
    console.log(cordination);
  };

  //   moveSneakDiv() function :
  const moveSneakDiv = () => {
    let interId;
    // clear the interval first before the interval :
    setToggle(1);
    // the cordination of the Sneak Ref dev
    const cordination = theSneak.current;
    interId = setInterval(() => {
      if (
        Math.ceil(
          cordination.getBoundingClientRect().left +
            cordination.getBoundingClientRect().width +
            40
        ) <= window.innerWidth
      ) {
        console.log("********", "conditon width is correct");
        console.log(
          Math.ceil(
            cordination.getBoundingClientRect().left,
            cordination.getBoundingClientRect().width + 40
          ),
          window.innerWidth
        );
        moveFunction(theSneak.current);
      }
    }, 500);

    // save the id interval :
    setInterId(interId);
  };

  //   clear the interval

  useEffect(() => {
    if (toggleValue == 1) {
      moveSneakDiv();
      return clearInterval(intervId);
    }
    if (toggleValue == 2) {
      return clearInterval(intervId);
    }
  }, [toggleValue]);

  return (
    <>
      <div className="sneakContainer flex  bg-yellow-300 moveX" ref={theSneak}>
        {/* the spans of the div of the sneaks  */}
        {array.map((elem, index) => {
          return (
            <span
              className=" block bg-green-400 border border-black w-4 h-4 "
              key={index}
            ></span>
          );
        })}
      </div>

      <div className="controll Help">
        <button
          onClick={() => {
            setToggle(1);
          }}
          className="w-16  h-4 bg-gray-500 h-8 rounded-sm my-4 mx-2 "
        >
          {" "}
          start{" "}
        </button>
        <button
          onClick={() => {
            setToggle(2);
          }}
          className="w-16  h-4 bg-gray-500 h-8 rounded-sm my-4 mx-2 "
        >
          {" "}
          Stop{" "}
        </button>
      </div>
    </>
  );
};

export default Sneak;
