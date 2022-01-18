import styles from './Dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '/public/images/dashboard/edit.png';
import Navbar from '../navbar/Navbar';
import React, { useState } from 'react';
import Formpop from './EditForm';
import { MdEdit } from 'react-icons/md';

export default function Dashboard(props) {
  const [detailPopup, setDetailPopup] = useState(false);
  return (
    <>
      <Navbar action1="" action2="" buttonText1="LOGOUT" buttonText2="" />
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
            <div className={styles.editButton}>
              <a onClick={(e) => setDetailPopup(true)}>
                <MdEdit className={styles.button} />
              </a>
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
            Your <strong> CARBON FOOTPRINT </strong> <br />
          </div>
          <div>
            <Link href="/" passHref>
              <span className={styles.button}>Calculate now &rarr;</span>
            </Link>
          </div>
          <div>
            <div className={styles.box}>
              <a className={styles.options}>Create+</a>
              <a className={styles.options}>Events</a>
              <a className={styles.options}>Feeds</a>
            </div>
          </div>

          <div className={styles.stats_data}>
            <Image
              className={styles.stats_image1}
              src={`/images/dashboard/Stats1.png`}
              alt="Stats1"
              height={100}
              width={140}
            />
            <Image
              className={styles.stats_image2}
              src={`/images/dashboard/Stats2.png`}
              alt="Stats1"
              height={100}
              width={140}
            />
            <Image
              className={styles.stats_image3}
              src={`/images/dashboard/Stats1.png`}
              alt="Stats1"
              height={100}
              width={140}
            />
          </div>
          <div className={styles.stats_graph}>
            <Image
              className={styles.stats_image1}
              src={`/images/dashboard/Chart.png`}
              alt="Stats1"
              height={350}
              width={900}
            />
          </div>
        </div>
      </div>
      <Formpop trigger={detailPopup} setTrigger={setDetailPopup} />
    </>
  );
}
