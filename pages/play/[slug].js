import React from "react";
import styles from "../../styles/Board.module.css";
import dynamic from "next/dynamic";
import { configureAbly, useChannel, usePresence } from "@ably-labs/react-hooks";
import PresenceUsers from "../../components/presence-users";

const DynamicBoardImport = dynamic(() => import("../../components/board"), {
  ssr: false,
});

const DynamicPresenceUserImport = dynamic(
  () => import("../../components/presence-users"),
  {
    ssr: false,
  }
);

configureAbly({
  authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/createTokenRequest`,
});

const Play = ({ roomID }) => {
  // const [presenceData, updateStatus] = usePresence(`play:${roomID}`);

  return (
    <main>
      <h1 className={styles.header}>{roomID}</h1>
      <DynamicBoardImport roomID={roomID} />
      {/* <DynamicPresenceUserImport roomID={roomID} presenceData={presenceData} /> */}
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
