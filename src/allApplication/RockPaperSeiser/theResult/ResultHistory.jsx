import React from "react";

import Paper from "../spanRockPaperSeiser/Paper";
import Seiser from "../spanRockPaperSeiser/Seiser";
import Roock from "../spanRockPaperSeiser/Roock";

const ResultHistory = ({ history }) => {
  return (
    <>
      {history.map((elem) => {
        const { elemYou, elemCom, result, id } = elem;

        return (
          <div key={id} className="history flex justify-around w-60% h-fit ">
            {elemYou ? (
              <span>
                {elemYou == "paper" ? <Paper /> : ""}
                {elemYou == "seiser" ? <Seiser /> : ""}
                {elemYou == "roock" ? <Roock /> : ""}
              </span>
            ) : (
              ""
            )}
            {result != undefined ? (
              <div className="resultDiv bg-pink-400 flex justify-center items-center p-3 font-mono w-300px">
                {result == 0 ? (
                  <span className="spanResult bg-red-600"> Lose</span>
                ) : (
                  ""
                )}
                {result == 0.5 ? (
                  <span className=" spanResult bg-gray-500"> Draw</span>
                ) : (
                  ""
                )}
                {result == 1 ? (
                  <span className=" spanResult bg-green-500"> Win</span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {elemCom ? (
              <span>
                {elemCom == "paper" ? <Paper /> : ""}
                {elemCom == "seiser" ? <Seiser /> : ""}
                {elemCom == "roock" ? <Roock /> : ""}
              </span>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};

export default ResultHistory;
