import React from "react";
import { useState } from "react";

var Questions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget maximus neque. Praesent congue congue sollicitudin. Suspendisse et ex "];
var Ans = ["Cras sed est eget libero facilisis elementum ut pulvinar metus. In nec ligula purus. Proin auctor, erat ut porta convallis, velit diam consectetur lacus, ac bibendum duiveDonec ac ante sed erat ultrices venenatis. I leo vitae ante. Aliquam sollicitudin lorem vitae augue posuere blandit. Nam lacinia tortor vel nunc condimentum,"];
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

