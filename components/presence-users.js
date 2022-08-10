import React, { useState, useEffect } from "react";
import User from "./user";
import {
  usePresence,
  assertConfiguration,
  useChannel,
} from "@ably-labs/react-hooks";
import axios from "axios";
import styles from "../styles/PresenceUsers.module.css";

const PresenceUsers = ({ roomID }) => {
  const [presenceData, updateStatus] = usePresence(`play:${roomID}`);

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/channelAdmin`, {
      data: { roomID },
    });
  }, []);

  const peers = presenceData.map((msg, i) => (
    <User
      key={i}
      userId={i}
      userName={msg.clientId}
      // boardState={u.board.map((b) => b)}
    />
  ));

  //"users" prop must be an array of objects in the form of: {id: int, name: string, board: array}

  return (
    <section className={styles.container}>
      <ul>{peers}</ul>
    </section>
  );
};

export default PresenceUsers;
