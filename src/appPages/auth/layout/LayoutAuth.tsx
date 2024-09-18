import React, { ReactNode } from "react";

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutAuth;
