import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Button, Container, Section } from '../components/CommonStyles';

const HeroWrapper = styled(Section)`
  padding-top: 10rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.2), transparent);
    border-radius: 50%;
    top: -100px;
    left: -100px;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(240, 147, 251, 0.15), transparent);
    border-radius: 50%;
    bottom: 50px;
    right: -50px;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(40px);
    }
  }
`;

const HeroContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  animation: fadeInUp 0.8s ease-out;

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
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: ${colors.textDark};

  .highlight {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: ${colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const HeroCTA = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;

const HeroSocials = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  font-size: 1.2rem;
  transition: ${transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
`;

const Hero3D = styled.div`
  perspective: 1000px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: bounce 2s infinite;

  span {
    display: block;
    color: ${colors.primary};
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid ${colors.primary};
    border-radius: 13px;
    margin: 0 auto;
    padding: 10px 0;
    position: relative;
  }

  .wheel {
    width: 3px;
    height: 8px;
    background: ${colors.primary};
    border-radius: 2px;
    margin: 0 auto;
    animation: scroll 1.5s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
  }

  @keyframes scroll {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroSection: React.FC = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContent>
        <HeroText>
          <HeroTitle>
            Hi, I'm <span className="highlight">Sanjana</span>
          </HeroTitle>
          <HeroSubtitle>Business Data Analytics Graduate</HeroSubtitle>
          <HeroDescription>
            Passionate about transforming data into actionable insights using SQL, Python, Power BI, and Tableau
          </HeroDescription>
          <HeroCTA>
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </HeroCTA>
          <HeroSocials>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="mailto:sanjana@email.com">
              <i className="fas fa-envelope"></i>
            </SocialIcon>
          </HeroSocials>
        </HeroText>
        <Hero3D>
          <div style={{
            fontSize: '4rem',
            textAlign: 'center',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            <i className="fas fa-chart-line"></i>
          </div>
        </Hero3D>
      </HeroContent>
      <ScrollIndicator>
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </ScrollIndicator>
    </HeroWrapper>
  );
};
