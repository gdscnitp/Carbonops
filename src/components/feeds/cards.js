import styles from "./Card.module.css";
import React from "react";
import Image from "next/image";
import StarRating from "./starrating"


export default function Card() {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.frame1}>
        <div style={{ position: 'relative', width: '30px', height: '40px' }}>
        <Image alt="abc" src="/abc.jng" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.head}>
        <div className={styles.h4}>Good Will Hunting</div>
        <div className={styles.h6}>1997 · Plot / Love </div>
        </div>
        </div>
        <div className={styles.frame2}>
            <StarRating />
            <div className={styles.text}>
            Towering performance by Matt Damon as a troubled working class who needs to address his creative genius elevates this drama way above its therapeutic approach, resulting in a zeitgeist film that may touch chord with young viewers the way The Graduate did.
            </div>
            <br/>
            <div className={styles.end}>
            <div className={styles.leftend}>Nguyen Shane</div> 
            <div className={styles.rightend}>Oct 13, 2017</div>
            </div>
        </div>
        </div>
           
        </>
    );
}
