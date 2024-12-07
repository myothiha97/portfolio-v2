import Image from "next/image";

import useTypewriter from "@/libs/hooks/useTypewriter";
import React, { useEffect, useState } from "react";
import { cn } from "@/libs/utils/styles";

const Intro = () => {
  const [displayImage, setDisplayImage] = useState(false);
  const [displayBodyText, setDisplayBodyText] = useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const myIntro = useTypewriter({
    text: "Hi, I am Myothiha!",
    speed: 60,
    callback: () => {
      setDisplayImage(true);
      timerRef.current = setTimeout(() => {
        setDisplayBodyText(true);
      }, 400);
    },
  });
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className={"w-full flex justify-center"}>
      <div>
        <div className={"flex gap-x-10 items-center min-h-[149px]"}>
          <h1>{myIntro}</h1>
          <Image
            src="/my-profile.jpg"
            alt="profile image"
            width={150}
            height={150}
            className={cn(
              "rounded-full border-4 border-primary opacity-0 invisible transition-opacity duration-500",
              displayImage && "opacity-100 visible"
            )}
          />
        </div>

        <p
          className={cn(
            "mt-5 max-w-2xl hide transition-opacity duration-300",
            displayBodyText && "show"
          )}
        >
          I am a professional web developer with over five years of experience
          designing and implementing diverse web applications, from simple
          static sites to dynamic, large-scale, and high-performance platforms.
          My work encompasses full-stack web development, scalable
          architectures, and cloud solutions, delivering innovative and robust
          results across diverse projects.
        </p>
      </div>
    </div>
  );
};

export default Intro;
