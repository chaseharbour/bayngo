import React, { useState } from "react";
import styles from "../styles/User.module.css";

const User = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("user");
  const [board, setBoard] = useState([
    { tile: 0, state: false },
    { tile: 1, state: false },
    { tile: 2, state: false },
    { tile: 3, state: false },
    { tile: 4, state: false },
    { tile: 5, state: false },
    { tile: 6, state: false },
    { tile: 7, state: false },
    { tile: 8, state: false },
    { tile: 9, state: false },
    { tile: 10, state: false },
    { tile: 11, state: false },
    { tile: 12, state: false },
    { tile: 13, state: false },
    { tile: 14, state: false },
    { tile: 15, state: false },
    { tile: 16, state: false },
    { tile: 17, state: false },
    { tile: 18, state: false },
    { tile: 19, state: false },
    { tile: 20, state: false },
    { tile: 21, state: false },
    { tile: 22, state: false },
    { tile: 23, state: false },
    { tile: 24, state: false },
  ]);
  return (
    <aside className={styles.container}>
      <p className={styles.text}>{name}</p>
      <div className={styles.tiles}>
        {board.map((tile) => (
          <p className={styles.tile}>{tile.state ? "🟧" : "⬛"}</p>
        ))}
      </div>
    </aside>
  );
};

export default User;
