import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppRoot from "@/components/AppRoot";
import "@/styles/carousel.css";
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { ComponentPreviews, useInitial } from "@/dev";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRoot>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <Component {...pageProps} />
      </DevSupport>
    </AppRoot>
  );
}
