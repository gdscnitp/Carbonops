import Navbar from "../src/components/navbar/Navbar";
import SignupOrganisation from "../src/components/sign/signup-organisation";
import React from "react";
import Head from "next/head";
import styles from "../styles/Signu.module.css";
import {navLinks} from '../src/components/utils/data'

export default function SignUpOrg() {
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
       buttonText2="" 
       buttonText3=""
       buttonText4=""/>
      {/* <Navbar action1="" action2="Home" buttonText1="" buttonText2="" /> */}
      <SignupOrganisation />
    </div>
  );
}
