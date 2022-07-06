import React, { useState } from "react";

const Modal = ({
  title = "",
  content = "",
  btn = false,
  stateHandler,
  state,
}) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{`${state}`}</p>
      {btn ? <button onClick={stateHandler}>Close</button> : null}
    </article>
  );
};

export default Modal;
