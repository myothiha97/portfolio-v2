import React, { useState } from "react";

type Params = {
  next: () => void;
  prev: () => void;
};

export default function useSwipe({ next, prev }: Params) {
  const ref = React.useRef<HTMLElement>(null);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0]?.clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    debugger;
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("touchstart", handleTouchStart);
      node.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      node?.removeEventListener("touchstart", handleTouchStart);
      node?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleTouchMove, handleTouchStart]);
  return { ref };
}
