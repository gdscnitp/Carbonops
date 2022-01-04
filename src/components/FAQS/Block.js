import React from "react";

function Block(props) {
  return (
      <div className={props.class}>{props.text}</div>
  );
}

export default Block;
