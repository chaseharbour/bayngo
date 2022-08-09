import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicLinkButton from "../components/dynamic-link-button";
import { useChannel } from "../hooks/useChannel";
import styles from "../styles/Board.module.css";

const Board = ({ roomID }) => {
  const [boardState, setBoardState] = useState([
    { tile: 0, content: "", state: false, editable: true, isEditing: false },
    { tile: 1, content: "", state: false, editable: true, isEditing: false },
    { tile: 2, content: "", state: false, editable: true, isEditing: false },
    { tile: 3, content: "", state: false, editable: true, isEditing: false },
    { tile: 4, content: "", state: false, editable: true, isEditing: false },
    { tile: 5, content: "", state: false, editable: true, isEditing: false },
    { tile: 6, content: "", state: false, editable: true, isEditing: false },
    { tile: 7, content: "", state: false, editable: true, isEditing: false },
    { tile: 8, content: "", state: false, editable: true, isEditing: false },
    { tile: 9, content: "", state: false, editable: true, isEditing: false },
    { tile: 10, content: "", state: false, editable: true, isEditing: false },
    { tile: 11, content: "", state: false, editable: true, isEditing: false },
    { tile: 12, content: "", state: false, editable: true, isEditing: false },
    { tile: 13, content: "", state: false, editable: true, isEditing: false },
    { tile: 14, content: "", state: false, editable: true, isEditing: false },
    { tile: 15, content: "", state: false, editable: true, isEditing: false },
    { tile: 16, content: "", state: false, editable: true, isEditing: false },
    { tile: 17, content: "", state: false, editable: true, isEditing: false },
    { tile: 18, content: "", state: false, editable: true, isEditing: false },
    { tile: 19, content: "", state: false, editable: true, isEditing: false },
    { tile: 20, content: "", state: false, editable: true, isEditing: false },
    { tile: 21, content: "", state: false, editable: true, isEditing: false },
    { tile: 22, content: "", state: false, editable: true, isEditing: false },
    { tile: 23, content: "", state: false, editable: true, isEditing: false },
    { tile: 24, content: "", state: false, editable: true, isEditing: false },
  ]);

  const [channel, ably] = useChannel(roomID, (message) => {
    console.log(message.data);
  });

  useEffect(() => {
    channel.history((err, resultPage) => {
      const data = resultPage.items.slice(-1);
      data[0].data
        ? setBoardState(data[0].data)
        : console.log("No board history found, starting new board.");
    });
  }, []);

  const handleTileClick = (i) => (e) => {
    setBoardState(
      boardState.map((item) =>
        item.tile === i
          ? item.editable
            ? { ...item, isEditing: true }
            : item
          : { ...item, isEditing: false }
      )
    );
  };

  // const boardClickHandler = (e) => {
  //   const board = document.querySelector(".board");
  //   if (e.target.className !== "board" || !board.contains(e.target)) {
  //     setBoardState(
  //       boardState.map((item) => {
  //         return { ...item, isEditing: false };
  //       })
  //     );
  //   }
  // };

  const handleBoardChange = (i) => (e) => {
    const newState = boardState.map((item) =>
      item.tile === i ? { ...item, content: e.target.value } : item
    );
    setBoardState(newState);
  };

  const handleBoardSubmit = (e) => {
    e.preventDefault();
    channel.publish({ name: "board-update", data: boardState });
  };

  return (
    <>
      <div className={styles.board}>
        {boardState.map((t, i) => {
          return t.isEditing ? (
            <input
              type="text"
              autoFocus
              className="tile-input"
              onChange={handleBoardChange(i)}
            ></input>
          ) : (
            <div className={styles.tile} onClick={handleTileClick(i)}>
              <p className={styles.text}>{`${t.content}
              `}</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleBoardSubmit}>Submit</button>
      {/* <DynamicLinkButton
        location={"/board/[slug]"}
        label="Create"
        asLoc={`/board/${roomName}`}
        clickFunc={boardCreateHandler}
      /> */}
    </>
  );
};

export default Board;
