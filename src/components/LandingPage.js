import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import koailLogo from '../images/koail_logo_white.png'; // Ensure this path is correct
import styled from 'styled-components';
import '../styles/animations.css'
import '../styles/vhs-effect.css'

const Hero = styled.div`
  text-align: center;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: clamp(24px, 5vw, 48px); /* Responsive font size with max 48px */
  color: #ffffff;
  margin-bottom: 20px;
  white-space: normal; /* Allow text to wrap */
  overflow: hidden;
  height: auto; /* Ensures the height adjusts with text wrapping */
  max-width: 100%; /* Ensures the title doesn't exceed container width */
  display: inline-block;
  vertical-align: middle;
  text-align: center; /* Center the text */

  /* Apply the glitch effect */
  &.glitch-text {
    animation: glitch 4s infinite;
    filter: blur(.5px);
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; /* Space between the buttons */

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(Link)`
  background-color: #ffffff;
  color: #0a0a0a;
  padding: 15px 30px;
  margin: 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
  white-space: nowrap; /* Prevent text from wrapping within the button itself */

  &:hover {
    background-color: #39FF14;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.6em; /* Thicker than a regular cursor */
  height: 1.2em; /* Adjust to fit the font size */
  background-color: #ffffff; /* Same color as the text */
  vertical-align: bottom;
  animation: blink-caret 0.75s step-end infinite;
`;

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const text = "Welcome to A.K NET";

  useEffect(() => {
    let charIndex = 0;
    let typingDelay = 100;
    let initialDelay = 700;
    let afterTypingDelay = 3000;

    const type = () => {
      if (charIndex < text.length) {
        setDisplayedText((prev) => prev + text[charIndex]);
        charIndex++;
      } else if (charIndex === text.length) {
        setShowCursor(true);
        setTimeout(() => {
          charIndex = 0;
          setDisplayedText('');
        }, afterTypingDelay);
      }
    };

    const startTyping = () => {
      setDisplayedText('');
      setShowCursor(true);
      const typingInterval = setInterval(() => {
        if (charIndex < text.length) {
          type();
        } else {
          clearInterval(typingInterval);
        }
      }, typingDelay);
    };

    // Initial delay for cursor blink, then start typing
    setTimeout(() => {
      setShowCursor(true);
      startTyping();
    }, initialDelay);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(startTyping);
    };
  }, [text]);

  return (
    <Hero>
      <div>
        <img src={koailLogo} alt="Koail Logo" width="250" height="auto" className="glitch-logo" />
      </div>
      <Title className={displayedText ? "glitch-text streak-text" : ""}>
        {displayedText}
        <Cursor style={{ opacity: showCursor ? 1 : 0 }} />
      </Title>
      <Subtitle>Alex Kemas's personal website</Subtitle>
      <ButtonContainer>
        <CTAButton to="/about">Read More..</CTAButton>
        <CTAButton to="/contact">or Send Me A Message</CTAButton>
      </ButtonContainer>
    </Hero>
  );
};

export default LandingPage;
