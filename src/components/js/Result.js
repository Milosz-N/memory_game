import { useState, useEffect } from "react";
import "../scss/result.scss";

function Result({ result, cards,start }) {
  return (
    <div className="containerSettings">
      
        {start && <>
          {(result).map((element) => {
          return (
            <div className="divResult">
              <img
                id={element.id}
                key={element.id}
                src={require(`../img/image-${Number(element)}.jpg`)}
              ></img>
         </div>
          );
        })}
      
        </>}
   
    </div>
  );
}

export default Result;
