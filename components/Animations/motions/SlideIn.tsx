import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { slideInMotionVariants } from "@/libs/utils/ui";
import { cn } from "@/libs/utils/styles";

type Props = HTMLMotionProps<"div">;

const SlideIn = ({ children, className, ...res }: Props) => {
  return (
    <motion.div
      className={cn(className)}
      variants={slideInMotionVariants}
      initial="slideOut"
      whileInView={"slideIn"}
      {...res}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
