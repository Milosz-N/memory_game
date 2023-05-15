import { useEffect } from "react";
import "../scss/buttons.scss";
import "../scss/main.scss";
import Button from "./Button";

function Buttons({
  startGame,
  finish,
  time,
  setTime,
  pause,
  setPause,
  newGame
}) {

  useEffect(() => {
    const interval = setInterval(() => {
      if (startGame && !finish && !pause) {
        setTime(time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    const cards = document.querySelectorAll(".searched");
    // console.log(cards);
    if (pause) {
      for (Element of cards) {
        Element.disabled = "true";
      }
    } else {
      for (Element of cards) {
        Element.disabled = false;
      }
    }
  }, [pause]);
  // function newGame() {
  //     if (window.confirm("Are you sure?")) {

  //         setCards(new Array(10).fill(false));
  //         setStartGame(false);
  //         setFinish(false);
  //         setTime(0);
  //         setPause(false);
  //     }
  //   }
  return (
    <>
      {startGame && (
        <>
          <h2 className="time">
            {" "}
            Time: {Math.floor(time / 60)} : {time - Math.floor(time / 60) * 60}
          </h2>
          <div className="containerSettings">
            <Button
              name={"btn-newGame"}
              action={newGame}
            />
            <Button
              action={() => {
                setPause((prevState) => !prevState);
              }}
              name={"btn-pause"}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Buttons;
