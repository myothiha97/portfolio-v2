import React, { useContext } from "react";
import { MobileMenuContext } from "./MobileMenuProvider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const MenuItems = [
  { name: "Intro", url: `/?bgIndex=0` },
  { name: "Experiences", url: "/experiences?bgIndex=1" },
  { name: "Projects", url: "/projects?bgIndex=2" },
  { name: "Contact", url: "/contact?bgIndex=3" },
];

const MobileMenuContent = () => {
  const { open, setOpen } = useContext(MobileMenuContext);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
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
              <Link
                href={item.url}
                className="text-2xl font-semibold "
                onClick={() => setOpen(false)}
              >
                <li key={index} className="mb-7 text-center">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
