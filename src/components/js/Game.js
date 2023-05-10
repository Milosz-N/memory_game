import React, { useState, useEffect } from "react";
import "../scss/main.scss";

function Game({ startGame, finish, cards, setCards }) {
  let board = [];
  var clicked = [];

  useEffect(() => {
    if (startGame) {
      for (let x = 0; x < cards.length; x++) {
        board.push(
          React.createElement(
            "button",
            { className: "btnCardGame", onClick: handleClick, key: x },
            [
              React.createElement("img", {
                className: "cardGame",
                key: x,
                id: x,
                // onClick: handleClick,

                src: require(`../img/image-${
                  cards[x] > 9 ? cards[x] - 10 : cards[x]
                }.jpg`),
              }),
            ]
          )
        );
      }
      setCards(board);
      console.log(cards);
    }
  }, [startGame]);
  const handleClick = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    console.log(e.target);
    clicked.push(e);
    e.target.classList.add("cardAnimation");
  };

  return (
    <>{startGame == true && <div className="containerSettings">{cards}</div>}</>
  );
}

export default Game;
