import Navbar from "../src/components/navbar/Navbar";
import SignupIndividual from "../src/components/sign/signup-individual";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";

//redirect to a complete profile form.
// save the data in respective schema.
//ask to login.

export default function SignUpIn() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar link1="/" link2="/" link3="/" link4="/" action1="" action2="Home" buttonText1="" buttonText2=""/>
     <SignupIndividual />
    </div>
  );
}
