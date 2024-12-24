import { cn } from "@/libs/utils/styles";
import { EmblaCarouselType } from "embla-carousel";
import { useContext } from "react";
import { ModalStateContext } from "../Providers/ModalStateProvider";

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
  const { setDrawer } = useContext(ModalStateContext);
  return (
    <div className={cn("flex w-full justify-center", className)}>
      <div className="flex gap-x-7 items-center">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full",
              selectedIndex === index ? "text-primary-color" : "text-gray-400"
            )}
            onClick={() => {
              if (emblaApi && section !== "Contact") emblaApi?.scrollTo(index);
              else {
                setDrawer(true);
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
