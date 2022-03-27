import CarbonCalculator from '../src/components/carbon-footprint-calculator/carbonFootprint';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';
import { getSession, useSession } from "next-auth/react";

export default function carbonCalculator(props) {

  return (
    <>
  <Navbar
        action1=""
        action2={navLinks[0].name}
        href2={navLinks[0].link}
        buttonText2=""
        buttonText1=""
        buttonText3=""
        buttonText4=""
      />

      <CarbonCalculator indivMail={props.indivMail} />
    </>
  )
}

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

  const indivMail = session.user.email;
  return {
    props: {
      indivMail:indivMail,
    },
  };

}

