import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import OrganisationDashBoard from '../src/components/organisation/Content';
import styles from '../styles/Home.module.css';
import {navLinks} from '../src/components/utils/data';
// import { useRouter } from 'next/router';
import {getSession, useSession} from 'next-auth/react';


const organisationDash = (props) => {
  const orgObj = props.Org

     // const { data: session, status } = useSession()
     // console.log(session,"useSession")
 
    //  if (status === "loading") {
    //   return <h1>Loading...</h1>
    // }
  
    //  if(session){
        return (
            <>
        <Navbar 
        action1={navLinks[0].name} 
        href1="/"
        action2={navLinks[1].name}
        href2="/events"
        buttonText3={navLinks[2].name}
        href5="/create-events"
        buttonText2={navLinks[6].name}
        href4={navLinks[6].link}
        buttonText1=""
        />
  {/* { console.log(session, "sessions")} */}
        <main className={styles.main}>
        {/* <OrganisationDashBoard Orgs={session}/> */}
        <OrganisationDashBoard />
       </main> 
      </>
    );
  // }
};

export default organisationDash;



export async function getServerSideProps(context) {

    const {session} = await getSession(context)
    console.log(session, "sessionss")
    // var orgMail = session.user.email

    // const {params} = context;
    // console.log(params , "paramss")

    var myMail = "srivastavavivek012@gmail.com";
  const response = await fetch(`http://localhost:3000/api/organisation-dashboard/${myMail}`,{
        method:'GET',
    });
    const data = await response.json();
    // console.log(data)

    return{
    // props: { session:session },
    // props:{
    //   session: await getSession(context),
    // }
      props: {
        Org: data,
      },
  };
}

 