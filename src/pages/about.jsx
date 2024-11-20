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

const About = (props) => {  
  return (
    <>
      <Headter />

      {props.isShow ? <h1>{props.doubleCount}</h1>: null}
      <button onClick={props.handleClick} > ボタン </button>
      <button onClick={props.handleDisplay} > {props.isShow ? "非表示" : "表示"} </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul> 
        {props.array.map((item) => {
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

export default About
