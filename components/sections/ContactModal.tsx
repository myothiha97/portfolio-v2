import {
  Github,
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
} from "lucide-react";
import React, { useState } from "react";

const CopySVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-copy"
    >
      <rect width="10" height="10" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
};

type ContactItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  disabledAutoCopy?: boolean;
};

export const ContactItem = ({
  title,
  children,
  icon,
  disabledAutoCopy,
}: ContactItemProps & { title: string }) => {
  const [copied, setCopied] = useState(false);
  const text = typeof children === "string" ? children : "";
  const onClickText = () => {
    if (navigator?.clipboard && !disabledAutoCopy) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      });
    }
  };
  return (
    <div className="grid grid-cols-1 w-fit">
      <div className="flex gap-5 items-start">
        {icon}
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          {typeof children === "string" ? (
            <div
              className="text-base flex items-center gap-5 group cursor-pointer "
              onClick={onClickText}
            >
              <p className="hover:underline text-left text-lg">{children}</p>
              {!disabledAutoCopy && (
                <div className="visible opacity-0 group-hover:opacity-100 text-sm transition duration-500">
                  {copied ? "Copied!" : <CopySVG />}
                </div>
              )}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="py-2 border-t border-primary-color opacity-35" />;
};

export default function ContactModal() {
  return (
    <div className="px-10">
      <h1 className="mb-5 text-center">Contact </h1>
      <div className="flex flex-col gap-4">
        <ContactItem icon={<Mail />} title="Email">
          mthk97.dev@gmail.com
        </ContactItem>
        <ContactItem icon={<Phone />} title="Phone">
          +66927033226
        </ContactItem>
        <ContactItem icon={<Github />} title="Github">
          https://github.com/myothiha97
        </ContactItem>
        <ContactItem icon={<Linkedin />} title="Linkedin">
          https://www.linkedin.com/in/myo-thiha-kyaw-ba036a187
        </ContactItem>
      </div>
    </div>
  );
}
