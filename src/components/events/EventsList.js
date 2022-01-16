import React from "react";
import styles from "./EventsPage.module.css";

export default function EventsList(props) {
  return (
    <>
      <div className={styles.eventList}>
        <div className={styles.eventHead}>{props.eventHead}</div>
        {props.eventDetail.map((eventList) => {
          return (
              <div key={eventList} className={styles.eachEvent}>
                <div className={styles.eachEventTitle}>
                  {eventList[0]}
                </div>
                <div className={styles.eachEventTime}>
                  {eventList[1]}
                </div>
              </div>
          );
        })}

      </div>
    </>
  );
}
