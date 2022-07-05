import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicLinkButton from "../components/dynamic-link-button";
import Name from "../components/name";
import styles from "../styles/Board.module.css";

const BoardBuilder = () => {
  const [name, setName] = useState("");

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

  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await axios.get("/api/pusher/room-init");

        setRoomName(response.data.roomID);
      } catch (err) {
        console.error(err);
      }
    };

    getRoom();
  }, []);

  const tileClickHandler = (i) => (e) => {
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

  const nameChangeHandler = (e) => {
    e.preventDefault;
    setName(e.target.value);
  };

  const boardChangeHandler = (i) => (e) => {
    setBoardState(
      boardState.map((item) =>
        item.tile === i ? { ...item, content: e.target.value } : item
      )
    );
  };

  const boardCreateHandler = () => {
    const postRoomState = async (name, state, room) => {
      try {
        const response = await axios.post("/api/pusher/auth", {
          roomID: `presence-${room}`,
          name,
          state,
          isCreator: true,
        });

        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };

    postRoomState(name, boardState, roomName);
  };

  return (
    <>
      <Name
        placeholder={"Enter your name"}
        changeFunc={nameChangeHandler}
        required={true}
      />
      <div className={styles.board}>
        {boardState.map((t, i) => {
          return t.isEditing ? (
            <input
              type="text"
              autoFocus
              className="tile-input"
              onChange={boardChangeHandler(i)}
            ></input>
          ) : (
            <div className={styles.tile} onClick={tileClickHandler(i)}>
              <p className={styles.text}>{`${t.content}
              `}</p>
            </div>
          );
        })}
      </div>
      <DynamicLinkButton
        location={"/board/[slug]"}
        label="Create"
        asLoc={`/board/${roomName}`}
        clickFunc={boardCreateHandler}
      />
    </>
  );
};

export default BoardBuilder;
