import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { slideInMotionVariants } from "@/libs/utils/ui";

type Props = HTMLMotionProps<"div">;

const SlideIn = ({ children, ...res }: Props) => {
  return (
    <motion.div
      className="sm:hidden"
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
