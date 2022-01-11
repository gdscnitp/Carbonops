import Head from "next/head";
import { useEffect } from "react";
import logger from "../helpers/logger";
import Navbar from "../src/components/navbar/Navbar";
import HomePage from "../src/components/homePage/HomePage";
import Footer from "../src/components/footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  logger.info("Home");
  useEffect(() => {
    logger.debug("Home mounted");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar action1="" action2="Login" buttonText1="SignUp" buttonText2="" />
      {/* <div className={styles.circle}></div> */}
      <main className={styles.main}>
        <HomePage />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
