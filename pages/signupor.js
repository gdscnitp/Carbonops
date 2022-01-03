import Navbar from "../src/components/navbar/Navbar";
import Sign from "../src/components/sign/sign";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";

export default function SignUpOr() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar action1="" action2="" buttonText="" />
      <Sign text1="Registered" text2="Organisation ID" />
    </div>
  );
}
