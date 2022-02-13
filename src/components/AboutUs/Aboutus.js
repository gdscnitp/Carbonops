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
                    <h1 className={styles.color} >
                    
                        <u>
                        OUR MISSION</u></h1>
                       
                    <ul >
                    <div className={styles.gap1}>
                    
<span className={styles.color} ><b>
&#9733; How  can everyone contribute in conserving our environment without wasting time and money??</b></span></div>
<li className={styles.gap1}type="square"> No need to worry our app will do it for you &nbsp; <b>&#8658;</b></li>
<li className={styles.gap1}>
Ambition for creating this app is to make people aware about our precious environment and the ways to reduce <b>CARBON FOOTPRINT </b>.</li>
<li className={styles.gap2}>
Let users know about the various eco-friendly alternatives and easy access to those alternatives.</li>
<li className={styles.gap2}>
Easier for startups to access the materials required  and will help them scale up their business at a faster rate.</li>
<li className={styles.gap2}>
Informing people about incentives taken by different companies and this will advertise environmentally sustainable products.</li>
<li className={styles.gap2}>
Will introduce a sense of support and appreciation to those working to reduce the impact of human usage on the environment.</li>
</ul>
                 </div>
                </div>
              </div>
            <div className={styles.grid2}>
                <div className={styles.block1}>
                    <h1>Who We Are?</h1>
                </div>
                <div className={styles.block2}>
                    <div className={styles.item}>
                        <p>We all are the team members of <b>Google Developer Student Club</b> at <b> NIT PATNA</b>.
To see the current scenario of our eco-system we collectively thought to build a user friendly app which can help people to contribute in protecting our environment.
All of our team members are following our academics also making awesome real life problem solving projects.
</p>
                        <button className={styles.buttn} type="submit">Contact Us</button>
                     </div>
                </div>
            </div>
            <div className={styles.grid3}>
                <h1  className={styles.color}>MEET OUR TEAM</h1>
                <div className={styles.row1}>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Palak Kumari(Team leader)</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350}className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Shivam Tyagi</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Kishan Kumar</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                            <h3  className={styles.color}>Srijan Shovit</h3>
                            < FaLinkedin className={styles.icon} />

                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Amisha Bharti</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Vivek Srivastava</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Priya Kumari</h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Vivek Ankit </h3>
                        < FaLinkedin className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image width={350} className={styles.img1} alt="" src={pic} />
                        <div className={styles.about}>
                        <h3  className={styles.color}>Mohit </h3>
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