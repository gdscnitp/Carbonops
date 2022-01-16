import Aboutus from '../src/components/AboutUs/Aboutus'
import Navbar from "../src/components/navbar/Navbar";
import Head from "next/head";

export default function AboutUs() {
    return (
      <div >
        <Head>
          <title>Environment Awareness App</title>
          <meta name="description" content="" />
        </Head>
  
        <Navbar action1="" action2="Home" buttonText1="SignUp" buttonText2="" />
        <Aboutus  />
      </div>
    );
  }