import React from "react";
import styled from "styled-components";




function Feedback() {
  return (
    <Container>
      <FeedbackContainer>
        <FeedbackButton>Feedback</FeedbackButton>
      </FeedbackContainer>
      <MessageBox>
        <Text>
          Please tell us what do you think, any kind of feedback is highly
          appreciated.
        </Text>
        <Textarea placeholder="Your Feedback"></Textarea>
        <SendFeedbackContainer>
          <SendFeedbackButton>Send Feedback</SendFeedbackButton>
        </SendFeedbackContainer>
      </MessageBox>

      <ContactUsContainer>
        <ContactUs>Contact Us</ContactUs>
      </ContactUsContainer>
      <Icons>
        <Box>
          <Icon src="/images/Feedbackicon/mail.png" alt="icon" />
          <Span>we will give email@gmail.com</Span>
        </Box>
        <Icon src="/images/Feedbackicon/twitter.svg" alt="icon"/>
        <Icon src="/images/Feedbackicon/instagram.svg"  alt="icon"/>
        <Icon src="/images/Feedbackicon/linkedin.svg"  alt="icon" />
      </Icons>
    </Container>
  );
}

export default Feedback;

const Container = styled.div`
  background-color: #142424;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  @media (max-width:513px) {
      padding: 30px;
  }
`;

const FeedbackButton = styled.button`
  background-color: #00bd57;
  color: white;
  font-size: 37px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  border: none;

`;

const FeedbackContainer = styled.div``;

const MessageBox = styled.div``;

const Text = styled.h3`
  font-weight: 400;
  font-size: 28px;
  color: #dbe2e4;
`;

const Textarea = styled.textarea`
  backgroung-color: #c5ecc5;
  width: 100%;
  height: 150px;
  padding: 8px;
  font-size: 18px;
  color: #000000;
  outline: none;
  border: none;
`;

const SendFeedbackContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

const SendFeedbackButton = styled.button`
  background-color: #2d7d9f;
  margin-top: 90px;
  border: none;
  padding: 4px 9px;
  font-size: 18px;
  color: #02120a;
  font-weight: 500;
`;

const ContactUs = styled.button`
  background-color: #00bd57;
  color: white;
  font-size: 37px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  border: none;
  @media (max-width:454px) {
      margin-top: 15px;
  }
`;

const ContactUsContainer = styled.div``;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
`;

const Span = styled.span`
color: #000;
background-color: #C4C4C4;
opacity: 0.6;
padding: 5px;
font-weight: 500;
`;

const Box = styled.div`
display: flex;
align-items: center;
`;

const Icon = styled.img`
margin-top: 15px;
margin-bottom: 15px;
background-color: white;
width: 30px;
height: 30px;
`
