import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const arrayStart = [1, 2, 3, 4, 5, 6];
  const theSneak = useRef();

  // keyMove from 1 to 5 (5 is for shutDown the intervels and clear all intervels )
  const [keyMove, setKeyMove] = useState();

  // previous key :
  const [previousKey, setPreviousKey] = useState(10);

  // All Intervl ids
  const [idRight, setIdRight] = useState([]);
  const [idDown, setIdDown] = useState([]);

  // get update coordination of the spanArray :
  const updateSneak = () => {
    return Array.from(document.getElementsByClassName("golobalSpan"));
  };

  // get update coordination of the Sneak :
  const updateCoordination = () => {
    return updateSneak().map((elem) => {
      return elem.getBoundingClientRect();
    });
  };
  // start betweenSpan 16px between elements of the arrayStart
  const betweenSpanSpace = () => {
    updateSneak()
      .reverse()
      .map((elem, index) => {
        elem.style.left = `${elem.getBoundingClientRect().left + 16 * index}px`;
      });
  };
  // add color for the first and the second spans :

  const colorizeFS = () => {
    updateSneak().map((elem, index) => {
      if (index == 0) {
        elem.style.background = "red";
      }
      if (index == 1) {
        elem.style.background = "blue";
      }
      if (index == 2) {
        elem.style.background = "yellow";
      }
      if (index == 3) {
        elem.style.background = "white";
      }
      if (index == 4) {
        elem.style.background = "black";
      }
    });
  };

  useEffect(() => {
    betweenSpanSpace();
    colorizeFS();
  }, []);
  // done between span 16px

  //2// start of the moveToDown()

  const moveToDown = (elem, index, coordinationElem, firstSpan) => {
    if (coordinationElem.right < firstSpan.right) {
      elem.style.left = `${coordinationElem.left + 16}px`;
    }
    if (
      coordinationElem.bottom + 16 * index < window.innerHeight &&
      coordinationElem.left == firstSpan.left
    ) {
      elem.style.top = `${coordinationElem.top + 16}px`;
    }
    if (coordinationElem.bottom + 16 >= window.innerHeight) {
      setKeyMove(5);
    }
    console.log("Hello from outside ");
  };

  //2// end of the moveToDown()

  // 4 // start  function Right :
  const moveToRight = (elem, index, coordinationElem, firstSpan) => {
    if (
      coordinationElem.right + 16 * index < window.innerWidth &&
      coordinationElem.top == firstSpan.top
    ) {
      console.log(
        "top of firstSpan : ",
        firstSpan.top,
        "top of elem : ",
        coordinationElem.top,
        "index is : ",
        index
      );
      elem.style.left = `${coordinationElem.left + 16}px`;
    }
    if (coordinationElem.left + 16 >= window.innerWidth) {
      console.log("Hello yeess inside ___________-", keyMove);
      setKeyMove(5);
    }
    console.log("Hello from outside ");
  };

  // 4 //end of the moveToRight()

  const handleArrowKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        console.log("Arrow Up pressed");
        setKeyMove(1);

        break;
      case "ArrowDown":
        console.log("Arrow Down pressed");
        setKeyMove(2);
        break;
      case "ArrowLeft":
        console.log("Arrow Left pressed");
        setKeyMove(3);
        break;
      case "ArrowRight":
        console.log("Arrow Right pressed");
        console.log(updateCoordination()[0]);
        setKeyMove(4);
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

  //  end of the key Event

  // clearFunction :

  const clearFunction = (table) => {
    table.forEach((elem, index) => {
      clearInterval(elem);
    });
  };
  const clearFunctionDelay = (table) => {
    table.forEach((elem, index) => {
      setTimeout(() => {
        clearInterval(elem);
      }, 500 * index);
    });
  };

  // end Clear Function :

  // useEffect base on the keyMove
  useEffect(() => {
    switch (keyMove) {
      case 1:
        break;
      case 2:
        clearFunction(idRight);
        setPreviousKey(2);
        const arraySpanDown = updateSneak();
        const fisrtSpan = updateCoordination()[0];
        const idDownNew = arraySpanDown.map((elem, index) => {
          return setInterval(() => {
            // const arrayCoordination = updateCoordination();

            setTimeout(
              () => {
                moveToDown(
                  elem,
                  index,
                  arraySpanDown[index].getBoundingClientRect(),
                  fisrtSpan
                );
              },
              previousKey != 10 && index != 0 ? 500 * index : 0
            );
          }, 500);
        });
        setIdDown([...idDown, ...idDownNew]);
        return () => clearFunction(idDown);
      case 3:
        break;
      case 4:
        clearFunctionDelay(idDown);
        setPreviousKey(4);
        const arraySpan = updateSneak();
        const fisrtSpanRight = updateCoordination()[0];

        const idRightNew = arraySpan.map((elem, index) => {
          return setInterval(() => {
            // const arrayCoordination = updateCoordination();

            setTimeout(
              () => {
                moveToRight(
                  elem,
                  index,
                  arraySpan[index].getBoundingClientRect(),
                  // arraySpan[0].getBoundingClientRect()
                  fisrtSpanRight
                );
              },
              previousKey != 10 && index != 0 ? 500 * index : 0
            );
          }, 500);
        });
        setIdRight([...idRight, ...idRightNew]);
        return () => clearFunction(idRight);
      case 5:
        clearFunction(idRight);
        clearFunction(idDown);
        break;
    }
  }, [keyMove]);
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
    </>
  );
};

export default Sneak;
