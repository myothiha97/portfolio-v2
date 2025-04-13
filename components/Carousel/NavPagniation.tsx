import { SECTIONS_IDS } from "@/constants";
import { cn } from "@/libs/utils/styles";
import { openModal, scrollToSection } from "@/libs/utils/ui";
import { useContext, useEffect, useState } from "react";
import { SlideIndexContext } from "../Providers/SlideIndexProvider";
import { ModalStateContext } from "../Providers/ModalStateProvider";
import Contact from "../sections/Contact";
import ContactModal from "../sections/ContactModal";

interface NavPaginationProps {
  className?: string;
}

const SECTIONS = [
  {
    title: "Intro",
    id: SECTIONS_IDS.INTRO,
  },
  {
    title: "Experiences",
    id: SECTIONS_IDS.EXPERIENCES,
  },
  {
    title: "Projects",
    id: SECTIONS_IDS.PROJECTS,
  },
  {
    title: "Contact",
    id: SECTIONS_IDS.CONTACT,
  },
];

const SCROLL_THRESHOLD = 0.05;

const NavPagination = ({ className }: NavPaginationProps) => {
  const [showNavBarColor, setShowNavBarColor] = useState(false);
  const { setDrawer, setContent } = useContext(ModalStateContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY / (documentHeight - windowHeight) > SCROLL_THRESHOLD) {
        setShowNavBarColor(true);
      } else {
        setShowNavBarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const contactBtnClass = `bg-primary-color text-black py-2 px-4 rounded-md font-semibold text-sm`;
  return (
    <nav
      className={cn(
        "py-5 pl-10 pr-32 flex justify-end w-screen transition-colors duration-500 ease-in-out",
        showNavBarColor ? "bg-primary-color/90 text-black" : "bg-transparent",
        className
      )}
    >
      <div className="flex gap-x-7 items-center">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full transition-all",
              section.title === "Contact"
                ? showNavBarColor
                  ? `${contactBtnClass} bg-gray-900 text-white`
                  : `${contactBtnClass}`
                : ""
            )}
            onClick={() => {
              if (index === SECTIONS.length - 1) {
                setContent(<ContactModal />);
                openModal();
                return;
              }
              scrollToSection(section.id);
            }}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavPagination;
