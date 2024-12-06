import { cn } from "@/libs/utils/styles";
import React, { ComponentProps, useState } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, ...res }: ButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...res}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("text-white-surface bg-bl")}
    >
      {children}
    </button>
  );
};

export default Button;
