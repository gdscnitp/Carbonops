import React from 'react'
import styles from './EventSidebar.module.css'

export default function EventSidebar() {
    return (
        <>
            <div className={styles.sidebar}>
            <p className={styles.filters}>Choose an event type</p>
                <ul className={styles.ul}>
                      <input type="checkbox" id="Offline" name="sidebar"/>
                      <label htmlFor="Offline"> Offline</label> <br/>

                         <input type="checkbox" id="Online" name="sidebar"/>
                      <label htmlFor="Online"> Online</label> <br/>

                         <input type="checkbox" id="Environment" name="sidebar"/>
                      <label htmlFor="Environment"> Environment Tasks</label> <br/>

                         <input type="checkbox" id="Carbon" name="sidebar"/>
                      <label htmlFor="Carbon"> Carbon Score</label> <br/>                   
                </ul>
            </div>
        </>
    )
}

