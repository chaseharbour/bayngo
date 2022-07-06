import React, { useState, useEffect } from "react";
import User from "./user";

const PresenceUsers = ({ users }) => {
  //"users" prop must be an array of objects in the form of: {id: number, name: string, board: array}

  //the "users" prop data should originate from Pusher event bindings in the parent component

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
