import React, { useState } from "react";
import Image from "next/image";
import styles from "./EventsPage.module.css";
import Popup from "./Popup";

export default function EventCard({events,IndividualDetails}) {
    // console.log(IndividualDetails.data._id,"IndividualDetails events Card")

    const rsvpData = {
      individualId:IndividualDetails.data._id,
      eventId:events._id,
      name:IndividualDetails.data.name,
      mailId:IndividualDetails.data.email,
      phoneNumber:IndividualDetails.data.contact,
    }

     async function handleRSVP (){
   const indivResponse = await fetch(
    `/api/rsvp-event/${rsvpData}`,
    {
      method: "POST",
      body: JSON.stringify(`/${rsvpData}`),
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
    const data =await indivResponse.json();
    console.log(indivResponse)
    console.log(data)
  if (!indivResponse.ok) {
    console.log("Error occured")
  }
  return data;
}

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
          <div className={styles.cardHeading}>{events.eventName}</div>
          <div className={styles.cardText}>{events.eventType}</div>
          <div className={styles.cardTime}>{events.eventDetails[0].date}</div>
          <div className={styles.cardbtn}>
          <div className={styles.rsvp} >
         <a onClick={handleRSVP}> RSVP NOW</a>
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
     
    
        <Popup events={events} trigger={detailPopup} setTrigger={setDetailPopup}/>
      
    </>
  );
}

