import React, { useState } from 'react';
import Signpop from './signpo';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { signOut } from "next-auth/react"

export default function Navbar(props) {
  const [detailPopup, setDetailPopup] = useState(false);
  const link1 = props.href1;
  const link2 = props.href2;
  const link3 = props.href3;
  const link4 = props.href4;
  const link5 = props.href5;

  const handleLogout=()=>{
    signOut()
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"> LOGO HERE</Link>
        </div>
        <ul>
          <li>
            <Link href={`${link1}`}>
              <a>{props.action1}</a>
            </Link>
          </li>
          <li>
            <Link href={`${link2}`}>{props.action2}</Link>
          </li>
          <Link href={`${link3}`}>
            {props.buttonText1.length > 0 ? (
              <a
                onClick={(e) => setDetailPopup(true)}
                className={styles.button}
              >
                {' '}
                {props.buttonText1}{' '}
              </a>
            ) : (
              ''
            )}
          </Link>
          <Link href={`${link5}`}>
            {props.buttonText3.length > 0 ? (
              <a className={styles.button}> {props.buttonText3} </a>
            ) : (
              ''
            )}
          </Link>
         

          <Link href={`${link4}`} onclick={()=>handleLogout()} preventDefault="true">
            {props.buttonText2.length > 0 ? (
              <a className={styles.button}> {props.buttonText2} </a>
              ) : (
                ''
                )}
          </Link>
         
        </ul>
     
      </nav>
      <Signpop trigger={detailPopup} setTrigger={setDetailPopup} />
    </>
  );
}
