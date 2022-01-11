import styles from "./Signpop.module.css";
import React from "react";

export default function Signpo() {
  return (
    <div className={styles.container}>
      <signup className={styles.signu}>
        <section className={styles.section}>
          <div className={styles.left}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics1}></pic>
                <div className={styles.txt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the
                </div>
              </div>
              <div className={styles.inputBx}>
                <input type="submit" value="Individual" name="" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics2}></pic>
                <div className={styles.txt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the
                </div>
              </div>
              <div className={styles.inputBx}>
                <input type="submit" value="Organisation" name="" />
              </div>
            </div>
          </div>
        </section>
      </signup>
    </div>
  );
}
