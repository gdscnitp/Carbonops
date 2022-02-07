import Navbar from "../src/components/navbar/Navbar";
import Productpage from "../src/components/ProductPage/productpage";
import {navLinks} from '../src/components/utils/data';
import { useEffect } from "react";

const product = () => {
    return (
        <>
             {/*<Navbar action1="" action2="" buttonText1="DashBoard" buttonText2=""/>*/} 
             <Navbar  
            action1=""
            action2={navLinks[3].name}
            href2={navLinks[3].link}
            buttonText3={navLinks[0].name}
            href5={navLinks[0].link} 
            buttonText2=""
            buttonText1=""
            buttonText4=""/>
             <Productpage/>
        </>
    )
}

export default product
