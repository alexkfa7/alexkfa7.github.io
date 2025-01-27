import React from 'react';
import styled from 'styled-components';

const ThankYouWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const SecretPage = () => (
  <ThankYouWrapper>
    <h1>Secret</h1>
    <p>Thank you for checking out my blog. This page is currently under construction.</p>
  </ThankYouWrapper>
);

export default SecretPage;