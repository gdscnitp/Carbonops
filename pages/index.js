import Head from "next/head";
import { useEffect } from "react";
import logger from "../helpers/logger";
import Navbar from "../src/components/navbar/Navbar";
import HomePage from "../src/components/homePage/HomePage";
import Footer from "../src/components/footer/Footer";
import styles from "../styles/Home.module.css";
import {navLinks} from '../src/components/utils/data'

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

      {/*<Navbar href1="/" href2="./login" href3="/" href4="/" action1="" action2="Login" buttonText1="SignUp" buttonText2="" />*/}
      <Navbar  
       action2=""
       action1={navLinks[5].name}
       href1={navLinks[5].link}
       buttonText1={navLinks[4].name}
       href3={navLinks[4].link} 
       buttonText2="" 
       buttonText3=""
       buttonText4=""/>
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
