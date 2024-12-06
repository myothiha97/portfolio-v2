import React from "react";

import { cn } from "@/libs/utils/styles";
import { EmblaCarouselType } from "embla-carousel";

interface Props {
  className?: string;
  children: React.ReactNode;
  emblaApi?: EmblaCarouselType;
}

const PageSection = ({ className, children, emblaApi }: Props) => {
  return <section className={cn(className)}>{children}</section>;
};

export default PageSection;
