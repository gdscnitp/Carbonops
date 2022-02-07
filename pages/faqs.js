// import styles from '../styles/Home.module.css'

import Block from '../src/components/FAQS/Block';
import Button from '../src/components/FAQS/Button';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';

export default function Home() {
  return (
    <div>
      <Navbar
        action1={navLinks[3].name}
        href1={navLinks[3].link}
        action2=""
        buttonText1={navLinks[4].name}
        href3={navLinks[4].link}
        buttonText2=""
        buttonText3=""
        buttonText4=""
      />
      {/* <Navbar action1="" action2="Login" buttonText1="SignUp" buttonText2="" /> */}

      {/* <div className="head">
        <h5>LOGO ENV_APP</h5>
        <Button name="Login" />
        <Button name="Sign Up" />
      </div> */}
      <div className="main">
        <Block text="HOW CAN WE HELP YOU?" class="main__question" />
        <Block class="main__options" />
        <Block class="main__options" />
        <Block class="main__options" />
        <Block class="main__options" />
        <Block class="main__options" />
        {/* <Block class="main__options" />
          <Block class="main__options" /> */}
      </div>
    </div>
  );
}
