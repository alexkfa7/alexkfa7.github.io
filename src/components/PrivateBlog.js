import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { checkInvitationCode } from '../utils/placeholder-api';

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
      <p>Access to my my private blog is limited to referred persons only. You can request access by sending me a message, or you can check out my public blog written under the pesudonym: <a
      href="https://medium.com/@karlasimov"
      style={{
        color: '#39FF14', /* Your desired color */
      }}
      onMouseOver={(e) => e.currentTarget.style.color = '#C70039'} /* Color on hover */
      onMouseOut={(e) => e.currentTarget.style.color = '#FF5733'} /* Return to original color */
    >KARL ASIMOV</a></p>
      <Form onSubmit={handleSubmit}>
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

      <h2 style={{paddingTop: '200px'}}>Check out some of my essays below:</h2>
      <h3>**apologies, this section is currently being updated..**</h3>
    </div>
  );
};

export default PrivateBlog;