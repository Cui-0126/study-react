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


export default function Home(props) {
  const {count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props;


  return (
    <>
      <Headter></Headter>

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
        
      <Major text="Deploy"
        memo="Read">
      </Major>
      
        <Footer />

      </div>
    </>
  );
}
