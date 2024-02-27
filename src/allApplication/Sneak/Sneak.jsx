import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const [arrayStart, setArrayStart] = useState([1, 2, 3, 4, 5, 6]); // lenght 6 , indexMax 5
  const theSneak = useRef();

  const [testKey, setKey] = useState(10);
  const [arrayLengthChange, setArrayLength] = useState(arrayStart.length);
  // setToggleKeys();
  const [keysToggle, setToggleKeys] = useState();
  // idIntervals ();
  const [idDown, setIdDown] = useState();
  const [idRight, setIdRight] = useState();
  const [idLeft, setIdLeft] = useState();
  const [idUpp, setIdUpp] = useState();
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
  const moveToLeft = (elem, index, arraySpans) => {
    const cordination = elem.getBoundingClientRect();
    console.log("Hello from map moveToLeft , : ", cordination.top, index);

    //  from down

    if (cordination.bottom < arraySpans[0].getBoundingClientRect().bottom) {
      // move 16 px to right
      elem.style.top = `${cordination.y + 16}px `;
      console.log("Yesssp ", index);
    }

    if (testKey == 1) {
      if (cordination.bottom > arraySpans[0].getBoundingClientRect().bottom) {
        // move 16 px to right
        elem.style.top = `${cordination.y - 16}px `;
        console.log("Yesssp ", index);
      }
    }

    // origin move
    if (
      cordination.left - 16 >= 0 &&
      cordination.top == arraySpans[0].getBoundingClientRect().top
    ) {
      // move 16px to bottom
      elem.style.left = `${cordination.x - 16}px `;
      console.log("yyyyyyyyy ", index);
    }

    // the limites of shutDown the operation
    if (cordination.left - 16 <= 0 && index == arraySpans.length - 1) {
      setToggleKeys(5);
    }
  };

  // 2/ move to Right for the Sneak Div :
  const moveToRight = (elem, index, arraySpans) => {
    const cordination = elem.getBoundingClientRect();
    setTimeout(() => {
      elem.style.background = "red";
    }, 500 * index);
    //   condition to move to right

    if (testKey == 2) {
      if (cordination.bottom < arraySpans[0].getBoundingClientRect().bottom) {
        // move 16 px to right
        elem.style.top = `${cordination.y + 16}px `;
        console.log("Yesssp ", testKey, index);
      }
    }

    // case from upp into right

    if (testKey == 1) {
      if (cordination.bottom > arraySpans[0].getBoundingClientRect().bottom) {
        console.log("Yesssp ", testKey, index);
        elem.style.top = `${cordination.y - 16}px `;
      }
    }

    console.log("______________************* _____ Right key  :");

    if (
      cordination.right < window.innerWidth &&
      cordination.top == arraySpans[0].getBoundingClientRect().top
    ) {
      elem.style.left = `${cordination.x + 16}px `;
      // console.log("Yesssp ", index);
    }
    // condition of shutDown
    if (
      cordination.right + 16 >= window.innerWidth &&
      index == arraySpans.length - 1
    ) {
      console.log("this is the toggle 5 ", index);
      setToggleKeys(5);
    }
  };

  // update the coordination for the first rendering :
  useEffect(() => {
    updateCordination();
  }, []);
  // useEffect(() => {
  //   console.log("_____________________");
  //   console.log(arrayCordination);
  //   console.log("_____________________");
  // }, [arrayCordination]);

  // 3/ move to down for the Sneak Div :
  const moveToDown = (elem, index, arraySpans) => {
    const cordination = elem.getBoundingClientRect();
    setTimeout(() => {
      elem.style.background = "red";
    }, 500 * index);
    //   cordination.right < arraySpans[0].getBoundingClientRect().right

    if (testKey != 3) {
      if (cordination.right < arraySpans[0].getBoundingClientRect().right) {
        // move 16 px to right
        console.log("________________________ Down Key  :", testKey);
        elem.style.left = `${cordination.x + 16}px `;
        // console.log("Yesssp ", index);
      }
    }
    if (testKey == 3) {
      if (cordination.right > arraySpans[0].getBoundingClientRect().right) {
        elem.style.left = `${cordination.x - 16}px `;
      }
    }
    if (
      cordination.bottom + 16 <= window.innerHeight &&
      Math.floor(cordination.right) ==
        Math.floor(arraySpans[0].getBoundingClientRect().right)
    ) {
      // move 16px to bottom
      elem.style.top = `${cordination.y + 16}px `;
    }

    if (
      cordination.bottom + 16 >= window.innerHeight &&
      index == arraySpans.length - 1
    ) {
      setToggleKeys(5);
    }
  };

  // 4/ move to up for the Sneak Div :
  const moveToUpp = (elem, index, arraySpans) => {
    const cordination = elem.getBoundingClientRect();
    setTimeout(() => {
      elem.style.background = "red";
    }, 500 * index);
    //   cordination.right < arraySpans[0].getBoundingClientRect().right
    if (testKey != 3) {
      if (cordination.left < arraySpans[0].getBoundingClientRect().left) {
        // move 16 px to right
        elem.style.left = `${cordination.x + 16}px `;
        // console.log("Yesssp ", index);
      }
    }

    if (testKey == 3) {
      if (cordination.right > arraySpans[0].getBoundingClientRect().right) {
        elem.style.left = `${cordination.x - 16}px `;
      }
    }
    // origin move :
    if (
      cordination.top - 16 >= 0 &&
      Math.floor(cordination.left) ==
        Math.floor(arraySpans[0].getBoundingClientRect().left)
    ) {
      // move 16px to bottom
      elem.style.top = `${cordination.y - 16}px `;
    }
    // condition shutdown

    if (cordination.top - 16 <= 0 && index == arraySpans.length - 1) {
      setToggleKeys(5);
    }
  };

  // function help of loop intervals

  const clearFunction = (table) => {
    for (let i = 0; i < table.length; i++) {
      setTimeout(() => {
        clearInterval(table[i]);
      }, 500 * i);
    }
  };
  // the main controol
  useEffect(() => {
    // console the array
    if (keysToggle == 1) {
      clearInterval(idRight);
      clearInterval(idLeft);
      clearInterval(idDown);

      setKey(1);

      const newId = setInterval(() => {
        arraySpans.map((elem, index, arraySpans) => {
          moveToUpp(elem, index, arraySpans);
        });
      }, 300);

      setIdUpp(newId);
    }
    if (keysToggle == 2) {
      clearInterval(idRight);
      clearInterval(idLeft);
      clearInterval(idUpp);
      setKey(2);

      const newId = setInterval(() => {
        arraySpans.map((elem, index, arraySpans) => {
          moveToDown(elem, index, arraySpans);
        });
      }, 300);
      setIdDown(newId);
    }
    if (keysToggle == 3) {
      clearInterval(idDown);
      clearInterval(idRight);
      clearInterval(idUpp);

      setKey(3);

      const newId = setInterval(() => {
        arraySpans.map((elem, index, arraySpans) => {
          moveToLeft(elem, index, arraySpans);
        });
      }, 300);

      setIdLeft(newId);
      // console.log(arrayCordination);
    }
    if (keysToggle == 4) {
      clearInterval(idDown);
      clearInterval(idLeft);
      clearInterval(idUpp);

      setKey(4);

      const newId = setInterval(() => {
        arraySpans.map((elem, index, arraySpans) => {
          moveToRight(elem, index, arraySpans);
        });
      }, 300);

      setIdRight(newId);
    }

    if (keysToggle === 5) {
      clearInterval(idDown);
      clearInterval(idRight);
      clearInterval(idUpp);
      clearInterval(idLeft);
      // clearInterval(idRight);
    }
  }, [keysToggle]);

  const handleArrowKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setToggleKeys(1);
        console.log("Arrow Up pressed");
        break;
      case "ArrowDown":
        setToggleKeys(2);
        console.log("Arrow Down pressed");
        break;
      case "ArrowLeft":
        setToggleKeys(3);
        console.log("Arrow Left pressed");
        break;
      case "ArrowRight":
        setToggleKeys(4);
        console.log("Arrow Right pressed");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeyPress);
    return () => {
      document.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, []);

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
