import Image from "next/image";

import useTypewriter from "@/libs/hooks/useTypewriter";
import React, { useState } from "react";
import { cn } from "@/libs/utils/styles";

const Intro = () => {
  const [displayImage, setDisplayImage] = useState(false);
  const myIntro = useTypewriter({
    text: "Hi, I am Myothiha!",
    speed: 50,
    callback: () => setDisplayImage(true),
  });

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

        <p className={"mt-5 max-w-2xl"}>
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
