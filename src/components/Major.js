import Image from "next/image";
import styles from "./Major.module.css";
import {Headline} from "./Headline"



export  function Major(props) {
  return (
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Headline page="index"
          
          code={<code>src/pages/index.tsx</code>}
          
          />

          <div className={styles.ctas}>
           
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {props.text} now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
               {props.memo} our docs
            </a>
          </div>
        </main>
        
  );
}