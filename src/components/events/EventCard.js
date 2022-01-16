import React, { useState } from "react";
import Image from "next/image";
import styles from "./EventsPage.module.css";
import Popup from "./Popup";

export default function EventCard() {
  const [detailPopup,setDetailPopup]=useState(false)
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.cardImage}>
            <Image
              src={`/images/events/event1.png`}
              alt="Event Image"
              height={100}
              width={160}
            />
          </div>

          <div className={styles.cardDetails}>
          <div className={styles.cardHeading}>Name of the event</div>
          <div className={styles.cardText}>Type of event</div>
          <div className={styles.cardTime}>1st Jan,2022  @ 4:00 pm</div>
          <div className={styles.cardbtn}>
          <div className={styles.rsvp}>
          RSVP NOW
          </div>
          <div className={styles.viewDetails}>
             <a onClick={(e)=>{
               setDetailPopup(true)
             }}>
             View Details
             </a> 

          </div>
          </div>
          
          </div>

        </div>
      </div>
        <Popup trigger={detailPopup} setTrigger={setDetailPopup}/>
    </>
  );
}
