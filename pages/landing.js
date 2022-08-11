import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import Name from "../components/name";
import axios from "axios";
import { configureAbly } from "@ably-labs/react-hooks";
import styles from "../styles/Home.module.css";

const Landing = () => {
  const [modalActive, setModalActive] = useState(true);
  const [name, setName] = useState("");

  const handleModalState = () => {
    setModalActive(false);
  };

  const nameChangeHandler = (e) => {
    e.preventDefault;
    setName(e.target.value);
  };

  const createSubmitHandler = async (e) => {
    e.preventDefault;
    configureAbly({
      authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/createTokenRequest`,
    });
  };

  const joinSubmitHandler = async (e) => {
    e.preventDefault;
    configureAbly({
      authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/ably/createTokenRequest`,
    });
  };

  if (modalActive) {
    return (
      <main className={styles.main}>
        <Modal
          title="Welcome"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius duis at consectetur lorem donec massa sapien faucibus et. Est ultricies integer quis auctor elit sed vulputate. Purus faucibus ornare suspendisse sed. In dictum non consectetur a erat nam at lectus urna. Elementum tempus egestas sed sed risus pretium. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Adipiscing vitae proin sagittis nisl rhoncus. Nam at lectus urna duis. Arcu ac tortor dignissim convallis."
          btn={true}
          stateHandler={handleModalState}
          state={modalActive}
        />

        <Link href="/play">
          <a>Create room</a>
        </Link>
        <Link href="/board-join">
          <a>Join room</a>
        </Link>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <Name
          placeholder={"Enter your name"}
          changeFunc={nameChangeHandler}
          required={true}
        />
        <Link href="/initialize">
          <a>Create room</a>
        </Link>
        <Link href="/board-join">
          <a>Join room</a>
        </Link>
      </main>
    );
  }
};

export default Landing;
