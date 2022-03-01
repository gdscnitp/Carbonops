import EventsPage from '../src/components/events/EventsPage';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';
import { getSession, useSession } from "next-auth/react";

export default function Events(props) {
  console.log(props.regEventsData,".registeredEventDetails")
  const registeredEventDetails = {
    nameOfTheEvent:props.regEventsData.data.eventName,
    eventDate:props.regEventsData.data.eventDetails[0].date,
    eventTime:props.regEventsData.data.eventDetails[0].time,
  }


  return (
    <>
      <Navbar
        action1=""
        action2={navLinks[0].name}
        href2={navLinks[0].link}
        buttonText2={navLinks[2].name}
        href4={navLinks[2].link}
        buttonText1=""
        buttonText3=""
        buttonText4=""
      />

      <EventsPage event={props.events} indivData={props.individualMail} registeredEventDetails={registeredEventDetails}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log(session, "sessionss");
 
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  
  var indivMail = session.user.email;

//  FETCHING EVENTS 
  const response = await fetch('http://localhost:3000/api/getevents', {
    method: 'GET',
  });
  const data = await response.json();

  // FETCHNG INDIVIDUAL DATA FOR REGISTERED EVENTS 
  const regEventsResponse = await fetch (`http://localhost:3000/api/registered-user-event/${indivMail}` ,
  {method:'GET'}
  );
  const regEventsData = await regEventsResponse.json();
  // console.log(regEventsData.data.eventName,"regEventsData eventzs");

  return {
    props: {
      events: data.data,
      individualMail : indivMail,
      regEventsData :regEventsData,
    },
  };

}

