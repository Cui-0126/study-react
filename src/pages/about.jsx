import localFont from "next/font/local";
import { Footer } from "src/components/Footer";
import Headter from "src/components/Headter";
import { Major } from "src/components/Major";
import { Top } from "src/components/Top";
import styles from "src/styles/Home.module.css";

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

export default function About({
   doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} )
  
  {  
  return (
    <>
      <Headter />

      {isShow ? <h1>{doubleCount}</h1>: null}
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
