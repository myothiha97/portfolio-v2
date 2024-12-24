import React, { useEffect } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref?.current?.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}
