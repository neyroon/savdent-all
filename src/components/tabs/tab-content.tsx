import React, { PropsWithChildren } from "react";

export const TabContent = ({ children, active }: PropsWithChildren<{ active: boolean }>) => {
  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${active ? "opacity-100 visible" : "opacity-0 hidden  pointer-events-none"}`}
    >
      {children}
    </div>
  );
};
