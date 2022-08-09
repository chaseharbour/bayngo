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

      console.log(res.data);

      setIsValidRoomID(res.data);
    }

    fetchRoomValidity();
  }, [boardID]);

  const handleChangeBoardID = async (e) => {
    setBoardID(e.target.value.toUpperCase());

    // if (e.target.value.length === 5) {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/channelExists`,
    //     { roomID: boardID }
    //   );

    //   console.log(res);

    //   setIsValidRoomID(res.data[0]);
    //   // res.data.map((room) => {
    //   //   return room.name.includes(boardID)
    //   //     ? setIsValidRoomID(true)
    //   //     : setIsValidRoomID(false);
    //   // });
    // }
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
