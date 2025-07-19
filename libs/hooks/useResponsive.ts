import { useMedia } from "react-use";

export default function useResponsive() {
  const isMobile = useMedia("(max-width: 640px)");
  const isMediumScreen = useMedia("(min-width: 1300px)");
  const isLargeScreen = useMedia("(min-width: 1600px)");
  return {
    isMobile,
    isMediumScreen,
    isLargeScreen,
  };
}
