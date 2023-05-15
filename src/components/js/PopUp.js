
import "../scss/popup.scss";
import Button from "./Button";
function PopUp({
  pause,
  finish,
  time,
  setPause,
  newGame
}) {
 
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
        
          <div>
           <Button
              name={"btn-newGame"}
              action={newGame}
            />
          {!finish && (
            <Button
            action={() => {
              setPause((prevState) => !prevState);
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
