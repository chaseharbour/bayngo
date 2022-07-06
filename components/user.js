import React, { useState } from "react";
import styles from "../styles/User.module.css";

const User = ({ userId = 0, userName = "user", boardState = [] }) => {
  const [id, setId] = useState(userId);
  const [name, setName] = useState(userName);
  const [board, setBoard] = useState(boardState);
  return (
    <aside className={styles.container}>
      <p className={styles.text}>{name}</p>
      <div className={styles.tiles}>
        {board.map((tile) => (
          <p key={tile.tile} className={styles.tile}>
            {tile.state ? "🟧" : "⬛"}
          </p>
        ))}
      </div>
    </aside>
  );
};

export default User;
