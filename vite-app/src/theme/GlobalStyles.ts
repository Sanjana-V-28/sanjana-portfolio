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
    background: linear-gradient(135deg, ${colors.bgLight} 0%, #ffffff 50%, ${colors.bgLight} 100%);
    background-attachment: fixed;
    color: ${colors.textDark};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    position: relative;
  }

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

  /* Smooth scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.bgLight};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});
    border-radius: 5px;

    &:hover {
      background: linear-gradient(180deg, ${colors.secondary}, ${colors.primary});
    }
  }

  /* Selection styling */
  ::selection {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
  }

  ::-moz-selection {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
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

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(102, 126, 234, 0.8);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  /* Form elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: ${colors.bgWhite};
    color: ${colors.textDark};
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid ${colors.borderColor};
    transition: ${transitions.default};

    &:focus {
      outline: none;
      border-color: ${colors.primary};
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }

  /* Button reset */
  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Utility classes */
  .gradient-text {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .shadow-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }

  /* fluid typography helpers */
  h1 { font-size: clamp(2rem, 3.5vw, 3.5rem); }
  h2 { font-size: clamp(1.6rem, 3vw, 3rem); }
  h3 { font-size: clamp(1.2rem, 2.2vw, 1.6rem); }
`;
