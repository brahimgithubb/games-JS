import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Sneak = () => {
  const arrayStart = [1, 2, 3, 4, 5, 6];
  const theSneak = useRef();

  // keyMove from 1 to 5 (5 is for shutDown the intervels and clear all intervels )
  const [keyMove, setKeyMove] = useState();

  // All Intervl ids
  const [idRight, setIdRight] = useState();

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

  // start  function Right :
  const moveToRight = (elem, index, coordinationElem) => {
    if (coordinationElem.right + 16 * index < window.innerWidth) {
      console.log(
        "coordination left  of first span red : ",
        coordinationElem.x,
        "this is the width of the page ",
        window.innerWidth
      );
      elem.style.left = `${coordinationElem.left + 16}px`;
    }
    if (coordinationElem.left + 16 >= window.innerWidth) {
      console.log("Hello yeess inside ___________-", keyMove);
      setKeyMove(5);
    }
    console.log("Hello from outside ");
  };
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

  // useEffect base on the keyMove

  useEffect(() => {
    switch (keyMove) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        const intervalId = setInterval(() => {
          const arraySpan = updateSneak();
          // const arrayCoordination = updateCoordination();
          arraySpan.forEach((elem, index) => {
            moveToRight(elem, index, arraySpan[index].getBoundingClientRect());
          });
        }, 200);
        setIdRight(intervalId);
        return () => clearInterval(idRight);
      case 5:
        clearInterval(idRight);
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
