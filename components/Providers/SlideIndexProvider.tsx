import { useInView } from "framer-motion";
import React, { RefObject, use, useEffect, useState } from "react";

export const SlideIndexContext = React.createContext({
  slideIndex: 0,
  setSlideIndex: (index: number) => {},
});

type Props = {
  children: React.ReactNode;
};

export const useSlideIndexChange = (ref: RefObject<any>, index: number) => {
  const { slideIndex, setSlideIndex } = React.useContext(SlideIndexContext);
  const isInView = useInView(ref, {
    margin: `-50% 0px -50% 0px`, // to trigger when the element is in the middle of the viewport
  });
  useEffect(() => {
    if (isInView) {
      setSlideIndex(index);
    }
  }, [isInView]);

  return {
    slideIndex,
    setSlideIndex,
  };
};

const SlideIndexProvider = ({ children }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <SlideIndexContext.Provider value={{ slideIndex, setSlideIndex }}>
      {children}
    </SlideIndexContext.Provider>
  );
};

export default SlideIndexProvider;
