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
  // for some reason, setSlideIndex is not updating the value correctly
  const { slideIndex, setSlideIndex } = React.useContext(SlideIndexContext);
  const isInView = useInView(ref);
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
