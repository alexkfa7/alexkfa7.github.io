import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const LogoLink = styled(Link)`
  text-decoration: none; /* Remove default underline */
`;

const Logo = styled.h1`
  font-size: 20px;
  color: #39FF14;
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
  margin: 0; /* Remove default margin of <h1> if needed */
`;

const Nav = styled.nav`
  a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
    &:hover {
      color: #39FF14;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <LogoLink to="/">
      <Logo>/A.K NET</Logo>
    </LogoLink>
    <Nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/private-blog">Blogs</Link>
      <Link to="/contact">Contact Me</Link>
    </Nav>
  </HeaderWrapper>
);

export default Header;