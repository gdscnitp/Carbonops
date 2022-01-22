import Navbar from "../src/components/navbar/Navbar";
import SignupOrganisation from "../src/components/sign/signup-organisation";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";

export default function SignUpOrg() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar link1="/" link2="/" link3="/" link4="/" action1="" action2="Home" buttonText1="" buttonText2="" />
      <SignupOrganisation />
    </div>
  );
}
