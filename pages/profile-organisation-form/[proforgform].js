import VerifyOrg from "../../src/components/verificationForms/VerifyOrg";
import Navbar from '../../src/components/navbar/Navbar'

export default function OrgProfile({idOfOrg}) {
    return (
        <>
        <Navbar action1="Home" action2="" buttonText1="" buttonText2=""/>
        <VerifyOrg props={idOfOrg}/>
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
