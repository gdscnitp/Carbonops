import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import FeedBack from '../src/components/Feedbackpage/Feedback';
import { navLinks } from '../src/components/utils/data';

const Feedback = () => {
  return (
    <>
      <Navbar
        action2=""
        action1={navLinks[5].name}
        href1={navLinks[5].link}
        buttonText1={navLinks[4].name}
        href3={navLinks[4].link}
        buttonText2=""
        buttonText3=""
        buttonText4=""
      />
      {/* <Navbar action1="" action2="Login" buttonText1="SignUp" buttonText2="" /> */}

      <FeedBack />
    </>
  );
};

export default Feedback;
