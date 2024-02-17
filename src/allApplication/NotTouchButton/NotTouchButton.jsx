import React, { useRef } from "react";

const NotTouchButton = () => {
  const theButton = useRef();

  const notTouch = () => {
    const info = theButton.current.getBoundingClientRect();
    // console.log("Hello from the function ");
    console.log(info);

    const elem = theButton.current.style;

    // get the width and height of the page
    const pw = document.documentElement.clientWidth;
    const ph = document.documentElement.clientHeight;
    // cheak the div of the button inside the the page :

    // if (info.x > info.width && info.y > info.height) {
    if (
      info.x > 0 &&
      info.y > 0 &&
      info.x + info.width < pw &&
      info.y + info.height < ph
    ) {
      console.log("inside the box ");
      // the mouvenment
      if (event.clientX < info.x + info.width / 2) {
        if (event.clientY < info.y + info.height / 2) {
          console.log("case 01");
          elem.top = `${info.top + 30}px `;
          elem.left = `${info.left + 30}px `;
        } else {
          console.log("case 02");
          elem.top = `${info.top - 30}px `;
          elem.left = `${info.left + 30}px `;
        }
      } else {
        if (event.clientY < info.y + info.height / 2) {
          console.log("case 03");
          elem.top = `${info.top + 30}px `;
          elem.left = `${info.left - 30}px `;
        } else {
          console.log("case 04");
          elem.top = `${info.top - 30}px `;
          elem.left = `${info.left - 30}px `;
        }
      }
    } else {
      console.log("outside the box ");

      //   case 01 y= 0 , 0<x<100%
      if (info.y <= 0) {
        console.log("outside case 01");
        elem.top = `${info.top + info.height}px `;
      }

      //   case 02 x= 0 , 0<y<100%
      if (info.x <= 0) {
        console.log("outside case 02");
        elem.left = `${info.left + info.width}px `;
      }

      //   case 03 y= 100% , 0<y<100%
      if (info.y >= ph - info.height) {
        console.log("outside case 03");
        elem.top = `${info.top - info.height}px `;
      }

      //   case 04 x=100% , 0<y<100%
      if (info.x >= pw - info.width) {
        console.log("outside case 04");
        elem.top = `${info.top - info.height}px `;
        elem.left = `${info.left - info.width}px `;
      }
      // the mouvenment
    }
  };
  return (
    <div
      className="w-200px h-16   flex justify-center items-center relative"
      onMouseMove={notTouch}
      ref={theButton}
    >
      <button className="cantTouch bg-green-400 h-10 w-40">
        {" "}
        can't touch me{" "}
      </button>
    </div>
  );
};

export default NotTouchButton;
