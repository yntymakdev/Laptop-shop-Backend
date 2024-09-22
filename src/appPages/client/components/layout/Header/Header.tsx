import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="head">
          <div className="headerBlock">
            <div className="header">
              <h1>Home</h1>
              <Link href="/auth/list">
                <h1>Products</h1>
              </Link>
              <h1>Help centre</h1>
            </div>
            <div className="icon_user_other">
              <CircleUserRound
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                  color: "white",
                }}
              />
            </div>
          </div>
          <div className="headerV2">
            <Search
              style={{
                color: "white",
              }}
            />
            <ShoppingCart
              style={{
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
