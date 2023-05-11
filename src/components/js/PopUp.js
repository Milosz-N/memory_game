import { useState, useEffect } from "react";
import "../scss/popup.scss"

function PopUp({pause, finish, time, setStartGame, setFinish, setTime, setPause, setCards}) {
const [hovered, setHovered] = useState(false);
function newGame() {
    if (window.confirm("Are you sure?")) {
      
        setCards(new Array(10).fill(false));
        setStartGame(false);
        setFinish(false);
        setTime(0);
        setPause(false);
    }
  }
  return (
    <>
     {(pause || finish ) && <div className="containerPopUp">
        <h2>{pause ? 'Pause' : 'Game over'}</h2>
        {!pause &&  <h2>
              {" "}
              Time: {Math.floor(time / 60)} :{" "}
              {time - Math.floor(time / 60) * 60}
            </h2>}
            <label
               className={hovered ? 'toogle-1 btnPause' : 'toogle-2 btnPause'}
               onMouseEnter={() => setHovered(!hovered)}
               onMouseLeave={() => setHovered(!hovered)}
              
              >
                <input
                  type="checkbox"
                  id="toggle1"
                  className={` ${
                   "toogle-1_input " 
                  }`}
                 
                />
                <span
                  className={` ${
                    hovered ? 'toogle-1_button' : 'toogle-2_button'
                  }`}
                  onClick={() => {
                    onclick = newGame();
                  }}
                ></span>
              </label>
              {!finish && ( <button
             onClick={() => {
                setPause(prevState => !prevState);
                // onclick = newGame();
              }}
            >Back to game</button>) }
           
        
        </div>}
    </>
  );
}

export default PopUp;
