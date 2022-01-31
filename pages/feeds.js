import Navbar from "../src/components/feeds/nav";
import Bottom from "../src/components/feeds/bottom";
import Card from "../src/components/feeds/cards";
import React from "react";
import Head from 'next/head'
import styles from '../styles/Signu.module.css'
import {navLinks} from '../src/components/utils/data'

export default function Feeds() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Environment Awareness App</title>
                <meta name="description" content="" />
            </Head>
            <Navbar />
            <br/>
            <div className={styles.search}>
            <div className={styles.inputBx}>
                  <input type="search" name="" placeholder="Search"/>
                  <input type="filter" value="Filter" name="" readOnly/>
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
            <Bottom />
        </div>
    )
}
