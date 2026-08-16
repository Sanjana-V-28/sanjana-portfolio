import { createGlobalStyle } from 'styled-components';
import { colors, shadows, transitions } from './variables';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${colors.primary};
    --secondary-color: ${colors.secondary};
    --accent-color: ${colors.accent};
    --text-dark: ${colors.textDark};
    --text-light: ${colors.textLight};
    --bg-light: ${colors.bgLight};
    --bg-white: ${colors.bgWhite};
    --border-color: ${colors.borderColor};
    --shadow-sm: ${shadows.sm};
    --shadow-md: ${shadows.md};
    --shadow-lg: ${shadows.lg};
    --transition: ${transitions.default};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* use a soft background so the centered content doesn't look like it's inside a white box */
    background-color: ${colors.bgLight};
    background-image: radial-gradient(rgba(118,75,162,0.02) 0px, transparent 120px), radial-gradient(rgba(102,126,234,0.02) 0px, transparent 180px);
    background-repeat: no-repeat;
    background-position: left top, right bottom;
    color: ${colors.textDark};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* ensure the app takes full height and no accidental borders appear */
  html, body, #root {
    height: 100%;
  }

  img, picture, video {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Animations */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* fluid typography helpers */
  h1 { font-size: clamp(2rem, 3.5vw, 3.5rem); }
  h2 { font-size: clamp(1.6rem, 3vw, 3rem); }
  h3 { font-size: clamp(1.2rem, 2.2vw, 1.6rem); }
`;
