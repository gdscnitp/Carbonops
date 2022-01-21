import styles from "./Signpop.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

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
            <FaAngleLeft style={{ color: "#00bd57", fontSize: "35px" }} />
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
    </div>
  ) : (
    ""
  );
}
