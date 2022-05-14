import React from "react";
import styles from "../styles/Emoji.module.css";

const Emoji = ({ label = "", hidden = false, symbol }) => {
  return (
    <span
      className={styles.emoji}
      role="img"
      aria-label={label}
      aria-hidden={hidden}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
