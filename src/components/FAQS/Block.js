import React from "react";
import { useState } from "react";

var Questions = ["Question 1"];
var Ans = ["Answer 1"];
function Block(props) {
    const [clicked, setClicked] = useState(false);
  function showAns(e) {
    setClicked(!clicked);
  }
  var Unknown = clicked ? Ans[0] : Questions[0];
  if (props.class === "main__options") {
    return (
      ( <div className={props.class} onClick={showAns}>{Unknown}</div> )
    );
  }
  else{
    return (
      ( <div className={props.class}>{props.text}</div> )
    );
  }
}

export default Block;
