import React, { useContext } from "react";
import { MobileMenuContext } from "./MobileMenuProvider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const MenuItems = [
  { name: "Intro", url: "/" },
  { name: "Experiences", url: "/experiences" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const MobileMenuContent = () => {
  const { open, setOpen } = useContext(MobileMenuContext);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.4,
            type: "tween",
            ease: "easeInOut",
            // type: "spring",
            // stiffness: 300,
            // damping: 50,
          }}
          className="w-screen bg-gray-900 text-primary-color fixed top-0 left-0 h-screen p-5 overflow-auto z-50 sm:hidden"
        >
          <div className="absolute right-5 top-5">
            <button onClick={() => setOpen(false)}>
              {" "}
              <X />
            </button>
          </div>

          <h1 className="text-center mb-5">Menu</h1>
          <hr className="border-primary-color mb-5" />
          <ul>
            {MenuItems.map((item, index) => (
              <li key={index} className="mb-7 text-center">
                <Link
                  href={item.url}
                  className="text-2xl font-semibold "
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
