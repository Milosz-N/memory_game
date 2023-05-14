import { useState, useEffect } from "react";
import "../scss/buttons.scss";
import "../scss/main.scss";
import { newGame } from "./newGame";

function Buttons({startGame, finish, time, setTime, pause, setPause, setCards, setFinish,setStartGame}) {
    const [hovered, setHovered] = useState(false);
    const [hoveredGame, setHoveredGame] = useState(false)
 useEffect(() => {
    const interval = setInterval(() => {
      if(startGame && !finish) { //I used '!paused' because I set pause initially to false. 
        // if (!pause || !finish) {
          setTime(time + 1);
        // }
      }
    }, 1000);
    return () => clearInterval(interval);
  });
useEffect(()=> {
    const cards = document.querySelectorAll('.searched');
    // console.log(cards);
    if(pause){
    for (Element of cards){
        Element.disabled = 'true'
    }
    }else{
    for (Element of cards){
        Element.disabled = false;
    }
 }
}, [pause])
// function newGame() {
//     if (window.confirm("Are you sure?")) {
      
//         setCards(new Array(10).fill(false));
//         setStartGame(false);
//         setFinish(false);
//         setTime(0);
//         setPause(false);
//     }
//   }
  return (<>
  {startGame &&<>
     <h2>
              {" "}
              Time: {Math.floor(time / 60)} :{" "}
              {time - Math.floor(time / 60) * 60}
            </h2>
    <div className="containerSettings">
    <label
               className={hovered ? 'toogle-1' : 'toogle-2'}
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
                  className={`btnPause ${
                    hovered ? 'toogle-1_button' : 'toogle-2_button'
                  }`}
                  onClick={() => {
                    setPause(prevState => !prevState);
                  }}
                ></span>
              </label>

    <label
               className={hoveredGame ? 'toogle-1 ' : 'toogle-2 '}
               onMouseEnter={() => setHoveredGame(!hoveredGame)}
               onMouseLeave={() => setHoveredGame(!hoveredGame)}
              
              >
    <input
                  type="checkbox"
                  id="toggle1"
                  className={` ${
                   "toogle-1_input " 
                  }`}
                 
                />
        <span
                  className={`btnNewGame ${
                    hoveredGame ? 'toogle-1_button ' : 'toogle-2_button '
                  }`}
                  onClick={() => {
                    onclick = newGame(setCards, setStartGame, setFinish, setTime, setPause)
                  }}
                ></span>
              </label>
    </div>
    </>}
    </>
  );
}

export default Buttons;
