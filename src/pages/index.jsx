import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import Headter from "src/components/Headter"
import  { Footer } from "src/components/Footer"
import {Major} from "src/components/Major"
import {Top} from "src/components/Top";
import {useCallback, useEffect, useState } from "react";

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
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback( 
    () => {
    if (count < 10){
    setCount(prevCount =>prevCount + 1);
    }
  }, [count]) ;

  const handleDisplay = useCallback(() =>{
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5){
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
 },[]);

  useEffect(() => {
     document.body.style.backgroundColor = "lightblue";
   return () => {
    document.body.style.backgroundColor = "";
   }
  },[]);

  return (
    <>
      <Headter></Headter>
      {isShow ? <h1>{count}</h1>: null}
      <button onClick={handleClick} > ボタン </button>
      <button onClick={handleDisplay} > {isShow ? "非表示" : "表示"} </button>

      <input 
      type="text" value={text} onChange={handleChange} />

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
