import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import Headter from "src/components/Headter"
import  { Footer } from "src/components/Footer"
import {Major} from "src/components/Major"
import {Top} from "src/components/Top";

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
      <Headter></Headter>

      <Top />

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        
      <Major text="Deploy"
        memo="Read">
      </Major>
      
        <Footer />

      </div>
    </>
  );
}
