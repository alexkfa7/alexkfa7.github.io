import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { checkInvitationCode } from '../utils/placeholder-api';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"; // Import icons
import NewsCarousel from "./NewsCarousel";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  font-family: 'vcr-font', sans-serif;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #0a0a0a;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'vcr-font', sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #39FF14;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Spacing between items */
  margin-top: 10px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1.8rem; /* Icon size */
  
  &:hover {
    color: #39FF14; /* Neon green hover effect */
  }
`;

const PrivateBlog = () => {
  const [invitationCode, setInvitationCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await checkInvitationCode(invitationCode);
    if (result.isValid) {
      setMessage('Valid code. Redirecting to A.K NET Blog...');
      // Implement redirection to VIPRegistrationPage here

      //navigate to new page after 2 seconds
      setTimeout(() => {
        navigate.push('/secret');
      }, 2000);

    } else {
      setMessage('Invalid code. Please try again.');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>/Private Blog & Essays</h1>
      <p>Access to my my private blog is limited to referred persons only. You can request access by sending me a message, or you can check out my essays below or my public blog written under the pesudonym: <a
      href="https://medium.com/@karlasimov"
      style={{
        color: '#39FF14', /* Your desired color */
      }}
      onMouseOver={(e) => e.currentTarget.style.color = '#C70039'} /* Color on hover */
      onMouseOut={(e) => e.currentTarget.style.color = '#FF5733'} /* Return to original color */
    >KARL ASIMOV</a></p>
      <Form onSubmit={handleSubmit} style={{paddingTop:'30px'}}>
        <Input
          type="text"
          value={invitationCode}
          onChange={(e) => setInvitationCode(e.target.value)}
          placeholder="Enter your referral code"
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
      {message && <p>{message}</p>}

      <h2 style={{paddingTop: '40px'}}>Follow me on social media:</h2>
      <SocialContainer>
        <SocialLink href="https://twitter.com/yes_chef___" target="_blank">
          <FaXTwitter />
        </SocialLink>
        <SocialLink href="https://instagram.com/asim_ssi" target="_blank">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/akfa7/" target="_blank">
          <FaLinkedin />
        </SocialLink>
      </SocialContainer>

      <div style={{ paddingTop: '30px', overflow: 'visible', position: 'relative' }}>
        <h2>Featured News:</h2>
        <NewsCarousel />
      </div>
      
      <h2 style={{paddingTop: '30px'}}>Check out some of my essays:</h2>
      <h3>**apologies, this section is currently being updated..**</h3>
    </div>
  );
};

export default PrivateBlog;