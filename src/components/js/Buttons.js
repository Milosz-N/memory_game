import { useEffect } from "react";
import "../scss/buttons.scss";
import "../scss/main.scss";
import Button from "./Button";

function Buttons({ newGame, game, setGame }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (game.start && !game.finish && !game.pause) {
        setGame((prevState) => ({
          ...prevState,
          time: game.time + 1,
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    const cards = document.querySelectorAll(".searched");
    // console.log(cards);
    if (game.pause) {
      for (Element of cards) {
        Element.disabled = "true";
      }
    } else {
      for (Element of cards) {
        Element.disabled = false;
      }
    }
  }, [game.pause]);

  return (
    <>
      {game.start && (
        <>
          <h2 className="time">
            {" "}
            Time: {Math.floor(game.time / 60)} :{" "}
            {game.time - Math.floor(game.time / 60) * 60}
          </h2>
          <div className="containerSettings">
            <Button name={"btn-newGame"} action={newGame} />
            <Button
              action={() => {
                setGame((prevState) => ({
                  ...prevState,
                  pause: !game.pause,
                }));
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
