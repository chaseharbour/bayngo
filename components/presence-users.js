import React, { useState, useEffect } from "react";
import User from "./user";
import styles from "../styles/PresenceUsers.module.css";

const PresenceUsers = ({ users }) => {
  //"users" prop must be an array of objects in the form of: {id: number, name: string, board: array}

  //the "users" prop data should originate from Pusher event bindings in the parent component

  return (
    <section className={styles.container}>
      {users.map((u, i) => (
        <User
          userId={u.id}
          userName={u.name ? u.name : `user${i}`}
          boardState={u.board.map((b) => b)}
        />
      ))}
    </section>
  );
};

export default PresenceUsers;
