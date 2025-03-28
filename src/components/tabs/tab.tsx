import React from "react";

export const Tab = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => {
  return (
    <div
      className={`py-[12px] px-[25px] cursor-pointer text-[16px] text-center font-medium leading-[140%] hover:bg-cl-main hover:text-white rounded-[8px] transition-colors duration-500 ease-in-out ${
        active ? "bg-cl-main text-white" : " bg-white text-text-main"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
