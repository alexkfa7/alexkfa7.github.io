import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Form.css';

const ApplicationWrapper = styled.div`
  padding: 50px 0;
`;

const LogoLink = styled(Link)`
  color: #39FF14;
  &:active {
    color: #FF0000; /* Color when the link is clicked */
  }
`;

const Contact = () => (
  <ApplicationWrapper>
    <h1>Contact Me</h1>
    <p> Send me a message using the form below:</p>
    {/* Add application form here */}
    <div>
      <div className="form-container">
        <iframe
          src="https://forms.gle/8VS8J55hi3P4gA748" // google form URL
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </ApplicationWrapper>
);

export default Contact;