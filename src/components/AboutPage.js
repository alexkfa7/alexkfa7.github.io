import React, { useState } from 'react';
import styled from 'styled-components';
import koailLogo from '../images/koail_logo_white.png'; // Ensure this path is correct
import pic1 from '../images/pic1.png';
import '../styles/ui-verse.css'; // Import the CSS file for your toggle button
import PopDot from '../random-functions/pop-up';

const AboutWrapper = styled.div`
  padding: 30px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const ExtendedText = styled.div`
  margin-top: 20px;
  padding: 25px;
  border-left: 4px solid #39FF14;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligns image to the left */
  align-items: center;
`;

const CircleImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  // margin-left: 20px; /* Adjust margin */
`;

const AboutPage = () => {
  const [showExtended, setShowExtended] = useState(false);

  const handleToggle = () => {
    setShowExtended(!showExtended);
  };

  return (
    <AboutWrapper>
      <div>
      <h1>/About A.K.</h1>
        <ImageContainer>
          <img src={koailLogo} alt="Koail Logo" width="100" height="auto" /> <CircleImage src={pic1} alt="matrix photo" /> <img src={koailLogo} alt="Koail Logo" width="100" height="auto" style={{ transform: 'scaleX(-1)' }} />
        </ImageContainer>    
      </div>
      <h3>Hello. Alex Kemas here. I also go by Asim or A.K.</h3>
      <p>
        <br></br><br></br>
        I am an indie hacker, builder, and 2x founder from the US with an interest in developing AI, crypto, and robotic applications. I spent the last 6+ years in Korea, Indonesia, and Vietnam focusing on various ventures which helped me develop strong domain expertise in building products and scaling their growth throughout East and Southeast Asia.
        My travels in Asia have given me a truly diverse range of experiences including working alongside high ranking government officials, military leaders, and other influential business magnates.
        <br></br><br></br>
        Rewind to 2018, my first venture began prior to my move to Asia. I was studying computer science with a focus on AI, robotics, and augmented/virtual reality. I joined a group of friends, who I met volunteering over the summer, to build eFuse - the first 'linkedin for esports'. This company ended up raising more than $16m in capital, earning $38m ARR at its peak, and expanding to a team of 100+ members in the local Columbus office.
        <br></br><br></br>
        A lot of the lessons learned while creating eFuse transferred over to my second venture which began shortly after moving to South Korea to pursue research at KAIST, or the Korea Advanced Institute of Science and Technology - the equivalent of Korea's MIT. Here, I built Asimula, a VC-backed virtual event production startup for promoting K-Pop artists globally online during a time where offline events and promotion became impossible.
        After the end of COVID, I pivoted the company into a holdings and invested heavily into our entertainment agency team and our production business - both of which were only supporting functions in our company at the time, but later became driving forces of revenue when online events dwindled down. Funnily enough, this company began as a side project developing hand-recognition-based VR controllers optimized for low-compute devices.
        <br></br><br></br>
        Most recently, I moved back to the states to spend more time with family while dabbling in new endeavors. In 2019, my mother survived a stroke due to a benign tumor located in her brain for which she had to be airlifted to a major Columbus hospital. Her condition since has gotten better, however, recently my gut has been telling me it would be best to spend the next few years back in the states closer to family.
        On a positive note, I can hit two birds with one stone and now stay close to the action of rapid developments in AI and crypto while also being able to spend more time with family.
        <br></br><br></br><br></br><br></br>
      </p>

      {/* Toggle Button */}
      <ToggleContainer>
        <Label>Read More..</Label>
        <div className="checkbox-wrapper-5">
          <div className="check">
            <input id="check-5" type="checkbox" onChange={handleToggle} checked={showExtended} />
            <label htmlFor="check-5"></label>
          </div>
        </div>
      </ToggleContainer>

      {/* Extended Text Section */} {/* add section about intro to entrepreneurship using runescape*/}
      {showExtended && (
        <ExtendedText>
          {/* <p>
            I was born to Indonesian American immigrants in a small town of twenty thousand in the Ohio countryside in the United States.
            Growing up, in the specific region of Ohio that I did, I spent my childhood influenced by unique characters. In popular media, we refer to these characters as "Rednecks".
            These were the people who took me on my first hunt, people who took me on my first mountain bike through the Appalachian mountains, and people who shared my first proper Christmases and Thanksgivings.
          </p>
          <p>
            In middle school and high school I began to face a lot of blatant racism when I was the 1% of a white majority population.
            I fought back by trying to be more 'American' and joined the football team and hung around popular cliques. 
            As my image began to change, I subconsciously lost all curiosity in understanding my roots or origins.
          </p>
          <p>
            Rewind to the last summer of my elementary school days, I was introduced to the world of entrepreneurship after getting hacked on Runescape by a notorious European hacking group. I grew angry from the loss of my years of hardwork and wealth in online MMORPG currency. I developed necessary skills to code a phishing site and targeted other players to re-build what I had lost. After the first few accounts, I felt terrible and ended up returning everything. I then pivoted my
            new skillset to developing bot scripts to auto 'farm' the gold for me. I discovered a Chinese Runescape gold-resale site that had daily transactions of real world cash in the hundreds of thousands. I ended up selling a majority of the gold I had earned to build an upgraded PC. 
          </p> */}
          <p>
            {/* He has a strong interest in the battery industry and has been studying it in his free time for his next future venture. */}
          </p>
        </ExtendedText>
      )}

      {/* Toggle Button */}
      <ToggleContainer>
        <Label>Read Even More..</Label>
        <div className="checkbox-wrapper-5">
          <div className="check">
            <input id="check-5" type="checkbox" onChange={handleToggle} checked={showExtended} />
            <label htmlFor="check-5"></label>
          </div>
        </div>
      </ToggleContainer>

      {/* Extended Text Section */} {/* add section about intro to entrepreneurship using runescape*/}
      {showExtended && (
        <ExtendedText>
          <h1>fun facts</h1>
          {/* <p>
            I was born to Indonesian American immigrants in a small town of twenty thousand in the Ohio countryside in the United States.
            Growing up, in the specific region of Ohio that I did, I spent my childhood influenced by unique characters. In popular media, we refer to these characters as "Rednecks".
            These were the people who took me on my first hunt, people who took me on my first mountain bike through the Appalachian mountains, and people who shared my first proper Christmases and Thanksgivings.
          </p> */}
          {/* <p>
            In middle school and high school I began to face a lot of blatant racism when I was the 1% of a white majority population.
            I fought back by trying to be more 'American' and joined the football team and hung around popular cliques. 
            As my image began to change, I subconsciously lost all curiosity in understanding my roots or origins.
          </p> */}
          {/* <p>
            Rewind to the last summer of my elementary school days, I was introduced to the world of entrepreneurship after getting hacked on Runescape by a notorious European hacking group. I grew angry from the loss of my years of hardwork and wealth in online MMORPG currency. I developed necessary skills to code a phishing site and targeted other players to re-build what I had lost. After the first few accounts, I felt terrible and ended up returning everything. I then pivoted my
            new skillset to developing bot scripts to auto 'farm' the gold for me. I discovered a Chinese Runescape gold-resale site that had daily transactions of real world cash in the hundreds of thousands. I ended up selling a majority of the gold I had earned to build an upgraded PC. 
          </p> */}
          <p>
            Wow, did you really read all of this? Here's your prize, you can check out my private blog using the code provided if you click on the period at the end of this paragraph. Buy ETH, sell SOL, and invest in Nvidia. Always leave holes in the box or bag for air so that the fried chicken doesn't get soggy. Beep boop boop. Bop boop beep. Cheers<PopDot message="The CODE is 'ak2025'." />
          </p>
          <p>
            Thank you for reading. Stay hydrated. Have a wonderful day.
          </p>
        </ExtendedText>
      )}
    </AboutWrapper>
  );
};

export default AboutPage;
