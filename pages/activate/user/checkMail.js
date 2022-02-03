import React from "react";
import styles from "./profileCompletion.module.css";
import { TiTick } from "react-icons/ti";

export default function checkMail({ id, profHref }) {
  return (
    <>
      <div className={styles.profilePage}>
        <div className={styles.container}>
          <div className={styles.tick}>
            <TiTick style={{ fontSize: "55px" }} />
          </div>
          <div className={styles.text}>
            {id} Please check your Email. Click on <strong>Link </strong> provided to confirm signup.
          </div>
          
        </div>
      </div>
    </>
  );
}
