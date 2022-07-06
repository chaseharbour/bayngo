import React, { useState, useEffect } from "react";
import User from "./user";

const PresenceUsers = ({ users }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  useEffect(() => {
    setRoomUsers(users);
  }, []);

  return (
    <div>
      {roomUsers.map((u, i) => (
        <User
          userId={u.id}
          userName={u.name ? u.name : `user${i}`}
          boardState={u.board.map((b) => b)}
        />
      ))}
    </div>
  );
};

export default PresenceUsers;
