import Navbar from "../../../src/components/navbar/Navbar";
import Productpage from "../../../src/components/ProductPage/productpage";
import {navLinks} from '../../../src/components/utils/data';
import { useEffect } from "react";

export default function product({product,OrgId}){
 
    //console.log(product) 
    return (
        <>
             {/*<Navbar action1="" action2="" buttonText1="DashBoard" buttonText2=""/>*/} 
             <Navbar  
            action2={navLinks[0].name}
            
            action1={navLinks[3].name}
            href1={navLinks[3].link}
            buttonText3={navLinks[0].name}
            href5={`/organisation-profile/${OrgId}`}
            buttonText2=""
            buttonText1=""
            buttonText4=""/>
             
             <Productpage product={product}/>
        </>
    )
}

export async function getServerSideProps(context) {
  
    const orgId=context.params.orgId;
    const response = await fetch(`http://localhost:3000/api/getproduct/${orgId}`, {
      method: 'GET',
    });
  
    const data = await response.json();
  
    return {
      props: {
        product: data.data,
        OrgId:orgId,
      },
    };
  }

