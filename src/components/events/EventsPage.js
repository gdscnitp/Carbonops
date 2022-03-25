import React from 'react'
import EventSidebar from './EventSidebar'
import EventCard from './EventCard'
import styles from './EventsPage.module.css'
import EventsList from './EventsList'

export default function EventsPage({event,indivData,registeredEventDetails}) {
    // console.log(registeredEventDetails,"registeredEventDetails")

    return (
        <>
            <div className={styles.eventBody}>
            <div className={` ${styles.container}`}>
            <div className={`${styles.eventLeft}`}>
                <EventSidebar />
            </div>           
             
            <div className={styles.eventMid}>
            {event && event.map((events)=>{
                return(
                    <div key ={events._id}>
                   {/* { console.log(events._id) } */}

                    <EventCard events={events} IndividualDetails={indivData}/>
                </div>
                )
            })}

            </div>   
                  
            <div className={`${styles.eventRight}`} >
      
      {/* THIS PART TO BE SHOWN FOR ORGANISATIONS ONLY WHO WILL BE HOSTING EVENTS */}
                   <EventsList 
                    eventHead="Events you are hosting" 
                    eventDetail={registeredEventDetails}
                    />
                        
      
      {/* THIS PART TO BE SHOWN FOR ORGANISATIONS AS WELL AS INDIVIDUALS WHO WILL BE ATTENDING FOR THIER REGISTERED RSVP EVENTS */}
                        <EventsList 
                    eventHead="Events you are attending" 
                    eventDetail={registeredEventDetails}
                    />
                        
            </div>
            </div>
            </div>
        </>
    )
}

