import React, { useState, useEffect } from "react";
import {
  usePresence,
  assertConfiguration,
  configureAbly,
  useChannel,
} from "@ably-labs/react-hooks";
import styles from "../styles/Board.module.css";

const Board = ({ roomID }) => {
  const [initState, setInitState] = useState([
    { tile: 0, content: "", state: false },
    { tile: 1, content: "", state: false },
    { tile: 2, content: "", state: false },
    { tile: 3, content: "", state: false },
    { tile: 4, content: "", state: false },
    { tile: 5, content: "", state: false },
    { tile: 6, content: "", state: false },
    { tile: 7, content: "", state: false },
    { tile: 8, content: "", state: false },
    { tile: 9, content: "", state: false },
    { tile: 10, content: "", state: false },
    { tile: 11, content: "", state: false },
    { tile: 12, content: "", state: false },
    { tile: 13, content: "", state: false },
    { tile: 14, content: "", state: false },
    { tile: 15, content: "", state: false },
    { tile: 16, content: "", state: false },
    { tile: 17, content: "", state: false },
    { tile: 18, content: "", state: false },
    { tile: 19, content: "", state: false },
    { tile: 20, content: "", state: false },
    { tile: 21, content: "", state: false },
    { tile: 22, content: "", state: false },
    { tile: 23, content: "", state: false },
    { tile: 24, content: "", state: false },
  ]);

  const [boardState, setBoardState] = useState([]);

  // const [channel] = useChannel(`play:${roomID}`, (message) => {
  //   console.log(message);
  // });

  // useEffect(() => {
  //   channel.history((err, resultPage) => {
  //     const data = resultPage.items.slice(-1);
  //     data[0]?.data
  //       ? setBoardState(data[0].data)
  //       : console.log("No board history found, please make a new room");
  //   });
  // }, []);

  // useEffect(() => {
  //   const storage = window.localStorage;
  //   const savedBoard = storage.getItem("board");
  //   const compare = stateComparator(initState, boardState);

  //   savedBoard && JSON.parse(savedBoard).length > 0 && !compare
  //     ? setBoardState(JSON.parse(savedBoard))
  //     : setBoardState(initState);
  // }, []);

  // useEffect(() => {
  //   const storage = window.localStorage;

  //   if (boardState.length > 0)
  //     storage.setItem("board", JSON.stringify(boardState));
  // }, [boardState]);

  const boardClickHandler = (i) => (e) => {
    setBoardState(
      boardState.map((item) =>
        item.tile === i && item.tile !== 12
          ? { ...item, state: !item.state }
          : item
      )
    );

    // channel.publish({ name: "board-update", data: boardState });
  };

  const stateComparator = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  return (
    <main>
      <h1 className={styles.header}>bayngo</h1>
      <section className={styles.board}>
        {initState.map((t, i) => {
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

export default Board;
