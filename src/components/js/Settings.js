import { useState } from "react";
import "../scss/main.scss";
import "../scss/buttons.scss";
import Button from "./Button";
function Settings({ cards, setCards, startGame, setStartGame }) {
  const [images, setImages] = useState(
    require
      .context("../img", false, /\.(|jpe?g|)$/)
      .keys()
      .map(require.context("../img", false, /\.(|jpe?g|)$/))
  );

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = cards.map((item, index) =>
      index === position ? !item : item
    );
    setCards(updatedCheckedState);
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
            <Button
              action ={canStart(cards) ? handleStartGame : undefined}
              name={"btn-startGame"}
              condition={canStart(cards)}
             />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Settings;
