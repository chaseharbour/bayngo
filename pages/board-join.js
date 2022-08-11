import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkButton from "../components/dynamic-link-button";

const BoardJoin = () => {
  const [boardID, setBoardID] = useState("");
  const [isValidRoomID, setIsValidRoomID] = useState(false);

  useEffect(() => {
    if (boardID.length !== 5) return setIsValidRoomID(false);

    async function fetchRoomValidity() {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/channelExists`,
        { roomID: boardID }
      );

      setIsValidRoomID(res.data);
    }

    fetchRoomValidity();
  }, [boardID]);

  const handleChangeBoardID = async (e) => {
    setBoardID(e.target.value.toUpperCase());
  };

  return (
    <main>
      <h1>{isValidRoomID ? "Room exists" : "Room does not exist"}</h1>
      <input onChange={handleChangeBoardID} type="text"></input>
      {isValidRoomID ? (
        <LinkButton location="/play" label="Join" asLoc={`/play/${boardID}`} />
      ) : (
        <p>Room not found</p>
      )}
    </main>
  );
};

export default BoardJoin;
