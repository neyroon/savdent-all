import React, { ReactNode } from "react";

export const Section = ({ className, id, children }: { className?: string; id?: string; children?: ReactNode }) => {
  return (
    <section className={`flex justify-center scroll-m-[73px] ${className ? className : ""}`} id={id}>
      <div className="px-[20px] md:py-[70px]  py-[50px] w-full xl:px-0 xl:w-[1260px] l:w-[1372px]">{children}</div>
    </section>
  );
};
