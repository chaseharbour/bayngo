import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Board.module.css";

const Play = () => {
  return (
    <main>
      <h1 className={styles.header}>Room is loading...</h1>
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `http://${process.env.API_HOST_NAME}:${process.env.API_HOST_PORT}/api/pusher/room-init`
    );
    return {
      redirect: {
        destination: `/play/${response.data.roomID}`,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};

export default Play;
