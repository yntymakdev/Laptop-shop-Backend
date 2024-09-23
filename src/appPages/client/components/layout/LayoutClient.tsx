import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutClient.module.scss";
const LayoutClient = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.LayoutClient}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutClient;
