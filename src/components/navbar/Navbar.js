import React, { useState } from "react";
import Signpop from "./signpo";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  const [detailPopup, setDetailPopup] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"> LOGO HERE</Link>
        </div>
        <ul>
          <li>
            <Link href={props.link1}>{props.action1}</Link>
          </li>
          <li>
            <Link href={props.link2}>{props.action2}</Link>
          </li>
          <Link href={props.link3}>
            {props.buttonText1.length > 0 ? (
              <a
                onClick={(e) => setDetailPopup(true)}
                className={styles.button}
              >
                {" "}
                {props.buttonText1}{" "}
              </a>
            ) : (
              ""
            )}
          </Link>
          <Link href={props.link4}>
            {props.buttonText2.length > 0 ? (
              <a className={styles.button}> {props.buttonText2} </a>
            ) : (
              ""
            )}
          </Link>
        </ul>
      </nav>
      <Signpop trigger={detailPopup} setTrigger={setDetailPopup} />
    </>
  );
}
