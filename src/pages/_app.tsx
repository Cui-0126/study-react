import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightBlue } from "../hooks/useBgBlueLight";

export default function App({ Component, pageProps }: AppProps) {

  const counter = useCounter ();
  console.log(counter)
  const inputArray = useInputArray ();
  useBgLightBlue ();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
