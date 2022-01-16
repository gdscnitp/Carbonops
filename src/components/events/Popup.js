import React from 'react'
import styles from './Popup.module.css'


export default function Popup(props) {
    return ( props.trigger )?
        <>
        <div className={styles.popupPage}>
        <div className={styles.popup}>
        <div className={styles.close}>
         <a onClick={()=>{props.setTrigger(false)}}>x</a>
        </div>
   
        <div className={styles.popupHead}>
        Name of the Event
        </div>
        <div className={styles.description}>
            <ol>
                <li>Type of event : Onine</li>
                <li>Date of event : 1st January</li>
                <li>Time of event : 13:00</li>
                <li>Event Location: N/A</li>
                <li>Contact organisers : 9191919191</li>
                <li>Audience Limit : 80</li>
                <li>About this event : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, at consectetur adipisicing elit. Tenetur, at quae. Doloribus quo rerum animi quam optio itaque so</li>
            </ol> 
        </div> <br />
        <div className={styles.button}>
        <a>RSVP NOW</a>
        </div>
        </div>
        </div>
            
        </>
        : "";
}
