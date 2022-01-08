import styles from "./Dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function Dashboard(props) {
  return (
    <>
      <Navbar action1="" action2="Create+" buttonText1="LOGOUT" buttonText2=""/>
      <div className={styles.container}>
        <div className={styles.profile_card_container}>
          <div className={styles.profile_image_container}>
            <Image
              className={styles.profile_image}
              src={`/images/dashboard/picture.png`}
              alt="Profile picture"
              height={10}
              width={10}
              layout="responsive"
            />
            <div className={styles.profile_description}>
              <p>
                NAME:<span>{props.name}</span>
              </p>
              <p>
                EMail:<span>{props.email}</span>
              </p>
            </div>
          </div>

          <div className={styles.profile_stats}>
            <div className={styles.profile_stat}>
              <p>Location</p>
              <p>{props.location}</p>
            </div>
            <div className={styles.profile_stat}>
              <p>Your Score</p>
              <p>{props.score}</p>
            </div>
            <div className={styles.profile_stat}>
              <p>Phone Number</p>
              <p>{props.phone}</p>
            </div>
            <div className={styles.profile_stat}>
              <p>Date of Last Report </p>
              <p>{props.date}</p>
            </div>
          </div>
        </div>

        {/* <----------------Statistics Portion.----------------> */}
        <div className={styles.statistics}>
          <div className={styles.topText}>
            <div className={styles.slideLeft}>
              Your <strong> CARBON FOOTPRINT </strong> <br />
            </div>

            <div className={styles.slideRight}>
              is <strong> ONE CLICK </strong> away
            </div>
          </div>
          <div>
            <Link href="/" passHref>
              <span className={styles.button}>Calculate now &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
