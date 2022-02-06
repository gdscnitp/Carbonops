import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import OrganisationDashBoard from "../src/components/organisation/Content";
import styles from "../styles/Home.module.css";
import { navLinks } from "../src/components/utils/data";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

const organisationDash = (props) => {
  const orgObj = props.Org;

  const { data: session, status } = useSession();
  // console.log(session)

  const router = useRouter();
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
        <main className={styles.main}>
          <OrganisationDashBoard {...orgObj} />
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
