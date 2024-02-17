import React, { useEffect, useRef, useState } from "react";

import Paper from "./spanRockPaperSeiser/Paper";
import Seiser from "./spanRockPaperSeiser/Seiser";
import Roock from "./spanRockPaperSeiser/Roock";
import ResultHistory from "./theResult/ResultHistory";

const RoPaSe = () => {
  const [youCount, setYouCount] = useState(0);
  const [computerCount, setCoupmuterCount] = useState(0);
  const [result, setResult] = useState();

  const RPSobject = [
    { id: 1, value: "paper" },
    { id: 2, value: "seiser" },
    { id: 3, value: "roock" },
  ];
  const testCompVSPaper = (compValue) => {
    if (compValue == "paper") {
      setYouCount(youCount + 0.5);
      setCoupmuterCount(computerCount + 0.5);
      return 0.5;
    } else {
      if (compValue == "seiser") {
        setCoupmuterCount(computerCount + 1);
        return 0;
      } else {
        setYouCount(youCount + 1);
        return 1;
      }
    }
  };
  const testCompVSSeiser = (compValue) => {
    if (compValue == "seiser") {
      setYouCount(youCount + 0.5);
      setCoupmuterCount(computerCount + 0.5);
      return 0.5;
    } else {
      if (compValue == "roock") {
        setCoupmuterCount(computerCount + 1);

        return 0;
      } else {
        setYouCount(youCount + 1);
        return 1;
      }
    }
  };
  const testCompVSRoock = (compValue) => {
    if (compValue == "roock") {
      setYouCount(youCount + 0.5);
      setCoupmuterCount(computerCount + 0.5);
      return 0.5;
    } else {
      if (compValue == "paper") {
        setCoupmuterCount(computerCount + 1);
        return 0;
      } else {
        setYouCount(youCount + 1);
        return 1;
      }
    }
  };
  const [elemYou, setElemYou] = useState();
  const [elemCom, setElemComp] = useState();

  const theRandValue = 1 + Math.floor(Math.random() * 3);
  const [randNum, setTheRandNumber] = useState(theRandValue);

  const afficheId = (e) => {
    // the NewRand number
    let theNewRand = 1 + Math.floor(Math.random() * 3);
    while (randNum == theNewRand) {
      theNewRand = 1 + Math.floor(Math.random() * 3);
    }
    setTheRandNumber(theNewRand);

    const valueComp = RPSobject[randNum - 1].value;
    const valueYou = e.currentTarget.id;

    console.log("$$$$$$$$$$$  ", elemCom);
    console.log("$$$$$$$$$$$  ", result);
    // set this element needed on the history div after the result div
    setElemYou(valueYou);
    setElemComp(valueComp);

    if (valueYou == "paper") {
      setResult(testCompVSPaper(valueComp));
    } else if (valueYou == "seiser") {
      setResult(testCompVSSeiser(valueComp));
    } else {
      setResult(testCompVSRoock(valueComp));
    }
  };

  // object of the newValues :
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setCount(count + 1);
    const newObj = { elemYou, elemCom, result, id: count };

    if (newObj.elemYou) {
      setHistory([newObj, ...history]);
    }
  }, [elemYou, elemCom]);

  console.log("the data is : ", history);

  // the return of the component
  return (
    <section className="containerRPS flex flex-col space-y-5 justify-around ">
      {/* the icones Paper Rock Seiser */}
      <div className="iconesRPS flex justify-around items-start w-80% ">
        <Paper afficheId={afficheId} />
        <Seiser afficheId={afficheId} />
        <Roock afficheId={afficheId} />
      </div>

      {/* the Result of you and the computer */}
      <div className="resultRPS flex justify-around  items-center w-60% bg-red-400 h-16">
        <span className=" text-xl flex justify-center space-x-4 w-20%">
          <span className="flex items-center "> You : </span>
          <span className=" text-4xl  text-black   ">{youCount}</span>
        </span>
        <span className=" text-xl flex justify-center space-x-4 w-20%">
          <span className="flex items-center "> Computer : </span>
          <span className=" text-4xl  text-black   ">{computerCount}</span>
        </span>
      </div>

      {/* the Result History :  */}
      <ResultHistory history={history} />
    </section>
  );
};

export default RoPaSe;
