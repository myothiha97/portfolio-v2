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

type RowProps = {
  children: React.ReactNode;
};

const ContactItem = ({ title, children }: RowProps & { title: string }) => {
  const [copied, setCopied] = useState(false);
  const text = typeof children === "string" ? children : "";
  const onClickText = () => {
    if (navigator?.clipboard) {
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
      <h2 className="text-lg font-bold">{title}</h2>
      {typeof children === "string" ? (
        <div
          className="text-base flex items-center gap-5 group cursor-pointer "
          onClick={onClickText}
        >
          <p className="hover:underline text-left text-lg">{children}</p>

          <div className="visible opacity-0 group-hover:opacity-100 text-sm transition duration-500">
            {copied ? "Copied!" : <CopySVG />}
          </div>
        </div>
      ) : (
        children
      )}
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
        <ContactItem title="Email">mthk97.dev@gmail.com</ContactItem>
        <ContactItem title="Phone">+6627033226</ContactItem>
        <ContactItem title="Address">Chaing Mai, Thailand</ContactItem>
        <ContactItem title="Linkedin">
          https://www.linkedin.com/in/myo-thiha-kyaw-ba036a187
        </ContactItem>
      </div>
    </div>
  );
}
