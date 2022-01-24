import VerifyIn from "../../src/components/verificationForms/VerifyIn";
import Navbar from '../../src/components/navbar/Navbar'

export default function IndProfile({idOfInd}) {
  console.log(idOfInd);
    return (
        <>
        <Navbar action1="Home" action2="" buttonText1="" buttonText2=""/>
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