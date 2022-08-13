import React, { useState, useEffect } from "react";
import BoardConstructor from "../components/board-constructor";
import LinkButton from "../components/dynamic-link-button";
import { useChannel, usePresence, configureAbly } from "@ably-labs/react-hooks";
import axios from "axios";
import styles from "../styles/Board.module.css";

// configureAbly({
//   authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/createTokenRequest`,
// });

const Initialize = ({ roomID }) => {
  const [boardState, setBoardState] = useState([]);
  // const [channel] = useChannel(`play:${roomID}`, (message) => {
  //   console.log(message);
  // });

  const handleBoardSubmit = async (e) => {
    //Add checks to ensure board is filled completely
    console.log("test");
    // try {
    //   await axios.post(`${NEXT_PUBLIC_HOSTNAME}/api/ably/channelInit`, {
    //     data: { roomID, boardState },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
    // channel.publish({ name: "board-init", data: boardState });
  };
  //Create room at this point but don't relay room name to client (create room server side?)
  //Publish board state to ably then redirect client to the /play/[slug] route
  //Get board state using channel history
  return (
    <main>
      <h1 className={styles.header}>{roomID}</h1>
      <BoardConstructor
        roomID={roomID}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <LinkButton
        location="/play"
        label="Join"
        asLoc={`/play/${roomID}`}
        clickFunc={handleBoardSubmit}
      />
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `http://${process.env.API_HOST_NAME}:${process.env.API_HOST_PORT}/api/pusher/room-init`
    );
    return {
      props: {
        roomID: response.data.roomID,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};

export default Initialize;
