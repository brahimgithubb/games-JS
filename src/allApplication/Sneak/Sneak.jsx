import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const array = [1, 2, 3, 4, 5, 1, 2, 3, 4];
  const theSneak = useRef();
  const [intervId, setInterId] = useState();
  const [toggleValue, setToggle] = useState();

  // helpfull function :

  // 1/ move to right for the Sneak Div :
  const moveToRight = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // 2/ move to left for the Sneak Div :
  const moveToLeft = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // 3/ move to down for the Sneak Div :
  const moveToDown = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // 4/ move to up for the Sneak Div :
  const moveToUpp = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // 0/ moveFunction x + 40px
  const moveFunction = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
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

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      // Perform action for arrow up key press
      console.log("Arrow Up pressed");
    } else if (event.key === "ArrowDown") {
      // Perform action for arrow down key press
      console.log("Arrow Down pressed");
    } else if (event.key === "ArrowLeft") {
      // Perform action for arrow left key press
      console.log("Arrow Left pressed");
    } else if (event.key === "ArrowRight") {
      // Perform action for arrow right key press
      console.log("Arrow Right pressed");
    }
  });

  return (
    <>
      <div
        className="sneakContainer moveX flex flex-wrap flex-row-reverse w-32  bg-yellow-300 "
        ref={theSneak}
      >
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
          start
        </button>
        <button
          onClick={() => {
            setToggle(2);
          }}
          className="w-16  h-4 bg-gray-500 h-8 rounded-sm my-4 mx-2 "
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default Sneak;
