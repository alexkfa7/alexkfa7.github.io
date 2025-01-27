import { createGlobalStyle } from 'styled-components';
import YourFont from '../fonts/vcr_font.ttf'; // Make sure the path is correct

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'vcr-font';
    src: url(${YourFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'vcr-font', sans-serif;
    background: 
      url('../images/static-noise.png') repeat,  /* The noise texture */
      #000000; /* Fallback dark red color */
    animation: static-noise 1s steps(10) infinite;
    filter: blur(.4px); /* Adds a subtle blur for the analog effect */
    color: #ffffff;
  }

  .App {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;


export default GlobalStyle;