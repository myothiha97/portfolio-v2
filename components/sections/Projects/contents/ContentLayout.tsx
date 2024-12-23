import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentLayoutProps {
  imgSrc: string;
  title: string;
  description: string;
  duration: string | React.ReactNode;
  link: string;
}

const ContentLayout = ({
  imgSrc,
  title,
  description,
  duration,
  link,
}: ContentLayoutProps) => {
  return (
    <div className=" text-primary-color">
      <h1 className="mb-5 px-8 text-3xl">{title}</h1>
      <div className="flex px-8">
        <div className="relative w-[300px] aspect-[16/10]">
          <Image
            src={imgSrc}
            alt={title + " image"}
            fill
            className="mb-5 w-full h-full object-fill rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-1 px-8 pt-5">
        <p className="text-base">{duration}</p>
        <p className="flex gap-3 text-base">
          Site link -{" "}
          <Link href={link} target="_blank" className="hover:underline">
            {link.replace(/(^\w+:|^)\/\//, "")}
          </Link>
        </p>

        <p className=""></p>
        {typeof description === "string" ? (
          <p className="text-base">{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};

export default ContentLayout;
