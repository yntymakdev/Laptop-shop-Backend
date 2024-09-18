"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { ReactNode } from "react";

const LayoutRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>
        <ReduxProvider>{children}</ReduxProvider>
      </main>
    </div>
  );
};

export default LayoutRoot;
