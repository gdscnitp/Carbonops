import Navbar from "../src/components/navbar/Navbar";
import OrganisationProfile from '../src/components/organisationProfile/orgprofile';
import {navLinks} from '../src/components/utils/data';
import { useEffect } from "react";

const organisationprofile = () => {
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
            <OrganisationProfile/>
        </>
    )
}

export default organisationprofile

