import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/states/app";

import { Nunito } from "next/font/google";

const inter = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans h-full`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}
