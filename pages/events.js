import EventsPage from '../src/components/events/EventsPage';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';
import { getSession, useSession } from "next-auth/react";

export default function Events(props) {
// console.log(props.individualData,"props.individualData")

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

      <EventsPage event={props.events} indivData={props.individualData} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
 
  // console.log(session, "sessionss");
  var indivMail = session.user.email;

  // console.log(indivMail,"indivData")
  const indResponse = await fetch(`http://localhost:3000/api/indivdata/${indivMail}`,
    {
      method: "GET",
    }
  );
  const indDataFetched = await indResponse.json();
    //  console.log(indDataFetched,"indResponse")

//  FETCHING EVENTS 
  const response = await fetch('http://localhost:3000/api/getevents', {
    method: 'GET',
  });

  const data = await response.json();

  return {
    props: {
      events: data.data,
      individualData : indDataFetched,
    },
  };

}

