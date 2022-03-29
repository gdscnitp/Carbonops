import Navbar from "../../src/components/navbar/Navbar";
import OrganisationProfile from '../../src/components/organisationProfile/orgprofile';
import {navLinks} from '../../src/components/utils/data';
import { useEffect } from "react";
import ProSc from "../../models/Product";    

export default function organisationProfile({org,pro}){
  
    //console.log(org) 
    return (
        <>
           {/* <Navbar action1="" action2="Home" buttonText1="DashBoard" buttonText2="Create Events"/> */}
           <Navbar  
            action2={navLinks[0].name}
            action1=""
            href1=""
            // buttonText3={navLinks[0].name}
            // href5={navLinks[0].link} 
            buttonText2={navLinks[2].name}
            href4={navLinks[2].link} 
            buttonText1=""
            buttonText4=""/>
            <OrganisationProfile org={org} pro={pro}/>
        </>
    )
}



export async function getServerSideProps(context) {
  
    const organProfile=context.params.organProfile;
    const response1 = await fetch(`http://localhost:3000/api/organisation-profile/${organProfile}`, {
      method: 'GET',
    });
    const products= await ProSc.find({"organisationId":{$eq:organProfile}});
    const data1 = await response1.json();
    if(products.length!=0){
      const response2 = await fetch(`http://localhost:3000/api/getproduct/${organProfile}`, {
      method: 'GET',
    });
    const data2 = await response2.json();
    return {
      props: {
        org: data1.data,
        
        pro: data2.data,
      },
    };
    }
   
      return {
        props: {
          org: data1.data,
        },
      };
    
    
    
    
   
  }