import { useState } from "react";
import Settings from "../js/Settings.js";
import Game from "../js/Game.js";
import Buttons from "./Buttons.js";
import PopUp from "./PopUp.js";
import Result from "./Result.js";
import { newGame } from "./newGame.js";
function Home() {
  const [cards, setCards] = useState(new Array(10).fill(false));
  const [startGame, setStartGame] = useState(false);
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [result, setResult] = useState([]);

  return (
    <>
      <Settings
        cards={cards}
        setCards={setCards}
        startGame={startGame}
        setStartGame={setStartGame}
      />
      <Game
        startGame={startGame}
        setFinish={setFinish}
        cards={cards}
        setCards={setCards}
        setResult={setResult}
      />
      <Buttons
        startGame={startGame}
        finish={finish}
        time={time}
        setTime={setTime}
        pause={pause}
        setPause={setPause}
        newGame ={() => {
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
      <PopUp
        pause={pause}
        finish={finish}
        time={time}
        setPause={setPause}
        newGame ={() => {
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
      <Result result={[...new Map(result.map((o) => [o.id, o])).values()]} />
    </>
  );
}

export default Home;
