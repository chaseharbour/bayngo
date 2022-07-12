import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({
  title = "",
  content = "",
  btn = false,
  stateHandler,
  state,
}) => {
  return (
    <article className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.content}>{content}</p>
      {btn ? (
        <button className={styles.btn} onClick={stateHandler}>
          <p className={styles.btnContent}>Close</p>
        </button>
      ) : null}
    </article>
  );
};

export default Modal;
