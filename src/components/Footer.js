import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px 0;
  color: #888;
`;

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()} A.K Net. All rights reserved.
  </FooterWrapper>
);

export default Footer;