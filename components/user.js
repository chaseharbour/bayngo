import React, { useState, useEffect } from "react";
import styles from "../styles/User.module.css";

const User = ({ userId = 0, userName = "user", boardState = [] }) => {
  //Props passed down from the presence-users component.

  const [id, setId] = useState(userId);
  const [name, setName] = useState(userName);
  const [board, setBoard] = useState(boardState);

  // useEffect(() => {
  //   setBoard(boardState);
  // }, [boardState]);

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
