import React, { useContext, useEffect, useState } from "react";
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
import Experiences from "@/components/sections/Experiences";

// utils
import { cn } from "@/libs/utils/styles";

import PageSection from "@/components/sections/PageSection";
import { SlideIndexContext } from "../Providers/SlideIndexProvider";

type PropType = {};

const OPTIONS: EmblaOptionsType = { axis: "y" };

const getSections = (slideIndex: number) => {
  return [
    <Intro />,
    <Experiences />,
    <Projects />,
    // <Contact />,
  ];
};

const EmblaCarousel: React.FC<PropType> = () => {
  const [options, setOptions] = useState(OPTIONS);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { slideIndex, setSlideIndex } = useContext(SlideIndexContext);

  const onSlideChange = () => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setSlideIndex(selectedIndex);
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

  const slides = getSections(slideIndex);

  return (
    <div className="w-screen hidden sm:block">
      {/* <NavPagination
        selectedIndex={slideIndex}
        className="fixed z-50 justify-end right-20 top-5 2xl:right-52 2xl:top-10"
        emblaApi={emblaApi}
      /> */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((Section, index) => (
              <PageSection
                className={cn("embla__slide", slideIndex === index && "active")}
                key={index}
              >
                <div className={cn("embla__slide__number")}>{Section}</div>
              </PageSection>
            ))}
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons !flex flex-col !gap-y-5">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
