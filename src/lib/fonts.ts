import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const trumpGothic = localFont({
  src: "./fonts/TrumpGothicEastBold.woff",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
