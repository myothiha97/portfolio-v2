import { cn } from "@/libs/utils/styles";
import { EmblaCarouselType } from "embla-carousel";

interface NavPaginationProps {
  emblaApi?: EmblaCarouselType;
  className?: string;
  selectedIndex: number;
}

const SECTIONS = ["Intro", "Skills", "Projects", "Contact"];

const NavPagination = ({
  emblaApi,
  className,
  selectedIndex,
}: NavPaginationProps) => {
  return (
    <div className={cn("flex w-full justify-center", className)}>
      <div className="flex gap-x-7 items-center">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full",
              selectedIndex === index ? "text-primary" : "text-gray-400"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavPagination;
