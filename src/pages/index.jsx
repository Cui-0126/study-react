import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import Headter from "src/components/Headter"
import  { Footer } from "src/components/Footer"
import {Major} from "src/components/Major"
import {Top} from "src/components/Top";
import { useCallback, useEffect } from "react";

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
  const foo = 1;

  const handleClick = useCallback ((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
   document.body.style.backgroundColor = "lightblue";
   return () => {
    console.log("アンマウント時");
    document.body.style.backgroundColor = "";
   }
  },[]);

  return (
    <>
      <Headter></Headter>
      <a href="/about" onClick={handleClick} >
        ボタン
      </a>

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
