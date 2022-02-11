import Navbar from "../../src/components/navbar/Navbar";
import OrganisationProfile from '../../src/components/organisationProfile/orgprofile';
import {navLinks} from '../../src/components/utils/data';
import { useEffect } from "react";

export default function organisationProfile({org}){
    console.log(org) 
    return (
        <>
           {/* <Navbar action1="" action2="Home" buttonText1="DashBoard" buttonText2="Create Events"/> */}
           <Navbar  
            action1=""
            action2={navLinks[3].name}
            href2={navLinks[3].link}
            buttonText3={navLinks[0].name}
            href5={navLinks[0].link} 
            buttonText2={navLinks[2].name}
            href4={navLinks[2].link} 
            buttonText1=""
            buttonText4=""/>
            <OrganisationProfile org={org}/>
        </>
    )
}



export async function getServerSideProps(context) {
  
    const organProfile=context.params.organProfile;
    const response = await fetch(`http://localhost:3000/api/organisation-profile/${organProfile}`, {
      method: 'GET',
    });
  
    const data = await response.json();
  
    return {
      props: {
        org: data.data,
      },
    };
  }