import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import styles from "../styles/Home.module.css";

const Landing = () => {
  const [modalActive, setModalActive] = useState(true);

  const handleModalState = () => {
    setModalActive(false);
  };

  if (modalActive) {
    return (
      <main className={styles.main}>
        <Modal
          title="Hello"
          content="lorem ipsum"
          btn={true}
          stateHandler={handleModalState}
          state={modalActive}
        />

        <Link href="/board-builder">
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
        <Link href="/board-builder">
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
