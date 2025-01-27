import React from 'react';
import styled from 'styled-components';
import koailLogo from '../images/koail_logo_white.png'; // Ensure this path is correct

const AboutWrapper = styled.div`
  padding: 50px 0;
`;

const AboutPage = () => (
  <AboutWrapper>
    <div>
      <img src={koailLogo} alt="Koail Logo" width="250" height="auto"/>
    </div>
    <h1>About A.K.</h1> {/* stick to h3+ headings */}
    <p>Hello. Alex Kemas here. Also known as A.K.</p>
    <p>I was born to first-gen Indonesian Americans in a small town of twenty thousand in the Ohio countryside in the United States.
      Growing up, in the specific region of Ohio that I did, I spent my childhood influenced by unique characters whom people refer to as rednecks in popular media.
      These were people who taught me how to hunt, people who rode on mountain bikes with me through the Appalachian mountains, and people who h
Asim was on the co-founding team for an esports platform startup in America known as eFuse.
Akin to a linkedin for esports, its current evaluation rose above $100m+ USD. Apart from his
current startup, Asimula, he is to soon launch an anti-hangover drink as a fun side project.
Asim’s motivations for his current venture include building a leading force to facilitate
cross-cultural exchange through entertainment and tech. He hopes to use his startup as a means to
build upon the Indonesian, Korean, and American technology and entertainment industries.
He has a strong interest in the battery industry and has been studying it in his free time for his next
future venture.</p>
    <p>We ensure the safety of our clients through our in-development service <a
      href="https://aipmd.framer.website/"
      style={{
        color: '#39FF14', /* Your desired color */
      }}
      onMouseOver={(e) => e.currentTarget.style.color = '#C70039'} /* Color on hover */
      onMouseOut={(e) => e.currentTarget.style.color = '#FF5733'} /* Return to original color */
    >AIPMD</a>
    , Indonesia’s first ever artificial intellectual property management and distribution system allowing for seamless fraud detection, distribution and management of their personal digital IP.
    </p>
  </AboutWrapper>
);

export default AboutPage;