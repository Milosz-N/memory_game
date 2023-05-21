import React, { useEffect } from "react";
import "../scss/main.scss";
function Game({ game, setGame }) {
  let board = [];
  var clicked = [];
  let arrResult = [];
  useEffect(() => {
    if (game.start) {
      for (let x = 0; x < game.cards.length; x++) {
        board.push(
          React.createElement(
            "button",

            {
              className: "btnCardGame card searched",
              onClick: (e) => {
                // console.log(e.target.parentNode.disabled)
                e.target.parentNode.disabled = true;
                clicked.push(e.target);
                e.target.classList.add("cardAnimation");

                handleClick2(e, clicked, game, setGame);
              },
              key: game.cards[x],
            },

            [
              React.createElement("img", {
                className: "cardGame",
                key: x,
                name: x,
                id: game.cards[x] > 9 ? game.cards[x] - 10 : game.cards[x],

                src: require(`../img/image-${
                  game.cards[x] > 9 ? game.cards[x] - 10 : game.cards[x]
                }.jpg`),
              }),
            ]
          )
        );
      }

      // setCards(board);
      setGame((prevState) => ({
        ...prevState,
        cards: board,
      }));
    }
  }, [game.start]);

  const handleClick2 = (e, clicked, game, setGame) => {
    if (clicked.length > 2) {
      for (let x = 0; x < 2; x++) {
        if (!clicked[x].classList.contains("win")) {
          clicked[x].parentNode.disabled = false;
          clicked[x].classList.remove("cardAnimation");
        }
      }
      clicked.splice(0, 2);
    }
    if (clicked.length > 1) {
      if (clicked[clicked.length - 1].id == clicked[clicked.length - 2].id) {
        // console.log('trafilem');
        arrResult.push(clicked[clicked.length - 1].id);
        clicked[0].parentNode.classList.remove("searched");
        clicked[1].parentNode.classList.remove("searched");
        clicked[0].classList.add("win");
        clicked[1].classList.add("win");
        clicked[0].parentNode.disabled = true;
        clicked[1].parentNode.disabled = true;
        setGame((prevState) => ({
          ...prevState,
          result: [...prevState.result, `${clicked[0].id}` ],
        }));
      }
    }
    if (arrResult.length == game.cards.length / 2) {
    
      setGame((prevState) => ({
        ...prevState,
        finish: true,
      }));
    }
  };
console.log(game)
  return (
    <>
      <>
        {game.start == true && (
          <div className="containerSettings">{game.cards}</div>
        )}
      </>
    </>
  );
}

export default Game;
