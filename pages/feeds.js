import Navbar from "../src/components/feeds/nav";
import Card from "../src/components/feeds/card";
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
      <Navbar />
      <br />
      <div className={styles.search}>
        <div className={styles.inputBx}>
          <input type="search" name="" placeholder="Search" />
          <input type="filter" value="Filter" name="" />
        </div>
      </div>
      <div className={styles.feedcards}>
        <div className={styles.rowsss}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.rowsss}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
