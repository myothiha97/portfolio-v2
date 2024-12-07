import Carousel from "@/components/Carousel/Carousel";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return <div className={"h-full"}>{loading ? <Loading /> : <Carousel />}</div>;
}
