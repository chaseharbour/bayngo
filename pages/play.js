import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicLinkButton from "../components/dynamic-link-button";
import { useChannel } from "../hooks/useChannel";
import styles from "../styles/Board.module.css";
import dynamic from "next/dynamic";

const DynamicBoardImport = dynamic(() => import("../components/board"), {
  ssr: false,
});

const Play = ({ roomID }) => {
  return (
    <main>
      <DynamicBoardImport roomID={roomID} />
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `http://${process.env.API_HOST_NAME}:${process.env.API_HOST_PORT}/api/pusher/room-init`
    );
    console.log(response);
    return {
      props: {
        roomID: response.data.roomID,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        error: JSON.stringify(err),
      },
    };
  }
};

export default Play;
