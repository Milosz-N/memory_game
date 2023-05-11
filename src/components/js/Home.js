import { useState, useEffect } from "react";
import Settings from "../js/Settings.js";
import Game from "../js/Game.js";
import Buttons from "./Buttons.js";
import PopUp from "./PopUp.js";

function Home() {
  const [cards, setCards] = useState(new Array(10).fill(false));
  const [startGame, setStartGame] = useState(false);
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false)

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
        pause={pause}
        setPause={setPause}
      />
      <Buttons
      startGame={startGame}
      finish={finish}
      time={time}
      setTime={setTime}
      pause={pause}
      setPause={setPause}
    setCards={setCards}
    setFinish={setFinish}
    setStartGame={setStartGame}      
      />
      <PopUp
      pause={pause}
      finish={finish}
      time={time}
      setStartGame={setStartGame}
      setFinish={setFinish}
      setTime={setTime}
      setPause={setPause}
      setCards={setCards}
      />
    </>
  );
}

export default Home;
