import styles from './Card.module.css';
import React from 'react';
import Image from 'next/image';
import StarRating from './starrating';
import Link from 'next/link';

export default function Card({ organs }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.frame1}>
            <div
              style={{ position: 'relative', width: '30px', height: '40px' }}
            >
              <Image alt="abc" src="/abc.jng" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.head}>
              <div className={styles.h4}>{organs.organisationName}</div>
              <div className={styles.h6}>{organs.location[4]}</div>
            </div>
          </div>
          <div className={styles.frame2}>
            <StarRating />
            <div className={styles.text}>
              {/* {organs. description} */}
              Towering performance by Matt Damon as a troubled working class who
              needs to address his creative genius elevates this drama way above
              its therapeutic approach, resulting in a zeitgeist film that may
              touch chord with young viewers the way The Graduate did.
            </div>
            <br />
            <div className={styles.end}>
              <div className={styles.leftend}>Nguyen Shane</div>
              <div className={styles.rightend}>Oct 13, 2017</div>
            </div>
            <Link href={`${organs.organisationName}\${organs._id}`}>
                <a className={styles.button}>View More</a>
              </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
