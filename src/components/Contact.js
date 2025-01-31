import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

const ApplicationWrapper = styled.div`
  padding: 30px;
  max-width: 100%;
`;

const LogoLink = styled(Link)`
  color: #39FF14;
  &:active {
    color: #FF0000; /* Color when the link is clicked */
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px; /* Space before the footer */
`;

const IframeStyled = styled.iframe`
  width: 95%; /* Expands form width with slight left/right margin */
  max-width: 1200px; /* Prevents excessive stretching on large screens */
  height: 80vh; /* Dynamic height */
  border: none;
`;

const Contact = () => (
  <ApplicationWrapper>
    <h1>/Contact Me</h1>
    <p>Send me a message using the form below:</p>
    <FormContainer>
      <IframeStyled
        src="https://forms.gle/nhMjKYL2TVXCZX6q8" // Google Form URL
        title="Contact Form"
      >
        Loading…
      </IframeStyled>
    </FormContainer>
  </ApplicationWrapper>
);

export default Contact;
