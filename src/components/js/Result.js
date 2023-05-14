import { useState, useEffect } from "react";
import '../scss/result.scss'

function Result({result}) {

  return (<div className="containerSettings">
<div className="divResult">
 {result.map(element => {
    return element.status < 1 &&
    <img id={element.id} key = {element.id} src={require(`../img/image-${
      element.id
    }.jpg`)} ></img>
   
})}
</div>
<div className="divResult">
{result.map(element => {
    return element.status == 1 &&
    <img id={element.id} key = {element.id} src={require(`../img/image-${
      element.id
    }.jpg`)} ></img>
   
})}
</div>
                </div>
  
)}

export default Result;
