import React, { useState, useEffect } from "react";
import User from "./user";
import {
  usePresence,
  assertConfiguration,
  useChannel,
} from "@ably-labs/react-hooks";
import styles from "../styles/PresenceUsers.module.css";

const PresenceUsers = ({ roomID, presenceData }) => {
  const peers = presenceData.map((msg, i) => (
    <User
      key={i}
      userId={i}
      userName={msg.clientId}
      // boardState={u.board.map((b) => b)}
    />
  ));

  return (
    <section className={styles.container}>
      <ul>{peers}</ul>
    </section>
  );
};

export default PresenceUsers;
