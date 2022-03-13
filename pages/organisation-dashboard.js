import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import OrganisationDashBoard from "../src/components/organisation/Content";
import styles from "../styles/Home.module.css";
import { navLinks } from "../src/components/utils/data";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

const organisationDash = (props) => {
  console.log(props);
   async function updateDetailsHandler(updateDetails){
    const response =await fetch(`/api/organisation-dashboard/${updateDetails.mailOrganisation}`,{
      method:'PATCH',
      body:JSON.stringify(updateDetails),
      headers:{
          'Content-Type' :'application/json'
      }    
    })
  }

   async function addProductHandler(productDetails){
    const response =await fetch('/api/products',{
      method:'POST',
      body:JSON.stringify(productDetails),
      headers:{
          'Content-Type' :'application/json'
      }    
    })
  }
  const orgObj = props.Org;
 
  const { data: session, status } = useSession();
  console.log(session)

  const router = useRouter();
  // if (session === "individual") {
    // router.push("/individual-dashboard")
  // }
  if (status === "loading") {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }
   else if (status === "unauthenticated") {
    router.push("/login");
  } 
  else if (session && status === "authenticated") {
    return (
        <>
        <Navbar 
        action2={navLinks[0].name} 
        href2="/"
        action1={navLinks[1].name}
        href1="/events"
        buttonText3={navLinks[2].name}
        href5="/create-events"
        buttonText2=""
        buttonText1=""
        buttonText4="SignOut"
        />
        <main className={styles.main}>
          <OrganisationDashBoard {...orgObj} onAddProduct={addProductHandler} />
          
        </main>
      </>
    );
  }
};

export default organisationDash;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  if (session.user.isOrganisation === false) {
    return {
      redirect: {
        permanent: false,
        destination: "/individual-dashboard",
      },
      props: {},
    };
  }
 
  console.log(session, "sessionss");
  var orgMail = session.user.email;
  // console.log(orgMail,"org Mail")

  const response = await fetch(
    `http://localhost:3000/api/organisation-dashboard/${orgMail}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  // console.log(data,"data here")

  return {
    props: {
      Org: data,
    },
  };
}
