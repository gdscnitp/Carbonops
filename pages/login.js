import Login from '../src/components/LoginPage/loginPage';
import Navbar from '../src/components/navbar/Navbar';
import Head from 'next/head';
import { navLinks } from '../src/components/utils/data';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>
      <Navbar  
       action2=""
       action1={navLinks[3].name}
       href1={navLinks[3].link}
       buttonText1={navLinks[4].name}
       href3={navLinks[4].link} 
       buttonText2="" 
       buttonText3=""
       buttonText4=""/>
      {/* <Navbar action1="" action2="Home" buttonText1="SignUp" buttonText2="" /> */}
      <Login />
    </div>
  );
}
