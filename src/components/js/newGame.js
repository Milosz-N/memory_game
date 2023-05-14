export const newGame = (setCards, setStartGame, setFinish, setTime, setPause, setResult) => {
    if (window.confirm("Are you sure?")) {
      
        setCards(new Array(10).fill(false));
        setStartGame(false);
        setFinish(false);
        setTime(0);
        setPause(false);
        setResult([]);
    }

    
  };