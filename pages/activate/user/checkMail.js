import React from "react";
import styles from "./profileCompletion.module.css";
import { TiTick } from "react-icons/ti";

export default function checkMail() {
  return (
    <>
      <div className={styles.profilePage}>
        <div className={styles.container}>
          <div className={styles.tick}>
            <TiTick style={{ fontSize: "55px" }} />
          </div>
          <div className={styles.text}>Congrats🎉 Step 1/2 ✅
          <br></br>
          Please check your Email.
          <br></br>
           Click on <strong>Activate</strong> to proceed with Step 2/2
          </div>
          
        </div>
      </div>
    </>
  );
}
