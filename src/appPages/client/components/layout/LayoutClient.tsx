import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutClient;
