import React, { useState } from "react";
import axios from "axios";
import LinkButton from "../components/dynamic-link-button";

const BoardJoin = () => {
  const [boardID, setBoardID] = useState("");
  const [isValidRoomID, setIsValidRoomID] = useState(null);

  const handleChangeBoardID = async (e) => {
    setBoardID(e.target.value.toUpperCase());

    if (e.target.value.length === 5) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/channelExists`,
        { roomID: boardID }
      );

      console.log(res);

      // res.data.map((room) => {
      //   return room.name.includes(boardID)
      //     ? setIsValidRoomID(true)
      //     : setIsValidRoomID(false);
      // });
    }
  };

  return (
    <main>
      <input onChange={handleChangeBoardID} type="text"></input>
      <LinkButton location="/play" label="Join" asLoc={`/play/${boardID}`} />
    </main>
  );
};

export default BoardJoin;
