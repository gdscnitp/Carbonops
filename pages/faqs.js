// import styles from '../styles/Home.module.css'

import Block from "../src/components/FAQS/Block";
import Button from "../src/components/FAQS/Button";
import Navbar from "../src/components/navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar link1="/" link2="./login" link3="" link4="/" action1="" action2="Login" buttonText1="SignUp" buttonText2="" />

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

  )}