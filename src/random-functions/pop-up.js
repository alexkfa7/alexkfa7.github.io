import React, { useState } from 'react';
import styled from 'styled-components';

const HighlightedDot = styled.span`
  color: #39FF14;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const PopUpText = styled.div`
  position: absolute;
  top: 25px; /* Adjust position based on your design */
  left: 0;
  background-color: rgba(20, 20, 20, 0.95);
  color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
  z-index: 100;
  white-space: nowrap;
`;

const PopDot = ({ message }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <span style={{ position: 'relative' }}>
      <HighlightedDot onClick={handleToggle} onMouseLeave={() => setShowPopup(false)}>
        .
      </HighlightedDot>
      {showPopup && <PopUpText>{message}</PopUpText>}
    </span>
  );
};

export default PopDot;
