import Link from "next/link";
import styles from "src/components/Top/Top.module.css";

export const Top = () => {
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
