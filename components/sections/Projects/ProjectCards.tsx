"use client";
import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SevenElevenContents } from "./contents";

export default function ProjectCards() {
  const cards = useMemo(
    () =>
      data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      )),
    []
  );

  return (
    <div className="w-full h-full pt-44">
      <h2 className="text-xl md:text-5xl font-bold text-primary-color">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.jpg",
    content: <SevenElevenContents />,
  },
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.jpg",
    content: <SevenElevenContents />,
  },
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.jpg",
    content: <SevenElevenContents />,
  },
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.jpg",
    content: <SevenElevenContents />,
  },
];
