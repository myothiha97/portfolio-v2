import { cn } from "@/libs/utils/styles";
import { EmblaCarouselType } from "embla-carousel";
import { useContext } from "react";
import { ModalStateContext } from "../Providers/ModalStateProvider";
import ContactModal from "../sections/ContactModal";
import { openModal } from "@/libs/utils/ui";

interface NavPaginationProps {
  emblaApi?: EmblaCarouselType;
  className?: string;
  selectedIndex: number;
}

const SECTIONS = ["Intro", "Experiences", "Projects", "Contact"];

const NavPagination = ({
  emblaApi,
  className,
  selectedIndex,
}: NavPaginationProps) => {
  const { setContent } = useContext(ModalStateContext);
  return (
    <div className={cn("flex w-full justify-center", className)}>
      <div className="flex gap-x-7 items-center">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full",

              selectedIndex === index ? "text-primary-color" : "text-gray-400",
              section === "Contact"
                ? "bg-primary-color text-black py-2 px-4 rounded-md font-semibold text-sm"
                : ""
            )}
            onClick={() => {
              if (emblaApi && section !== "Contact") emblaApi?.scrollTo(index);
              else {
                setContent(<ContactModal />);
                openModal();
              }
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavPagination;
