import styles from './Signpop.module.css';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

export default function Signpop(props) {
  const router = useRouter();
  return props.trigger ? (
    <div className={styles.popbody}>
      <div className={styles.container}>
        <div className={styles.LeftArrow}>
          <a
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            <FaAngleLeft style={{ color: '#00bd57', fontSize: '35px' }} />
          </a>
        </div>
        <div className={styles.header}>SIGNUP AS</div>
        <signup className={styles.signu}>
          <section className={styles.section}>
            <div className={styles.left}>
              <div className={styles.imgBx}>
                <div className={styles.img}>
                  <pic className={styles.pics1}></pic>
                  <div className={styles.txt}>
                    Individuals in our app are the users who want to calculate
                    their carbon score and who want to sell or donate waste to
                    eco friendly startups and organisations.
                  </div>
                </div>
                <div className={styles.inputBx}>
                  <Link href="./signupin">
                    <input type="submit" value="Individual" name="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgBx}>
                <div className={styles.img}>
                  <pic className={styles.pics2}></pic>
                  <div className={styles.txt}>
                    Organisations are startups that are contributing to the
                    environment through their eco friendly products.
                  </div>
                </div>
                <div className={styles.inputBx}>
                  <Link href="./signupor">
                    <input type="submit" value="Organisation" name="" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </signup>
      </div>
    </div>
  ) : (
    ''
  );
}
