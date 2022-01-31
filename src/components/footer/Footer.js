import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.footerLogo}`}>
       <Link href="/">LOGO HERE</Link>
        </div>
        <div className={`${styles.footerAbout}`}>
          <Link href="./aboutus"> ABOUT US </Link>
        </div>
        <div className={`${styles.footerContact}`}>
          <Link href="/"> CONTACT US</Link>
        </div>
        <div className={`${styles.TandC}`}>Terms & Conditions</div>
        <div className={`${styles.copyRights}`}>Copyrights &copy; Env_App</div>
        <div className={`${styles.socialMedia}`}>
          {["Google", "Facebook", "Twitter"].map((images) => {
            return (
              <div key={images} className={styles.socialIcons}>
                <Image
                  src={`/images/homePage/${images}.png`}
                  alt="Social icons"
                  height={40}
                  width={40}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
