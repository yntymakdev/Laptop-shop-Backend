import LayoutAuth from "@/appPages/auth/layout/LayoutAuth";
import React, { Children, ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutAuth>{children}</LayoutAuth>
    </div>
  );
};

export default layout;
