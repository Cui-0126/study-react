import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import Headter from "src/components/Headter";
import { Footer } from "src/components/Footer";
import {Major} from "src/components/Major"
import {Top} from "src/components/Top";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightBlue } from "../hooks/useBgBlueLight";

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

export default function About() {
  const {count, isShow, handleClick, handleDisplay} = useCounter ();
  const {text, array, handleChange, handleAdd} = useInputArray ();
  useBgLightBlue ();

  return (
    <>
      <Headter />

      {isShow ? <h1>{count}</h1>: null}
      <button onClick={handleClick} > ボタン </button>
      <button onClick={handleDisplay} > {isShow ? "非表示" : "表示"} </button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul> 
        {array.map((item) => {
        return <li key={item}>{item}</li>;
      })} 
      </ul>

      <Top />

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
