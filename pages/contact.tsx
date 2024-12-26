import { ContactItem } from "@/components/sections/ContactModal";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Icon = ({ children }: any) => {
  return <div className="w-5 h-5">{children}</div>;
};

export default function ContactPage() {
  return (
    <div className="px-5 sm:hidden">
      <h1 className="mb-5 text-center">Contact </h1>
      <div className="flex flex-col gap-4">
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
          +6627033226
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
    </div>
  );
}
