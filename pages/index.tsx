import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Intro from "@/components/sections/Intro";
import { AnimatePresence, motion } from "framer-motion";
import Experiences from "../components/sections/Experiences";
import ProjectCards from "../components/sections/Projects/ProjectCards";
import NavBar from "../components/NavBar";
import Contact from "../components/sections/Contact";

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
      <AnimatePresence>
        {loading ? (
          <Loading />
        ) : (
          <>
            <NavBar className="fixed z-50 top-0" />
            <Intro />
            <Experiences className="mb-36" />
            <ProjectCards />
            <Contact />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
