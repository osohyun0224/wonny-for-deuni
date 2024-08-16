import styles from "./page.module.css";
import Splash from "@/app/_components/splash";
export default function Home() {
  return (
    <main className={styles.main}>
      <Splash/>
    </main>
  );
}
