import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, transitions } from '../theme/variables';
import { Container, Button, Section } from '../components/CommonStyles';

const HeroWrapper = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.05));
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -40%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(118, 75, 162, 0.1), transparent);
    border-radius: 50%;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroText = styled(motion.div)`
  animation: fadeInLeft 0.8s ease-out;

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
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${colors.textDark};
  letter-spacing: -0.5px;
`;

const HighLight = styled.span`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    border-radius: 2px;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${colors.textLight};
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 550px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;

const StyledButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: ${transitions.default};
  border: none;
  text-transform: none;
  
  &:first-child {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

    &:hover {
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }
  }

  &:last-child {
    border: 2px solid ${colors.primary};
    background: transparent;
    color: ${colors.primary};

    &:hover {
      background: ${colors.primary};
      color: white;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: ${transitions.default};
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
  }
`;

const HeroIcon = styled(motion.div)`
  font-size: 120px;
  text-align: center;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInRight 0.8s ease-out 0.2s both;

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

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: ${colors.primary};
  z-index: 10;
  font-weight: 600;

  .icon {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper id="hero">
      <Container>
        <HeroContent>
          <HeroText
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              Hi, I'm <HighLight>Sanjana</HighLight>
            </HeroTitle>
            <Subtitle variants={itemVariants}>Business Data Analytics Graduate</Subtitle>
            <Description variants={itemVariants}>
              Passionate about transforming data into actionable insights using SQL, Python, Power BI, and Tableau. Let's collaborate to create data-driven solutions!
            </Description>
            <ButtonGroup variants={itemVariants}>
              <StyledButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </StyledButton>
              <StyledButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </StyledButton>
            </ButtonGroup>
            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink
                href="mailto:sanjana@email.com"
                title="Email"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-envelope"></i>
              </SocialLink>
            </SocialLinks>
          </HeroText>

          <HeroIcon variants={floatingVariants} animate="animate">
            <i className="fas fa-chart-line"></i>
          </HeroIcon>
        </HeroContent>

        <ScrollIndicator animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="icon">↓</div>
          <div style={{ fontSize: '0.85rem' }}>Scroll Down</div>
        </ScrollIndicator>
      </Container>
    </HeroWrapper>
  );
};
