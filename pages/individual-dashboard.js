import { useSession } from "next-auth/react"
import Dashboard from "../src/components/dashboard/Dashboard";
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'


export default function dashboard(props) {
  const userObj = props.userData
  
  return (
    <>
    <Navbar  
       action1="" 
       action2=""
       buttonText1=""
       buttonText3=""
       buttonText2={navLinks[6].name}
       href4={navLinks[6].link} />
    {/* <Navbar action1="" action2="" buttonText1="" buttonText2="LOGOUT" /> */}
      <Dashboard {...userObj} />
    </>
  );
}

export async function getServerSideProps(context){
  var userMail = "srijans.ug20.ece@nitp.ac.in";
  const response = await  fetch(`http://localhost:3000/api/indivdata/${userMail}`,{
      method: 'GET'
    })
    console.log(response);
      const data = await  response.json();
      console.log(data);
      // console.log(data)
      // if(!response.ok)
      // return{
      //   notFound: true,
      // }
    
  return {
      props:{
        userData:data
      }
    }
}