import React from "react";
import Link from "next/link";

const BoardJoin = () => {
  return (
    <main>
      <input type="text"></input>
      <input type="text"></input>
      <Link href="/board">
        <a>Join</a>
      </Link>
    </main>
  );
};

export default BoardJoin;
