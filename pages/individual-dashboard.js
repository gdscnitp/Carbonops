import Dashboard from "../src/components/dashboard/Dashboard";
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'
const user_obj = {
  name: "Emanuael Lundy",
  email: "abcefg@gmail.com",
  location: "Roorkee",
  score: "8",
  phone: "123-3243-324",
  date: "2-3-42",
};

export default function dashboard(props) {
  return (
    <>
    <Navbar  
       action1="" 
       action2=""
       buttonText1=""
       buttonText2={navLinks[6].name}
       href4={navLinks[6].link} />
    {/* <Navbar action1="" action2="" buttonText1="" buttonText2="LOGOUT" /> */}
      <Dashboard {...user_obj} />
    </>
  );
}
