import React, { useState, useEffect } from "react";
import "../scss/main.scss";

function Game({ startGame, finish, setFinish, cards, setCards, pause, setPause }) {
  let board = [];
  var clicked = [];
  var result = [];

  useEffect(() => {
    if (startGame) {
      //id musza sie zgadzac a name roznic

      for (let x = 0; x < cards.length; x++) {
        board.push(
          React.createElement(
            "button",
            
            { className: "btnCardGame card searched", onClick: handleClick, key: x },
            
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
      }
      setCards(board);
      console.log(cards);
    }
  }, [startGame]);
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentNode.disabled = true;
    if (clicked.length == 0 || clicked.length % 2 == 0) {
      for (Element of document.querySelectorAll(".cardAnimation")) {
        console.log(Element);
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
      console.log("tu bede sprawdzal");

      if (clicked[clicked.length - 2].id == clicked[clicked.length - 1].id) {
        console.log("znalazlem");
        result.push(clicked[clicked.length - 2].id);
        clicked[clicked.length - 2].classList.add("win");
        clicked[clicked.length - 1].classList.add("win");
        clicked[clicked.length - 1].parentNode.classList.remove("searched");
        clicked[clicked.length - 2].parentNode.classList.remove("searched");


      }
      if (Number.parseInt(result.length) == Number.parseInt(cards.length / 2)) {
        console.log("koniec gry");
        setFinish(true);
      }
    }
    // clicked.push(e);
  };
 
  return (
      <>
        {startGame == true && <div className="containerSettings"
        
        >{cards}</div>}
       
      </>
  );
}

export default Game;
