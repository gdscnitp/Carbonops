// import styles from '../styles/Home.module.css'

import Block from "../src/components/FAQS/Block";
import Button from "../src/components/FAQS/Button";

export default function Home() {
  return (
    <div>
      <div className="head">
        <h5>lOGO ENV_APP</h5>
        <Button name="Login" />
        <Button name="Sign Up" />
      </div>
      <div className="main">
        <Block text="HOW CAN WE HELP YOU?" class="main__question" />
        <Block text="Question 1" class="main__options" />
        <Block text="Question 2" class="main__options" />
        <Block text="Question 3" class="main__options" />
        <Block text="Question 4" class="main__options" />
        <Block text="Question 5" class="main__options" />
      </div>
    </div>
  )}