import LayoutClient from "@/appPages/client/components/layout/LayoutClient";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutClient>{children}</LayoutClient>
    </div>
  );
};

export default layout;
