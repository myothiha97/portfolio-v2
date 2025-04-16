import { useMedia } from "react-use";

export default function useResponsive() {
  const isMobile = useMedia("(max-width: 640px)");
  return {
    isMobile,
  };
}
