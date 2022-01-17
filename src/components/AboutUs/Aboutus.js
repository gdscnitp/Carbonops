import Image from "next/image";
import EnvImg from "/public/environment.png"
import React from "react";
import styles from "./Aboutus.module.css"
import Link from "next/link";
import pic from "/public/images/_picture.png"
import { FaLinkedin } from "react-icons/fa"

function Aboutus(){
   return(
       <>
          <div className={styles.page}>
            {/* <nav className={styles.nav}>
                <div className={styles.navbar}>
                <Link href="/" passHref>
                <span className={styles.navbar}>Logo</span>
                </Link>
                <Link href="/" passHref>
                <span className={styles.home}>HOME</span>
                </Link>
                    
                </div>
                <div className={styles.signup}>
                    <button className={styles.btn} type="submit">SignUp</button>
                </div>
            </nav> */}
            <div className={styles.container}>
              <div className={styles.grid1}>
                <div className={styles.content1}>
                <Image className={styles.image} alt="" src={EnvImg} />
                </div>
                <div className={styles.content2}>
                   <div className={styles.text}>
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                 </div>
                </div>
              </div>
            <div className={styles.grid2}>
                <div className={styles.block1}>
                    <h1>Who We Are?</h1>
                </div>
                <div className={styles.block2}>
                    <div className={styles.item}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        <button className={styles.buttn} type="submit">Contact Us</button>
                     </div>
                </div>
            </div>
            <div className={styles.grid3}>
                <h1>Meet Our Team</h1>
                <div className={styles.row1}>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350}className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                            <h3>NAME</h3>
                            < FaLinkedin className={styles.icon} />

                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME </h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3>NAME </h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>

       </>
   )
}
 
export default Aboutus;