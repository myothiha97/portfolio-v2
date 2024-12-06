import React, { useState, useEffect, createElement } from "react";

interface AnimatedTextProps {
  children: string;
  as?: keyof React.ReactHTML;
  speed?: number;
}

const AnimatedText = ({
  children,
  as = "h1",
  speed = 500,
}: AnimatedTextProps) => {
  const words = children.split(" "); // Split the text into words

  const [visibleWords, setVisibleWords] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setVisibleWords((prev) => [...prev, words[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop when all words are displayed
      }
    }, speed); // Adjust the delay between words

    return () => clearInterval(interval); // Cleanup on unmount
  }, [words]);

  return createElement(
    as,
    { className: "animated-text" },
    visibleWords.map((word, index) =>
      createElement("span", { key: index, className: "word" }, word + " "),
    ),
  );
};

export default AnimatedText;
