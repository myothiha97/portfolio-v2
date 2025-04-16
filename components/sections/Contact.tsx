import Link from "next/link";
import SlideIn from "../Animations/motions/SlideIn";
import { ContactItem } from "./ContactModal";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useSlideIndexChange } from "../Providers/SlideIndexProvider";
import React from "react";
import { SECTIONS_IDS } from "@/constants";

const Icon = ({ children }: any) => {
  return <div className="w-5 h-5">{children}</div>;
};

export default function Contact() {
  const ref = React.useRef<HTMLDivElement>(null);
  useSlideIndexChange(ref, 3);
  return (
    <SlideIn
      className="px-5 lg:hidden pb-10 pt-20 min-h-screen"
      ref={ref}
      id={SECTIONS_IDS.CONTACT}
    >
      <h1 className="mb-5 sm:text-center">Contact </h1>
      <div className="flex flex-col gap-4 sm:max-w-lg mx-auto">
        <ContactItem
          icon={
            <Icon>
              <Mail />
            </Icon>
          }
          title="Email"
        >
          mthk97.dev@gmail.com
        </ContactItem>
        <ContactItem
          icon={
            <Icon>
              <Phone />
            </Icon>
          }
          title="Phone"
        >
          +66927033226
        </ContactItem>
        <ContactItem
          icon={
            <Icon>
              <Github />
            </Icon>
          }
          title="Github"
        >
          <Link href={"https://github.com/myothiha97"} target="_blank">
            https://github.com/myothiha97
          </Link>
        </ContactItem>
        <ContactItem
          icon={
            <Icon>
              <Linkedin />
            </Icon>
          }
          title="Linkedin"
        >
          <Link
            href={"https://www.linkedin.com/in/myo-thiha-kyaw-ba036a187"}
            target="_blank"
          >
            https://www.linkedin.com/in/myo-thiha-kyaw-ba036a187
          </Link>
        </ContactItem>
      </div>
    </SlideIn>
  );
}
