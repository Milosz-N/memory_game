import { useState } from "react";
import Settings from "../js/Settings.js";
import Game from "../js/Game.js";
import Buttons from "./Buttons.js";
import PopUp from "./PopUp.js";
import Result from "./Result.js";
import { newGame } from "./newGame.js";
function Home() {
  const [game, setGame] = useState({
    start: false,
    finish: false,
    pause: false,
    time: 0,
    cards: new Array(10).fill(false),
    result: [],
  });
  return (
    <>
      <Settings game={game} setGame={setGame} />
      <Game game={game} setGame={setGame} />
      <Buttons
        newGame={() => {
          onclick = newGame(setGame);
        }}
        game={game}
        setGame={setGame}
      />
      <PopUp
        newGame={() => {
          onclick = newGame(setGame);
        }}
        game={game}
        setGame={setGame}
      />
      {/* <Result result={[...new Map(result.map((o) => [o.id, o])).values()]} /> */}
    </>
  );
}

export default Home;
