import React from "react";
import Image from "next/image";

interface ContentLayoutProps {
  imgSrc: string;
  title: string;
  description: string;
  duration: string | React.ReactNode;
}

const ContentLayout = ({
  imgSrc,
  title,
  description,
  duration,
}: ContentLayoutProps) => {
  return (
    <div className=" text-primary-color">
      <h1 className="mb-5 px-8">{title}</h1>
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
        <p className="text-lg">Duration - {duration}</p>
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
