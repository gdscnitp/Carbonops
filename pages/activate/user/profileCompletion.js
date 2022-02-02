import React from "react";
import Link from "next/link";
import styles from "./profileCompletion.module.css";
import { TiTick } from "react-icons/ti";

export default function ProfileCompletion({ id, profHref }) {
  return (
    <>
      <div className={styles.profilePage}>
        <div className={styles.container}>
          <div className={styles.tick}>
            <TiTick style={{ fontSize: "55px" }} />
          </div>
          <div className={styles.text}>
            {id} Your account is <strong>Verified!</strong> . Please complete
            profile here{" "}
          </div>
          <Link href={`../../${profHref}/${id}`}>
            <a className={styles.button}>Profile Comp </a>
          </Link>
        </div>
      </div>
    </>
  );
}
