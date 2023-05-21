import "../scss/popup.scss";
import Button from "./Button";
function PopUp({ newGame, game, setGame }) {
  return (
    <>
      {(game.pause || game.finish) && (
        <div className="containerPopUp">
          <h2>{game.pause ? "Pause" : "Game over"}</h2>
          {!game.pause && (
            <h2>
              {" "}
              Time: {Math.floor(game.time / 60)} :{" "}
              {game.time - Math.floor(game.time / 60) * 60}
            </h2>
          )}

          <div>
            <Button name={"btn-newGame"} action={newGame} />
            {!game.finish && (
              <Button
                action={() => {
                  setGame((prevState) => ({
                    ...prevState,
                    pause: !game.pause,
                  }));
                }}
                name={"btn-back"}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
