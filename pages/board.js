import React, { useState, useEffect } from "react";
import styles from "../styles/Board.module.css";

const Bingo = ({ slug }) => {
  const [initState, setInitState] = useState([
    { tile: 0, content: "dance on a pole", state: false },
    { tile: 1, content: "get dj to play single ladies", state: false },
    { tile: 2, content: "shotgun beer", state: false },
    { tile: 3, content: "touch someone's stache", state: false },
    { tile: 4, content: "fart near a stranger", state: false },
    { tile: 5, content: "sing karaoke", state: false },
    { tile: 6, content: "get person to serenade bride", state: false },
    { tile: 7, content: "dance with a stranger", state: false },
    { tile: 8, content: "fake a loud orgasm", state: false },
    { tile: 9, content: "get pen tattoo from stranger", state: false },
    { tile: 10, content: "get a business card", state: false },
    { tile: 11, content: "grind on someone", state: false },
    { tile: 12, content: "🎉", state: true },
    { tile: 13, content: "sign someone's abs", state: false },
    { tile: 14, content: "rub a bald person's head", state: false },
    { tile: 15, content: "get 3 phone #'s", state: false },
    { tile: 16, content: "do a cartwheel", state: false },
    { tile: 17, content: "stranger buys you a drink", state: false },
    { tile: 18, content: "get condom from a stranger", state: false },
    { tile: 19, content: "do a body shot", state: false },
    { tile: 20, content: "wear a toilet paper veil out", state: false },
    { tile: 21, content: "confess your love to a stranger", state: false },
    { tile: 22, content: "find person that looks like Matt", state: false },
    { tile: 23, content: "group picture with strangers", state: false },
    { tile: 24, content: "picture with a hottie", state: false },
  ]);

  const [boardState, setBoardState] = useState([]);

  useEffect(() => {
    const storage = window.localStorage;
    const savedBoard = storage.getItem("board");
    const compare = stateComparator(initState, boardState);

    savedBoard && JSON.parse(savedBoard).length > 0 && !compare
      ? setBoardState(JSON.parse(savedBoard))
      : setBoardState(initState);
  }, []);

  useEffect(() => {
    const storage = window.localStorage;

    if (boardState.length > 0)
      storage.setItem("board", JSON.stringify(boardState));
  }, [boardState]);

  const boardClickHandler = (i) => (e) => {
    setBoardState(
      boardState.map((item) =>
        item.tile === i && item.tile !== 12
          ? { ...item, state: !item.state }
          : item
      )
    );
  };

  const stateComparator = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  return (
    <main>
      <h1 className={styles.header}>bayngo</h1>
      <section className={styles.board}>
        {boardState.map((t, i) => {
          return (
            <div
              key={t.tile}
              className={`${styles.tile} ${t.state ? styles.on : styles.off}`}
              onClick={boardClickHandler(i)}
            >
              <p className={styles.text}>{t.content}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Bingo;
