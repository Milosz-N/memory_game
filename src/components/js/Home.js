import { useState, useEffect } from "react";
import Settings from "../js/Settings.js";
import Game from "../js/Game.js";

function Home() {
  const [cards, setCards] = useState(new Array(10).fill(false));
  const [time, setTime] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [finish, setFinish] = useState(false);
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
        finish={finish}
        setFinish={setFinish}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}

export default Home;
