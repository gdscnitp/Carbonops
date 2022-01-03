import styles from "./Dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard(props) {
  return (
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
      <div className={styles.statistics}>
        <h1>Your STATS
          <span>
          <Image  className={styles.print}
            src={`/images/dashboard/human-footprints.png`}
            alt=" picture"
            height={60}
            width={40}
           
          />
          </span>
        </h1>
      
        <Link href="/" passHref>
          <span className={styles.button}>Calculate now &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
