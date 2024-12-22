import React, { useState } from "react";

export const SlideIndexContext = React.createContext({
  slideIndex: 0,
  setSlideIndex: (index: number) => {},
});

type Props = {
  children: React.ReactNode;
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
