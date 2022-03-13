import VerifyOrg from '../src/components/verificationForms/VerifyOrg';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';

export default function OrgProfile() {
  return (
    <>
      <Navbar
        action2=""
        action1={navLinks[3].name}
        href1={navLinks[3].link}
        buttonText1=""
        buttonText2=""
        buttonText3=""
        buttonText4=""
      />
      {/* <Navbar action1="Home" action2="" buttonText1="" buttonText2=""/> */}
      <VerifyOrg />
    </>
  );
}
