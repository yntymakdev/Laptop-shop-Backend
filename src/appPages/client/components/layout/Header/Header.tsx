import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link href="/auth/list">
        <h1>Create</h1>
      </Link>
    </div>
  );
};

export default Header;
