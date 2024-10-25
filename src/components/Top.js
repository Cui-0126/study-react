import Link from "next/link";
import styles from "./Top.module.css";

export function Top() {
  return (
      
        <top className={styles.top}>
          <Link href="/" className={styles.anchor}>
           Index
           </Link>
           <Link href="/about" className={styles.anchor}>
          About
          </Link>
          
        </top>
  );
}
