import Head from "next/head";
import Navbar from "../src/components/navbar/Navbar";
import HomePage from "../src/components/homePage/HomePage";
import Footer from "../src/components/footer/Footer";
import styles from "../styles/Home.module.css";
import Aboutus from '../src/components/AboutUs/Aboutus'

export default function Home() {
  return (
     <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>
      <Aboutus />
      <Navbar action1="" action2="Login" buttonText="SignUp" />
     
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
