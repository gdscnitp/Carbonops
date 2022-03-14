import VerifyOrg from "../../src/components/verificationForms/VerifyOrg";
import Navbar from '../../src/components/navbar/Navbar'
import {navLinks} from '../../src/components/utils/data'
export default function OrgProfile({idOfOrg}) {
  console.log(idOfOrg);
    return (
        <>
       <Navbar 
        action2="" 
        action1={navLinks[3].name}
        href1={navLinks[3].link}
        buttonText2=""
        href4=""
        buttonText1=""
        buttonText3=""
        buttonText4=""/>

        <VerifyOrg id={idOfOrg}/>
        </>
    )
}

export function getServerSideProps(context){
    var {proforgform} = context.params;
    var id = proforgform
    console.log(id);
    return {
        props:{
          idOfOrg : id
        }
      }
}
