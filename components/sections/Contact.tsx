import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import React, { useContext, useEffect, useState } from "react";
import { ModalStateContext } from "../Providers/ModalStateProvider";

const CloseIcon = () => {
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
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

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

const Contact = () => {
  const { drawer, setDrawer } = useContext(ModalStateContext);

  useEffect(() => {
    const entireContent = document.getElementById(
      "drawer-entire-content"
    ) as HTMLDivElement;
    const content = document.getElementById("drawer-content") as HTMLDivElement;
    console.log(entireContent, content);
    const onClickOutside = (e) => {
      debugger;
      if (entireContent && content && !content?.contains(e.target)) {
        setDrawer(false);
      }
    };
    entireContent?.addEventListener("click", onClickOutside);
    return () => {
      entireContent?.removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <Drawer open={drawer}>
      <DrawerContent
        id="drawer-entire-content"
        onClickOverLay={() => setDrawer(false)}
      >
        <div className="px-5 pt-8 pb-6 relative" id="drawer-content">
          <DrawerClose
            className="absolute right-6 top-4"
            onClick={() => setDrawer(false)}
          >
            <CloseIcon />
          </DrawerClose>
          <h1 className="text-2xl text-center">Contact</h1>
          <div className="flex flex-col gap-4">
            <ContactItem title="Email">mthk97.dev@gmail.com</ContactItem>
            <ContactItem title="Phone">+6627033226</ContactItem>
            <ContactItem title="Address">Chaing Mai, Thailand</ContactItem>
            <ContactItem title="Linkedin">
              https://www.linkedin.com/in/myo-thiha-kyaw-ba036a187
            </ContactItem>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Contact;
