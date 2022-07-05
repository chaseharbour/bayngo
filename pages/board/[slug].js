import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";

let channel;

const Bingo = ({ slug }) => {
  const [boardID, setBoardID] = useState(slug);
  const [boardState, setBoardState] = useState([]);

  useEffect(() => {
    setBoardID(slug);

    const pusher = new Pusher("038f0aceaa38432312b6", {
      cluster: "us3",
      channelAuthorization: { endpoint: "/api/pusher/auth" },
    });

    channel = pusher.subscribe(`presence-${slug}`);
    console.log(channel);

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
    <div className="board">
      {boardState.map((t, i) => {
        return (
          <div
            key={t.tile}
            className={`tile ${t.state ? "on" : "off"}`}
            onClick={boardClickHandler(i)}
          >
            <p>{`${t.content} State:${t.state ? "on" : "off"}`}</p>
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
