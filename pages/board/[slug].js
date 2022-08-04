import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import styles from "../../styles/Board.module.css";

let channel;

const Bingo = ({ slug }) => {
  const dummyData = [
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
  ];
  
  const [boardID, setBoardID] = useState(slug);
  const [boardState, setBoardState] = useState([]);
  const [boardTest, setBoardTest] = useState(false);


  useEffect(() => {
    setBoardID(slug);

    const pusher = new Pusher("038f0aceaa38432312b6", {
      cluster: "us3",
      channelAuthorization: { endpoint: "/api/pusher/auth" },
    });

    channel = pusher.subscribe(`presence-${slug}`);

    channel.bind("create-event", (data) => setBoardState(data.board));

    return () => {
      pusher.unsubscribe(`presence-${slug}`);
    };
  }, []); 

  const boardClickHandler = (i) => (e) => {
    setBoardState(
      boardState.map((item) =>
        item.tile === i ? { ...item, state: !item.state } : item
      )
    );
  };

  return (
    <div className={styles.board}>
      {boardState.map((t, i) => {
        return (
          <div
            key={t.tile}
            className={`${styles.tile} ${t.state ? styles.on : styles.off}`}
            onClick={boardClickHandler(i)}
          >
            <p className={styles.text}>{`${t.content} State:${
              t.state ? "on" : "off"
            }`}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  return {
    props: {
      slug,
    },
  };
};

export default Bingo;
