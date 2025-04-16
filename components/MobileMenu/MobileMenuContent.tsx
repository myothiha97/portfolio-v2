import React, { useContext } from "react";
import { MobileMenuContext } from "./MobileMenuProvider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/libs/utils/ui";
import { SECTIONS_IDS } from "@/constants";

const MenuItems = [
  { name: "Intro", sectionID: SECTIONS_IDS.INTRO },
  { name: "Experiences", sectionID: SECTIONS_IDS.EXPERIENCES },
  { name: "Projects", sectionID: SECTIONS_IDS.PROJECTS },
  { name: "Contact", sectionID: SECTIONS_IDS.CONTACT },
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
          className="w-screen bg-gray-900 text-primary-color fixed top-0 left-0 h-screen p-5 overflow-auto z-50 lg:hidden"
        >
          <div className="absolute right-5 top-5">
            <button onClick={() => setOpen(false)}>
              {" "}
              <X />
            </button>
          </div>

          <h1 className="text-center mb-5">Menu</h1>
          <hr className="border-primary-color mb-5" />
          <ul className="flex flex-col items-center">
            {MenuItems.map((item, index) => (
              <button
                className="text-2xl font-semibold "
                onClick={() => {
                  scrollToSection(item.sectionID);
                  setOpen(false);
                }}
              >
                <li key={index} className="mb-7 text-center">
                  {item.name}
                </li>
              </button>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
