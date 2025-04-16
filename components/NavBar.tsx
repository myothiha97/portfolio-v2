import { SECTIONS_IDS } from "@/constants";
import { cn } from "@/libs/utils/styles";
import { scrollToSection } from "@/libs/utils/ui";
import { useContext, useEffect, useState } from "react";
import ContactModal from "./sections/ContactModal";
import useModal from "@/libs/hooks/useModal";
import { SlideIndexContext } from "./Providers/SlideIndexProvider";

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
  const { slideIndex } = useContext(SlideIndexContext);
  const { openModal } = useModal();
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
        "py-5 pl-10 pr-32 justify-end w-screen transition-colors duration-500 ease-in-out lg:flex hidden",
        // showNavBarColor ? "bg-primary-color/90 text-black" : "bg-transparent",
        className
      )}
    >
      <div className="flex gap-x-7 items-center">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full transition-all",
              slideIndex === index ? "text-primary-color " : "text-gray-400",
              section.title === "Contact" ? contactBtnClass : ""
            )}
            onClick={() => {
              if (index === SECTIONS.length - 1) {
                openModal({ content: <ContactModal /> });
                return;
              }
              scrollToSection(section.id);
            }}
          >
            {section.title}
          </button>
          // <button
          //   key={index}
          //   className={cn(
          //     "rounded-full transition-all",
          //     slideIndex === index
          //       ? showNavBarColor
          //         ? "font-bold"
          //         : "text-primary-color"
          //       : showNavBarColor
          //       ? "text-black"
          //       : "text-gray-400",
          //     section.title === "Contact"
          //       ? showNavBarColor
          //         ? `${contactBtnClass} bg-gray-800 text-primary-color`
          //         : `${contactBtnClass}`
          //       : ""
          //   )}
          //   onClick={() => {
          //     if (index === SECTIONS.length - 1) {
          //       openModal({ content: <ContactModal /> });
          //       return;
          //     }
          //     scrollToSection(section.id);
          //   }}
          // >
          //   {section.title}
          // </button>
        ))}
      </div>
    </nav>
  );
};

export default NavPagination;
