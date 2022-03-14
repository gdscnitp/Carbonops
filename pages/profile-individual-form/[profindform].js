import VerifyIn from "../../src/components/verificationForms/VerifyIn";
import Navbar from '../../src/components/navbar/Navbar'
import {navLinks} from '../../src/components/utils/data'


export default function IndProfile({idOfInd}) {
  console.log(idOfInd);
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
        buttonText4=""
        />

        <VerifyIn id={idOfInd} />
        </>
    )
}

export function getServerSideProps(context){
   
    const {profindform} = context.params;
    var id = profindform
    console.log(id);
    return {
        props:{
          idOfInd : id
        }
      }
}