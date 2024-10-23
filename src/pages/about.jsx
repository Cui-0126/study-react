import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Headter from "@/components/Headter";
import { Footer } from "@/components/Footer";
import {Major} from "../components/Major"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Headter />

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
       <Major text="Start"
        memo="Look">

       </Major>

        <Footer />
      </div>
    </>
  );
}