"use client";
import React, { useMemo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  AIAMyanmarContents,
  EsExpressContents,
  KcutsContents,
  NeurogleeContents,
  RezervContents,
  RWSContents,
  SevenElevenContents,
  SPOTVContents,
  TrifectaContents,
  YogaMovementContents,
} from "./contents";

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

const data = [
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.jpg",

    content: <SevenElevenContents />,
  },
  {
    category: "Feb 2022 - Jun 2022",
    title: "Rezerv",
    src: "rezerv-min.png",
    content: <RezervContents />,
  },
  {
    category: "May 2023 - Oct 2023",
    title: "Yoga Movement",
    src: "yoga-movement-min.png",
    content: <YogaMovementContents />,
  },
  {
    category: "Mar 2024 - Jun 2024",
    title: "Trifecta Singapore",
    src: "trifecta-min.png",
    content: <TrifectaContents />,
  },
  {
    category: "Mar 2024 - May 2024",
    title: "ES Express Asia",
    src: "es-express-1-min.png",
    content: <EsExpressContents />,
  },
  {
    category: "Jan 2024 - May 2024",
    title: "Neuroglee Health",
    src: "neuroglee-min.png",
    content: <NeurogleeContents />,
  },
  {
    category: "Aug 2023 - Dec 2023",
    title: "AIA Myanmar CMS",
    src: "aia-min.png",
    content: <AIAMyanmarContents />,
  },
  {
    category: "Nov 2022 - Jan 2023",
    title: "Resorts World Sentosa, Singapore",
    src: "rws-min.png",
    content: <RWSContents />,
  },
  {
    category: "Sep 2021 - Mar 2022",
    title: "Kcuts CMS",
    src: "kcuts-1-min.png",
    content: <KcutsContents />,
  },
  {
    category: "Apr 2024 - Sep 2024",
    title: "SPOTV-NOW",
    src: "spotv-min.png",
    content: <SPOTVContents />,
  },
];
