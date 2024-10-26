import Image from "next/image";
import styles from "./Footer.module.css";

const ITEMS = [
  {
     href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/file.svg",
    alt: "File icon",
    strings: "Learn"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
   src: "https://nextjs.org/icons/window.svg",
   alt: "Window icon",
   strings: "Examples"
 },
 {
  href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
 src: "https://nextjs.org/icons/globe.svg",
 alt: "Globe icon",
 strings: "Let's Go to nextjs.org →"
}
]

export function Footer() {
  return (
    <>      
        <footer className={styles.footer}>

          {ITEMS.map(item => {
            return (
              
              <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={item.src}
              alt={item.alt}
              width={16}
              height={16}
            />
            {item.strings}
          </a>

            )
          })}

        </footer>
      
    </>
  );
}