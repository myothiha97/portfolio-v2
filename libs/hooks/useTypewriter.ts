import { useEffect, useState } from "react";

type Params = {
  text: string;
  speed?: number;
  callback?: () => void;
};

export default function useTypewriter({ text, speed = 50, callback }: Params) {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const typeCharater = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        setTimeout(typeCharater, speed);
      }
    };
    typeCharater();
    if (callback) {
      setTimeout(callback, text.length * speed);
    }
  }, [text, speed]);

  return displayText;
}
