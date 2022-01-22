import VerifyOrg from "../src/components/verificationForms/VerifyOrg";
import Navbar from '../src/components/navbar/Navbar'

export default function OrgProfile() {
    return (
        <>
        <Navbar link1="/" link2="/" link3="/" link4="/" action1="Home" action2="" buttonText1="" buttonText2=""/>
        <VerifyOrg />
        </>
    )
}
