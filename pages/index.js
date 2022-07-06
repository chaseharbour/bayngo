import Head from "next/head";
import Bingo from "./board";
import PresenceUsers from "../components/presence-users";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const users = [
    {
      id: 0,
      name: "chet",
      board: [
        {
          tile: 0,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 1,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 2,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 3,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 4,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 5,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 6,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 7,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 8,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 9,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 10,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 11,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 12,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 13,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 14,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 15,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 16,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 17,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 18,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 19,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 20,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 21,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 22,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 23,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 24,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
      ],
    },
    {
      id: 1,
      name: "brad",
      board: [
        {
          tile: 0,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 1,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 2,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 3,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 4,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 5,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 6,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 7,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 8,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 9,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 10,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 11,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 12,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 13,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 14,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 15,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 16,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 17,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 18,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 19,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 20,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 21,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 22,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 23,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
        {
          tile: 24,
          content: "",
          state: false,
          editable: true,
          isEditing: false,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>🔥Bayngo🔥</title>
        <meta name="description" content="Generated by create next app" />
        <meta charset="UTF-8" />
        <link
          rel="preload"
          href="/fonts/OstrichSans-Heavy.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <Link href="/board-builder">
          <a>Create</a>
        </Link>
        <Link href="/board-join">
          <a>Join</a>
        </Link>
        <Bingo />
        <PresenceUsers users={users} />
      </main>
    </div>
  );
}
