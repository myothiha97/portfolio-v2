import type { AppProps } from "next/app";
import AppRoot from "@/components/AppRoot";

// css
import "@/styles/globals.css";
import "@/styles/carousel.css";
import "@/styles/loading.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRoot>
      <Component {...pageProps} />
    </AppRoot>
  );
}
