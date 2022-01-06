import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"> LOGO HERE</Link>
        </div>
        <ul>
          <li>
            <Link href="/">{props.action1}</Link>
          </li>
          <li>
            <Link href="/">{props.action2}</Link>
          </li>
          <Link href="">
            {props.buttonText.length > 0 ? (
              <a className={styles.button}> {props.buttonText} </a>
            ) : (
              ""
            )}
          </Link>
        </ul>
      </nav>
    </>
  );
}
