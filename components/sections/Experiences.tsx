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
import useResponsive from "@/libs/hooks/useResponsive";
import {
  getTotalWorkExperience,
  DateRangeFormat,
  Month,
  Year,
} from "@/libs/utils/misc";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  isPresent?: boolean;
  position: string;
  description?: string;
  location: string;
  date: DateRangeFormat | `${Month}/${Year} - ${string}`;
  fullDescription: string[];
};

const EXPERIENCES: Experience[] = [
  {
    title: "Rezerv - Fitness, Wellness & Spa Management Software",
    position: "Senior Frontend Engineer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "10/2024 - present",
    isPresent: true,
    location: "Singapore (Remote)",
    fullDescription: [
      `Maintain and improve the codebase while implementing new features aligned with project goals.`,
      `Optimize application performance using modern tools, design patterns, and best practices.`,
      `Refactor legacy code and migrate to modern, maintainable technologies and frameworks.`,
      `Research and implement improvements for seamless and scalable API integration.`,
      `Manage frontend deployments, including setting up and maintaining CI/CD pipelines.`,
      `Handle AWS infrastructure related to frontend hosting, ensuring high availability and performance.`,
    ],
  },
  {
    title: "SPOTV",
    position: "Senior Frontend Engineer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "04/2024 - 09/2024",
    location: "Singapore (Remote)",
    fullDescription: [
      `Designed and developed a responsive web application using React, Next.js, TypeScript, and Tailwind CSS.`,
      `Implemented and optimized data fetching using React Query, following best practices for performance and scalability.`,
      `Integrated a video streaming service using third-party libraries such as Brightcove.`,
      `Set up Datadog integration to monitor and analyze web application performance.`,
      `Conducted R&D for a Tizen OS project, exploring compatibility and platform-specific implementation.`,
    ],
  },
  {
    title: "Codigo - App Development Company in Singapore",
    position: "Lead Frontend Engineer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "09/2021 - 05/2024",
    location: "Singapore (Remote)",
    fullDescription: [
      `Created technical documentation for complex technologies used in the organization.`,
      `Researched and introduced new strategies to enhance codebase maintainability and streamline the development workflow.`,
      `Developed and maintained web applications using modern frameworks like React, Next.js, Node.js, Angular, and TypeScript.`,
      `Collaborated closely with cross-functional teams to ensure the timely delivery of high-quality web applications.`,
      `Enhance UX through performance optimizations.`,
      `Refactor legacy code and improve API performance.`,
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

  {
    title: "MM-Digitial-Solutions",
    position: "Software Engineer - Python",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "02/2020 - 02/2021",
    location: "Yangon, Myanmar",
    fullDescription: [
      `Designed a data crawler for efficient data retrieval and analysis to
support business analytics.`,
      `Enhanced application performance by optimizing Python code and
adhering to best practices.`,
      `Developed API integrations to enable seamless communication across organizational software systems.`,
      `Integrated machine learning models into Python applications for
advanced data analysis and predictive insights.`,
    ],
  },
];
type ExperienceProps = (typeof EXPERIENCES)[number] & {
  index?: number;
};

const Experience = ({ index, ...experience }: ExperienceProps) => {
  const { isMediumScreen } = useResponsive();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      viewport={{
        once: true,
        margin: isMediumScreen ? "-80% 0px -80% 0px" : "", // Triggers at 20% viewport
      }}
    >
      <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger className="text-base sm:text-lg">
          <div>
            <div className="flex flex-col gap-1">
              <h1 className="leading-tight sm:leading-snug text-lg 2xl:text-xl">
                {experience.title}
              </h1>
              <p className="leading-tight sm:leading-snug text-base 2xl:text-lg">
                Position - {experience.position}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-base">Date - {experience.date}</p>
              <p className="text-base">
                Duration -{" "}
                {getTotalWorkExperience(
                  experience?.date as DateRangeFormat,
                  experience?.isPresent
                )}
              </p>
              <p className="text-base">Location - {experience.location}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-base">
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
    </motion.div>
  );
};

type Props = {
  className?: string;
};

const Experiences = ({ className }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useSlideIndexChange(ref, 1);
  const { isMobile } = useResponsive();
  return (
    <SlideIn
      ref={ref}
      className={cn(
        "hide-scrollbar sm:max-w-2xl lg:w-[clamp(400px,60vw,700px)] lg:px-0 px-5 sm:pt-10 min-h-screen pageContainer",
        className
      )}
      id={SECTIONS_IDS.EXPERIENCES}
      style={{
        ...(isMobile
          ? { ...SCROLL_MARGIN_SETTINGS.mobile }
          : { scrollMarginTop: "90px" }),
      }}
    >
      <h1 className="sm:mb-8 mb-5">Work Experiences</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {EXPERIENCES.map((experience, index) => (
          <Experience index={index} {...experience} />
        ))}
      </Accordion>
    </SlideIn>
  );
};

export default Experiences;
