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
import { SECTIONS_IDS } from "@/constants";
import { SCROLL_MARGIN_SETTINGS } from "../../../constants/index";
import SlideIn from "@/components/Animations/motions/SlideIn";
import { useSlideIndexChange } from "@/components/Providers/SlideIndexProvider";

export default function ProjectCards() {
  const cards = useMemo(
    () =>
      data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      )),
    []
  );
  const ref = React.useRef<HTMLDivElement>(null);
  useSlideIndexChange(ref, 2);

  return (
    <SlideIn
      ref={ref}
      className="min-h-screen sm:min-h-[auto] lg:min-h-screen pageContainer overflow-visible lg:pt-32 2xl:pt-32 sm:px-20 px-5 sm:pt-0 md:mb-32 mb-10 lg:mb-0"
      id={SECTIONS_IDS.PROJECTS}
      style={{
        ...SCROLL_MARGIN_SETTINGS,
      }}
    >
      <h2 className=" text-primary-color">Projects</h2>
      <Carousel items={cards} />
    </SlideIn>
  );
}

const data = [
  {
    category: "Jan 2023 - Nov 2023",
    title: "7-Eleven Singapore",
    src: "7-eleven.webp",

    content: <SevenElevenContents />,
  },
  {
    category: "Feb 2022 - Jun 2022",
    title: "Rezerv",
    src: "rezerv-min.webp",
    content: <RezervContents />,
  },
  {
    category: "May 2023 - Oct 2023",
    title: "Yoga Movement",
    src: "yoga-movement-min.webp",
    content: <YogaMovementContents />,
  },
  {
    category: "Mar 2024 - Jun 2024",
    title: "Trifecta Singapore",
    src: "trifecta-min.webp",
    content: <TrifectaContents />,
  },
  {
    category: "Mar 2024 - May 2024",
    title: "ES Express Asia",
    src: "es-express-1-min.webp",
    content: <EsExpressContents />,
  },
  {
    category: "Jan 2024 - May 2024",
    title: "Neuroglee Health",
    src: "neuroglee-min.webp",
    content: <NeurogleeContents />,
  },
  {
    category: "Aug 2023 - Dec 2023",
    title: "AIA Myanmar CMS",
    src: "aia-min.webp",
    content: <AIAMyanmarContents />,
  },
  {
    category: "Nov 2022 - Jan 2023",
    title: "Resorts World Sentosa, Singapore",
    src: "rws-min.webp",
    content: <RWSContents />,
  },
  {
    category: "Sep 2021 - Mar 2022",
    title: "Kcuts CMS",
    src: "kcuts-1-min.webp",
    content: <KcutsContents />,
  },
  {
    category: "Apr 2024 - Sep 2024",
    title: "SPOTV-NOW",
    src: "spotv-min.webp",
    content: <SPOTVContents />,
  },
];
