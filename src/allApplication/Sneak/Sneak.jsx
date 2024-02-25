import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const [arrayStart, setArrayStart] = useState([1, 2, 3, 4, 5, 6]); // lenght 6 , indexMax 5
  const theSneak = useRef();

  const [arrayLengthChange, setArrayLength] = useState(arrayStart.length);
  // setToggleKeys();
  const [keysToggle, setToggleKeys] = useState();
  // idIntervals ();
  const [idDown, setIdDown] = useState();
  const [idRight, setIdRight] = useState();
  const [arrayCordinationMainSneak, setMainCordination] = useState();
  // this 2 array is for the functions
  const [arrayCordination, setArrayCordination] = useState();
  const [arraySpans, setArraySpans] = useState();
  // helpfull function :

  // shutDown button

  // useEffect(() => {
  //   const elem = theSneak.current;
  //   elem.classList.remove("w-fit");

  //   if (arrayLengthChange > 0) {
  //     elem.style.width = `${1 * arrayLengthChange}rem`;
  //     console.log("kjslkfjsdlfjks;lfkjds", elem.style.width);
  //   }
  // }, [arrayLengthChange]);
  //
  //
  // function of array of spans and array of cordinations :
  const moveSpansAbsPosi = () => {
    const newArraySpans = Array.from(
      document.getElementsByClassName("golobalSpan")
    ).reverse();

    newArraySpans.map((elem, index) => {
      elem.style.left = `${1 * index}rem`;
    });

    // set the spans into reverse order inside arraySpans
    setArraySpans(newArraySpans.reverse());
  };

  useEffect(() => {
    moveSpansAbsPosi();
  }, []);

  // change the coordinations :

  const updateCordination = () => {
    const newArraySpans = Array.from(
      document.getElementsByClassName("golobalSpan")
    ).reverse();

    const corrd = newArraySpans.map((elem, index) => {
      return elem.getBoundingClientRect();
    });

    // save the new coordination
    setArrayCordination(corrd);
  };

  // 1/ move to Left for the Sneak Div :
  const moveToLeft = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // 2/ move to Right for the Sneak Div :
  const moveToRight = (elem) => {
    // console.log("hello from the moveToRight ")
    // setMainCordination(theSneak.current.getBoundingClientRect());
    // const newId = setInterval(() => {
    //   arraySpans.map((elem, index, arraySpans) => {
    //     const cordination = elem.getBoundingClientRect();
    //     elem.style.background = "red";
    //     //   condition to move to right
    //     if (cordination.right < window.innerWidth) {
    //       // move 16 px to right
    //       elem.style.left = `${cordination.x + 16}px `;
    //       // console.log("Yesssp ", index);
    //     }
    //     // condition of shutDown
    //     if (cordination.right + 16 + 16 * index >= window.innerWidth) {
    //       console.log("this is the toggle 5 ", index);
    //       setToggleKeys(5);
    //     }
    //   });
    // }, 500);
    // setIdRight(newId);
  };

  // 3/ move to down for the Sneak Div :
  const moveToDown = () => {
    const newId = setInterval(() => {
      arraySpans.map((elem, index, arraySpans) => {
        updateCordination();
        console.log(arrayCordination);
        const cordination = elem.getBoundingClientRect();
        elem.style.background = "red";
        //   cordination.right < arraySpans[0].getBoundingClientRect().right
        if (cordination.right < arraySpans[0].getBoundingClientRect().right) {
          // move 16 px to right
          elem.style.left = `${cordination.x + 16}px `;
          // console.log("Yesssp ", index);
        } else {
          console.log("NNNNNNNNN", index);
          // setToggleKeys(5);
        }
        if (
          cordination.bottom + 16 + 16 * index <= window.innerHeight &&
          Math.floor(cordination.right) ==
            Math.floor(arraySpans[0].getBoundingClientRect().right)
        ) {
          // move 16px to bottom
          elem.style.top = `${cordination.y + 16}px `;
        }

        if (cordination.bottom + 16 >= window.innerHeight) {
          setToggleKeys(5);
        }
      });
    }, 500);
    setIdDown(newId);
  };

  // 4/ move to up for the Sneak Div :
  const moveToUpp = (elem) => {
    const cordination = elem.getBoundingClientRect();
    elem.style.transform = `translateX(${cordination.x + 40}px)`;
  };

  // the main controol
  useEffect(() => {
    // console the array
    if (keysToggle == 1) {
      // moveToUpp();
      // return clearInterval(idDown);
    }
    if (keysToggle == 2) {
      // updateCordination();
      // clearInterval(idRight);
      console.log(arrayCordination);

      moveToDown();
      return () => {
        clearInterval(idDown);
      };
    }
    if (keysToggle == 3) {
      // moveToLeft();
      clearInterval(idDown);
      // console.log(arrayCordination);
    }
    if (keysToggle == 4) {
    }

    if (keysToggle === 5) {
      console.log("&&&&&&&&&&&&&&&&&&&&_______________--");
      console.log(arrayCordination);
      clearInterval(idDown);
      // clearInterval(idRight);
    }
  }, [keysToggle, arrayCordination]);

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      // Perform action for arrow up key press
      setToggleKeys(1);
      console.log("Arrow Up pressed");
    } else if (event.key === "ArrowDown") {
      // Perform action for arrow down key press
      console.log("Arrow Down pressed");
      setToggleKeys(2);
    } else if (event.key === "ArrowLeft") {
      // Perform action for arrow left key press
      setToggleKeys(3);
      console.log("Arrow Left pressed");
    } else if (event.key === "ArrowRight") {
      setToggleKeys(4);
      // Perform action for arrow right key press
      console.log("Arrow Right pressed");
    }
  });

  return (
    <>
      {/*  flex flex-wrap flex-row-reverse */}
      <div
        className="sneakContainer w-fit moveX grid grid-cols-6 space gap-1 relatvie   bg-yellow-300 "
        ref={theSneak}
      >
        {/* the spans of the div of the sneaks  */}
        {arrayStart.map((_, index) => {
          return (
            <span
              className={`block bg-green-400 border border-black w-4 h-4 absolute top-1  golobalSpan privateSpan_${index}`}
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
        <button className="w-16  h-4 bg-gray-500 h-8 rounded-sm my-4 mx-2 ">
          Down
        </button>
      </div>
    </>
  );
};

export default Sneak;
