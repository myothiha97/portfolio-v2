import { cn } from "@/libs/utils/styles";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/accordion";
import React from "react";
import { SECTIONS_IDS } from "@/constants";
import { SCROLL_MARGIN_SETTINGS } from "../../constants/index";
import { useSlideIndexChange } from "../Providers/SlideIndexProvider";
import SlideIn from "../Animations/motions/SlideIn";

const EXPERIENCES = [
  {
    title: "Codigo - App Development Company in Singapore",
    position: "Senior Software Engineer - Javascript",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "09/2021 - Present",
    location: "Singapore (Remote)",
    fullDescription: [
      `Codigo is a software company specializing in mobile and web app
development.`,
      `Developed and maintained web applications using modern
frameworks like React, Next.js, Node.js, Angular, and TypeScript.`,
      `Collaborated closely with cross-functional teams to ensure the
timely delivery of high-quality web applications.`,
    ],
  },
  {
    title: "Rezerv - Fitness, Wellness & Spa Management Software",
    position: "Software Engineer - Javascript",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "02/2022 - 06/2022",
    location: "Singapore (Remote)",
    fullDescription: [
      `Rezerv is a comprehensive management software for service-based
businesses in industries such as fitness, wellness, education, arts,
healthcare, hospitality, and maintenance.`,
      `Developed and maintained the platform using React, Next.js, NodeJS
and Typescript.
`,
    ],
  },
  {
    title: "MM-Digitial-Solutions",
    position: "Software Engineer - Python",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "01/2020 - 02/2021",
    location: "Yangon, Myanmar",
    fullDescription: [
      `Designed a data crawler for efficient data retrieval and analysis to
support business analytics.`,
      `Enhanced application performance by optimizing Python code and
adhering to best practices.
`,
      `Integrated machine learning models into Python applications for
advanced data analysis and predictive insights.`,
    ],
  },
  {
    title: "Freelance",
    position: "Software Engineer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "10/2020 - 09/2021",
    location: "Yangon, Myanmar",
    fullDescription: [
      `Developed web application using HTML, CSS, JavaScript, PHP,
Python,Typescript, React, NodeJS and Nextjs.`,
      `Enhanced user experience by implementing responsive web design
and optimizing website performance.`,
    ],
  },
];

type Props = {
  className?: string;
};

const Experiences = ({ className }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useSlideIndexChange(ref, 1);
  return (
    <SlideIn
      ref={ref}
      className={cn(
        "hide-scrollbar sm:w-[clamp(400px,60vw,700px)] sm:px-0 px-5 h-screen pageContainer",
        className
      )}
      id={SECTIONS_IDS.EXPERIENCES}
      style={{
        ...SCROLL_MARGIN_SETTINGS,
      }}
    >
      <h1 className="2xl:mb-10 mb-5">Work Experiences</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {EXPERIENCES.map((experience, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base sm:text-lg">
              <div>
                <div className="flex flex-col gap-1">
                  <h1 className="leading-tight sm:leading-snug text-lg 2xl:text-xl">
                    {experience.title}
                  </h1>
                  <p className="leading-tight sm:leading-snug text-base 2xl:text-lg">
                    {experience.position}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base">Date - {experience.date}</p>
                  <p className="text-base">Location - {experience.location}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base ">
              <ul className="">
                {experience.fullDescription.map((desc, index) => (
                  <li key={index} className="flex gap-x-3 last:mb-0 mb-1">
                    <div>-</div>
                    <span className="text-sm">{desc}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SlideIn>
  );
};

export default Experiences;
