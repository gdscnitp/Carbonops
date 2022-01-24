import Navbar from "../src/components/navbar/Navbar";
import SignupIndividual from "../src/components/sign/signup-individual";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";
import {navLinks} from '../src/components/utils/data'
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
      <Navbar  
       action1=""
       action2={navLinks[3].name}
       href2={navLinks[3].link}
       buttonText1="" 
       buttonText2="" />
      {/* <Navbar action1="" action2="Home" buttonText1="" buttonText2=""/> */}
     <SignupIndividual />
    </div>
  );
}
