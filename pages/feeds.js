import Navbar from "../src/components/navbar/Navbar";
import Bottom from '../src/components/feeds/bottom';
import Card from '../src/components/feeds/cards';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Signu.module.css';
import { navLinks } from '../src/components/utils/data';

export default function Feeds({ organ }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Environment Awareness App</title>
          <meta name="description" content="" />
        </Head>
        <Navbar  
         action1={navLinks[0].name}
         href1={navLinks[0].link}
         action2={navLinks[1].name}
         href2={navLinks[1].link}
         buttonText2={navLinks[2].name}
         href4={navLinks[2].link} 
         buttonText1="" 
         buttonText3=""
         buttonText4=""/>
        {/* <Navbar /> */}
        <br />
        <div className={styles.search}>
          <div className={styles.inputBx}>
            <input type="search" name="" placeholder="Search" />
            <input type="filter" value="Filter" name="" readOnly />
          </div>
        </div>
        <div className={styles.feedcards}>
        <div className={styles.rowsss}>

            {organ &&
              organ.map((organs) => {
                return (
                  <div className={styles.card} key={organs._id}>
                    <Card  organs={organs}/>
                  </div>
                );
              })}
          </div>

          <Bottom />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/getorganisation`);
  const data = await response.json();
  return {
    props: {
      organ: data.data,
      // page:+page
    },
  };
}
