import Navbar from "../src/components/navbar/Navbar";
import Sign from "../src/components/sign/sign";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";

export default function SignUpIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar action1="" action2="Home" buttonText1="" buttonText2=""/>
      <Sign text1="an User" text2="Date of Birth" text3="date" />
    </div>
  );
}
