import Signpo from "../src/components/sign/signpo";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";

export default function SignPop() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <div className={styles.header}>SIGNUP AS</div>
      <Signpo></Signpo>
    </div>
  );
}
