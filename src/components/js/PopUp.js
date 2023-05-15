import { useState, useEffect } from "react";
import "../scss/popup.scss";
import { newGame } from "./newGame";
import Button from "./Button";

function PopUp({
  pause,
  finish,
  time,
  setStartGame,
  setFinish,
  setTime,
  setPause,
  setCards,
  setResult,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {(pause || finish) && (
        <div className="containerPopUp">
          <h2>{pause ? "Pause" : "Game over"}</h2>
          {!pause && (
            <h2>
              {" "}
              Time: {Math.floor(time / 60)} :{" "}
              {time - Math.floor(time / 60) * 60}
            </h2>
          )}
          {/* <label
            className={hovered ? "toogle-1" : "toogle-2"}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(!hovered)}
          >
            <input
              type="checkbox"
              id="toggle1"
              className={` ${"toogle-1_input "}`}
            />
            <span
              className={` ${hovered ? "toogle-1_button" : "toogle-2_button"}`}
              onClick={() => {
                onclick = newGame(
                  setCards,
                  setStartGame,
                  setFinish,
                  setTime,
                  setPause,
                  setResult
                );
              }}
            ></span>
          </label> */}
          <div>
           <Button
              name={"btn-newGame"}
              action={() => {
                onclick = newGame(
                  setCards,
                  setStartGame,
                  setFinish,
                  setTime,
                  setPause,
                  setResult
                );
              }}
            />
          {!finish && (
            <Button
            action={() => {
              setPause((prevState) => !prevState);
            }}
            name={"btn-pause"}
          />
          )}
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
