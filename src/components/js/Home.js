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
    selectedCards: []
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
      {/* <Result result={[...new Map(game.result.map((o) => [o.id, o])).values()]} /> */}
      <Result result={game.result}  start={game.start} />

    </>
  );
}

export default Home;
