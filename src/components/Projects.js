import React from 'react';
import styled from 'styled-components';
import '../styles/Form.css'

const VIPWrapper = styled.div`
  padding: 50px 0;
`;

const Projects = () => (
  <VIPWrapper>
    <h1>VIP Registration</h1>
    <p>Welcome to the exclusive VIP registration. Please complete your profile.</p>
    {/* Add registration form here */}
    <div>
      <div className="form-container">
        <iframe
          src="https://forms.gle/RJM3m5Fu4YF4UzW8A" // google form URL
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </VIPWrapper>
);

export default Projects;