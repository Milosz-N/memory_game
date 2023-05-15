import React, {  useEffect } from "react";
import '../scss/main.scss'
function Game({
  startGame,
  setFinish,
  cards,
  setCards,
  setResult,
}) {
  let board = [];
  var clicked = [];
  let arrResult = [];
  useEffect(() => {
    if (startGame) {
      for (let x = 0; x < cards.length; x++) {
        board.push(
          React.createElement(
            "button",

            {
              className: "btnCardGame card searched",
              onClick: handleClick,
              key: cards[x],
            },

            [
              React.createElement("img", {
                className: "cardGame",
                key: x,
                name: x,
                id: cards[x] > 9 ? cards[x] - 10 : cards[x],

                src: require(`../img/image-${
                  cards[x] > 9 ? cards[x] - 10 : cards[x]
                }.jpg`),
              }),
            ]
          )
        );
        setResult((prevState) => [
          ...prevState,
          { id: cards[x] > 9 ? cards[x] - 10 : cards[x], status: 0 },
        ]);
      }
      setCards(board);
    }
  }, [startGame]);
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentNode.disabled = true;
    if (clicked.length == 0 || clicked.length % 2 == 0) {
      for (Element of document.querySelectorAll(".cardAnimation")) {
        if (!Element.classList.contains("win")) {
          Element.classList.remove("cardAnimation");
          Element.parentNode.disabled = false;
        }
      }
      clicked.push(e.target);
      // console.log('tutaj zaczynam liczenie');
      e.target.classList.add("cardAnimation");
    } else {
      e.target.classList.add("cardAnimation");
      clicked.push(e.target);
      // console.log("tu bede sprawdzal");

      if (clicked[clicked.length - 2].id == clicked[clicked.length - 1].id) {
        arrResult.push(clicked[clicked.length - 1].id);
        setResult((prevState) => {
          const newState = prevState.map((obj) => {
            // 👇️ if id equals 2, update country property
            if (obj.id == clicked[clicked.length - 2].id) {
              return { ...obj, status: 1 };
            }
            return obj;
          });

          return newState;
        });

        clicked[clicked.length - 2].classList.add("win");
        clicked[clicked.length - 1].classList.add("win");
        clicked[clicked.length - 1].parentNode.classList.remove("searched");
        clicked[clicked.length - 2].parentNode.classList.remove("searched");
       
      }
      if (
        Number.parseInt(arrResult.length) == Number.parseInt(cards.length / 2)
      ) {
        // console.log("koniec gry");
        setFinish(true);
        // setPause(true);
      }
    }
  };

  return (
    <>{startGame == true && <div className="containerSettings">{cards}</div>}</>
  );
}

export default Game;
