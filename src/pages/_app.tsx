import type { AppProps } from "next/app";
import "src/styles/globals.css";
import { useBgColor } from "../hooks/useBgColor";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";

export default function App({ Component, pageProps }: AppProps) {

  const counter = useCounter ();
  console.log(counter)
  const inputArray = useInputArray ();
  useBgColor ();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}