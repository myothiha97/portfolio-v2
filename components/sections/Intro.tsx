import Image from "next/image";

import useTypewriter from "@/libs/hooks/useTypewriter";
import React, { useEffect, useState } from "react";
import { cn } from "@/libs/utils/styles";
import { Copyright } from "lucide-react";
import { SECTIONS_IDS } from "@/constants";
import { SCROLL_MARGIN_SETTINGS } from "../../constants/index";
import SlideIn from "../Animations/motions/SlideIn";
import { useSlideIndexChange } from "../Providers/SlideIndexProvider";
import useResponsive from "@/libs/hooks/useResponsive";

type BadgeProps = {
  text: string;
};
const Badge = ({ text }: BadgeProps) => {
  return (
    <div
      className={cn(
        "border border-primary-color bg-transparent px-3 text-sm 2xl:text-base py-2 rounded-[40px] text-primary-color font-normal transition-colors duration-300 cursor-pointer",
        "hover:bg-primary-color hover:text-black"
      )}
    >
      {text}
    </div>
  );
};

const TECHS = [
  "HTML & CSS",
  "Javascript",
  "React",
  "Typescript",
  "JQuery",
  "Angular",
  "NodeJs",
  "NextJs",
  "NestJs",
  "VueJs",
  "ExpressJs",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "PHP",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Java",
  "CI/CD",
  "selenium",
  "Cypress",
  "Playwright",
  "Docker",
  "Vitest",
  "Jest",
];

const CopyRight = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <p className="flex items-start gap-1 text-xs">
        <Copyright width={10} height={10} />
        {new Date().getFullYear()} CopyRight, Myo Thiha Kyaw
      </p>
    </div>
  );
};

const displayContentsAsync = (action: Function, delay = 400): any => {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      action();
      resolve(timer);
    }, delay);
  });
};

type Props = {
  className?: string;
};
const Intro = ({ className }: Props) => {
  const [displayImage, setDisplayImage] = useState(false);
  const [displayBodyText, setDisplayBodyText] = useState(false);
  const [displayTechs, setDisplayTechs] = useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();
  useSlideIndexChange(ref, 0);
  const myIntro = useTypewriter({
    text: "Hi, I am Myothiha!",
    speed: 60,
    callback: async () => {
      setDisplayImage(true);
      timerRef.current = await displayContentsAsync(() => {
        setDisplayBodyText(true);
      });
      timerRef.current = await displayContentsAsync(() => {
        setDisplayTechs(true);
      }, 800);
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
    <SlideIn
      ref={ref}
      className={cn(
        "w-full relative sm:flex justify-center min-h-screen sm:max-h-screen",
        className
      )}
      id={SECTIONS_IDS.INTRO}
      style={{
        ...(isMobile
          ? SCROLL_MARGIN_SETTINGS.mobile
          : SCROLL_MARGIN_SETTINGS.desktop),
      }}
    >
      <div className="sm:px-0 px-5 relative z-[1]">
        <div className={" gap-x-10 items-center min-h-[149px] hidden sm:flex"}>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl">{myIntro}</h1>
          </div>
          <Image
            src="/my-profile.jpg"
            alt="profile image"
            width={150}
            height={150}
            className={cn(
              "rounded-full border-4 border-primary-color opacity-0 invisible transition-opacity duration-500",
              displayImage && "opacity-100 visible"
            )}
          />
        </div>
        <div className="sm:hidden flex flex-col gap-3">
          <Image
            src="/my-profile.jpg"
            alt="profile image"
            width={100}
            height={100}
            className={cn(
              "rounded-full border-4 border-primary-color sm:opacity-0 sm:invisible transition-opacity duration-500",
              displayImage && "sm:opacity-100 sm:visible"
            )}
          />
          <h1>Hi, I am Myothiha!</h1>
        </div>
        <p
          className={cn(
            "mt-3 sm:mt-5 max-w-2xl text-base sm:text-lg 2xl:text-xl sm:hide transition-opacity duration-1000",
            displayBodyText && "sm:show"
          )}
        >
          I’m a software engineer with 5+ years of experience developing a
          variety of web applications, from static websites to high-performance
          platforms. While I specialize in frontend development, I also have
          practical experience with backend technologies. With a background in
          Mechatronics Engineering, I bring additional skills in automation,
          robotics, and system integration. I'm passionate about innovation and
          solving real-world problems through technology.
        </p>
        <div
          className={cn(
            "flex mt-5 flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 max-w-2xl sm:hide transition-opacity duration-1000",
            displayTechs && "sm:show"
          )}
        >
          {TECHS.map((tech, index) => (
            <Badge key={index} text={tech} />
          ))}
        </div>
      </div>
      {/* <CopyRight className="px-5 mt-5 sm:fixed sm:bottom-20" /> */}
    </SlideIn>
  );
};

export default Intro;
