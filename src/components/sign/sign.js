import styles from "./Signup.module.css";
import React from "react";
import Link from 'next/link';

export default function Sign(props) {
  return (
    <div className={styles.container}>
      <signup className={styles.signu}>
        <section className={styles.section}>
          <div className={styles.left}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics}></pic>
              </div>
              <div className={styles.inputBx}>
                <p>
                  Already {props.text1}?<Link href="/"><a>Login Now!</a></Link>
                </p>
              </div>
            </div>
          </div>
          <forms className={styles.formss}>
            <div className={styles.contentBx}>
              <div className={styles.formBx}>
                <h2>SIGNUP</h2>
                <div className={styles.bx}>
                  <p>
                    Join us in our<Link href="/"><a>Green Journey!</a></Link>
                  </p>
                </div>
                <form>
                  <div className={styles.inputBx}>
                    <input
                      className={styles.email}
                      type="email"
                      name=""
                      placeholder="Email"
                    />
                  </div>
                  <div className={styles.inputBxx}>
                    <input type="number" name="" placeholder="Contact" />
                  </div>
                  <div className={styles.inputBx}>
                    <input
                      type={props.text3}
                      name=""
                      placeholder={props.text2}
                    />
                  </div>
                  <div className={styles.inputBx}>
                    <input type="password" name="" placeholder="Password" />
                  </div>
                  <div className={styles.inputBx}>
                    <input
                      type="password"
                      name=""
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className={styles.remember}>
                    <label>
                      <input type="checkbox" name="" /> Remember me
                    </label>
                  </div>
                  <div className={styles.inputBx}>
                    <input type="submit" value="SignUp" name="" />
                  </div>
                </form>
              </div>
            </div>
          </forms>
        </section>
      </signup>
    </div>
  );
}
