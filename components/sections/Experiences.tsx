import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/accordion";
import React from "react";

const EXPERIENCES = [
  {
    title: "Codigo - App Development Company in Singapore",
    position: "Senior web developer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "09/2021 - Present",
    location: "Singapore (Remote)",
    fullDescription: [
      `Codigo is a software company specializing in mobile and web app
development.`,
      `At Codigo, I developed and maintained web applications using
modern frameworks like React, Next.js, Node.js, Angular, and
TypeScript. Collaborated with cross-functional teams to deliver
high-quality, on-time projects tailored to client needs.
`,
      `Collaborated closely with cross-functional teams to ensure the
timely delivery of high-quality web applications.`,
    ],
  },
  {
    title: "Rezerv - Fitness, Wellness & Spa Management Software",
    position: "web developer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "02/2022 - 06/2022",
    location: "Singapore (Remote)",
    fullDescription: [
      `Rezerv is a comprehensive management software for service-based
businesses in industries such as fitness, wellness, education, arts,
healthcare, hospitality, and maintenance.`,
      `As a web developer, I am responsible to develop and maintain the
platform using React, Next.js, NodeJS and Typescript.
`,
      `During my time at Rezerv, I collaborated with teams like UI/UX and
QA to ensure seamless project execution.`,
    ],
  },
  {
    title: "Freelance",
    position: "web developer",
    description:
      "Codigo is a software company specializing in mobile and web app development.",
    date: "10/2020 - 09/2021",
    location: "Yangon, Myanmar",
    fullDescription: [
      `Developed websites using HTML, CSS, JavaScript, Typescript,
React, NodeJS and Nextjs.`,
      `Provided web development support, creating visually appealing
designs that aligned with brand standards.
`,
      `Enhanced user experience by implementing responsive web design
and optimizing website performance.`,
    ],
  },
  {
    title: "MM-Digitial-Solutions",
    position: "Python Developer",
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
];

const Experiences = () => {
  return (
    <div className="hide-scrollbar w-[clamp(400px,60vw,700px)]">
      <h1 className="mb-10">Work Experiences</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {EXPERIENCES.map((experience, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">
              <div>
                <div className="flex flex-col">
                  <h1 className="text-xl">{experience.title}</h1>
                  <p className="text-lg">{experience.position}</p>
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
    </div>
  );
};

export default Experiences;
