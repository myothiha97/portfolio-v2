import Carousel from "@/components/Carousel/Carousel";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Intro from "@/components/sections/Intro";
import { AnimatePresence, motion } from "framer-motion";
import SlideIn from "../components/Animations/motions/SlideIn";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={"h-full hidden sm:block"}>
        {loading ? <Loading /> : <Carousel />}
      </div>
      <AnimatePresence>
        <SlideIn>
          <Intro />
        </SlideIn>
      </AnimatePresence>
    </>
  );
}
