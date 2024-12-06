import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./NavigationButtons";
import useEmblaCarousel from "embla-carousel-react";

// sections
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

// utils
import { cn } from "@/libs/utils/styles";

import PageSection from "@/components/sections/PageSection";

type PropType = {
  slides?: React.ReactNode[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = { axis: "y" };
const SECTIONS: React.ReactNode[] = [
  <Intro />,
  <Skills />,
  <Projects />,
  <Contact />,
];

const EmblaCarousel: React.FC<PropType> = ({
  slides = SECTIONS,
  options = OPTIONS,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSlideChange = () => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(selectedIndex);
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSlideChange);
    }
  }, [emblaApi, onSlideChange]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((Section, index) => (
            <PageSection
              className={cn(
                "embla__slide",
                selectedIndex === index && "active",
              )}
              key={index}
            >
              <div className={cn("embla__slide__number")}>{Section}</div>
            </PageSection>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons !flex flex-col !gap-y-5">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
