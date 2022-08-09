import Link from "next/link";
import React from "react";

const LinkButton = ({ location, label, asLoc, clickFunc = null }) => {
  return (
    <Link href={location} as={asLoc}>
      <a onClick={clickFunc}>{label}</a>
    </Link>
  );
};

export default LinkButton;
