import { useSession,getSession } from "next-auth/react"
import Dashboard from "../src/components/dashboard/Dashboard";
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'
import { useRouter } from 'next/router';


export default function dashboard(props) {
  const userObj = props.userData
  const { data: session, status } = useSession()
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>
  }

  else if (status === "unauthenticated") {
    router.push('/login');
    
  }

  else if(session && status === "authenticated") {

    
    return (
      <>
    <Navbar  
       action1="" 
       action2=""
       buttonText1=""
       buttonText3=""
       buttonText2=""
       buttonText4="SignOut"
        />
    {/* <Navbar action1="" action2="" buttonText1="" buttonText2="LOGOUT" /> */}
      <Dashboard {...userObj} />
    </>
  );
}
}

export async function getServerSideProps(context){
  // console.log("==============================================");
  const session = await getSession(context)
  if (!session){
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    };
  }
  console.log(session)
  var userMail = session.user.email
  const response = await  fetch(`http://localhost:3000/api/indivdata/${userMail}`,{
    method: 'GET'
  })
  // console.log(response);
  const data = await  response.json();
  // console.log(data);
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