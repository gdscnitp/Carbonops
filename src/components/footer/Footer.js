import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import Carbonops from "/public/images/homePage/Carbonops.png";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.footerLogo}`}>
       <Link href="/">
       <Image
       src={Carbonops}
                  alt="Social icons"
                  height={60}
                  width={280}
      />
       </Link>
        </div>
        <div className={`${styles.footerAbout}`}>
          <Link href="./aboutus"> ABOUT US </Link>
        </div>
        <div className={`${styles.footerContact}`}>
          <Link href="/Feedback"> CONTACT US</Link>
        </div>
        <div className={`${styles.TandC}`}>Terms & Conditions</div>
        <div className={`${styles.copyRights}`}>Copyrights &copy; Env_App</div>
        <div className={`${styles.socialMedia}`}>
 
              <div className={styles.socialIcons}>
                <Image
                  src={`/images/homePage/Google.png`}
                  alt="Social icons"
                  height={40}
                  width={40}
                />
              </div>
              <div  className={styles.socialIcons}>
                <Image
                  src={`/images/homePage/Facebook.png`}
                  alt="Social icons"
                  height={40}
                  width={40}
                />
              </div>
              <div className={styles.socialIcons}>
                <Image
                  src={`/images/homePage/Twitter.png`}
                  alt="Social icons"
                  height={40}
                  width={40}
                />
              </div>
        </div>
      </div>
    </>
  );
}
