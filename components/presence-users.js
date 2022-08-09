import React, { useState, useEffect } from "react";
import User from "./user";
import {
  usePresence,
  assertConfiguration,
  useChannel,
} from "@ably-labs/react-hooks";
import styles from "../styles/PresenceUsers.module.css";

const PresenceUsers = ({ roomID }) => {
  const ably = assertConfiguration();
  const [presenceData, updateStatus] = usePresence(`play:${roomID}`);
  const peers = presenceData.map((msg, i) => (
    // <li key={i}>{msg.clientId}</li>
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
