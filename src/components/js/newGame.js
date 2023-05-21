export const newGame = (setGame) => {
  if (window.confirm("Press OK to start new game")) {
    setGame((prevState) => ({
      ...prevState,
      start: false,
      finish: false,
      pause: false,
      time: 0,
      cards: new Array(10).fill(false),
      result: [],
    }));
  }
};
