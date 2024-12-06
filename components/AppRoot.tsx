import React from "react";
import { Rubik } from "next/font/google";
import { cn } from "@/libs/utils/styles";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  children: React.ReactNode;
}

const AppRoot = ({ children }: Props) => {
  return (
    <>
      <main
        className={cn(rubik.className, "antialiased", "h-screen overflow-auto")}
      >
        {children}
      </main>
    </>
  );
};

export default AppRoot;
