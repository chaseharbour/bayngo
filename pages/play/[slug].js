import React from "react";
import styles from "../../styles/Board.module.css";
import dynamic from "next/dynamic";
import { configureAbly } from "@ably-labs/react-hooks";

const DynamicBoardImport = dynamic(() => import("../../components/board"), {
  ssr: false,
});

configureAbly({
  authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/createTokenRequest`,
});

const Play = ({ roomID }) => {
  return (
    <main>
      <h1 className={styles.header}>{roomID}</h1>
      <DynamicBoardImport roomID={roomID} />
    </main>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  if (!slug) {
    return {
      redirect: {
        //Add error page later
        //Still unsure what the "permanent" property does
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {
      roomID: slug,
    },
  };
};

export default Play;
