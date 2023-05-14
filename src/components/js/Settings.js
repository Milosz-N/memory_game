import { useState, useEffect } from "react";
import "../scss/main.scss";
import "../scss/buttons.scss";
function Settings({ cards, setCards, startGame, setStartGame }) {
  const [images, setImages] = useState(
    require
      .context("../img", false, /\.(|jpe?g|)$/)
      .keys()
      .map(require.context("../img", false, /\.(|jpe?g|)$/))
  );
  // useEffect(()=> {
  // console.log(cards)

  //  }, [cards])

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = cards.map((item, index) =>
      index === position ? !item : item
    );
    setCards(updatedCheckedState);
    // console.log(cards);
  };
  function canStart(array) {
    var map = array.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    var x = map.true > 1;
    return x;
  }
  const handleStartGame = (e) => {
    e.preventDefault();
    let arr = shuffle(cards.concat(cards).flatMap((b, i) => (b ? i : [])));

    setCards(arr);
    // console.log(cards);
    setStartGame(true);
  };
  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
  return (
    <>
      {startGame == false && (
        <>
          <div className="containerSettings">
            {images.map((index, x) => (
              <button
                className={` card ${cards[x] === true && "selectedCard"}`}
                key={x}
                style={{
                  backgroundImage: `url(${require(`../img/image-${x}.jpg`)})`,
                }}
                onClick={() => {
                  handleCheckboxChange(x);
                }}
              ></button>
            ))}
            <div className="btnSettings">
              <label
                className={` ${canStart(cards) ? "toogle-1" : "toogle-2"}`}
                onClick={canStart(cards) ? handleStartGame : undefined}
              >
                <input
                  type="checkbox"
                  id="toggle1"
                  className={` ${
                    canStart(cards) ? "toogle-1_input" : "toogle-2_input"
                  }`}
                />
                <span
                  className={` ${
                    canStart(cards) ? "toogle-1_button" : "toogle-2_button"
                  }`}
                ></span>
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Settings;
