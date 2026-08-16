import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Container } from '../components/CommonStyles';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${colors.textDark} 0%, #1a202c 100%);
  color: white;
  padding: 4rem 0 1rem;
  margin-top: 6rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.8rem;

    a {
      color: rgba(255, 255, 255, 0.7);
      transition: ${transitions.default};
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: ${transitions.default};
  cursor: pointer;

  &:hover {
    background: ${colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  p {
    margin: 0.5rem 0;
  }
`;

const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${colors.primary};
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: ${transitions.default};
  margin-right: 1rem;

  &:hover {
    background: ${colors.secondary};
    transform: translateY(-3px);
  }
`;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <h4>About</h4>
            <p>
              Business Data Analytics graduate passionate about transforming data into actionable insights. Always eager to learn and grow.
            </p>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="mailto:sanjana@email.com">
                <i className="fas fa-envelope"></i>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
              <li><a onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</a></li>
              <li><a onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
              <li><a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Services</h4>
            <ul>
              <li><a>Data Analysis</a></li>
              <li><a>Dashboard Design</a></li>
              <li><a>SQL Optimization</a></li>
              <li><a>Python Analytics</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:sanjana@email.com">
                  <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
                  sanjana@email.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210">
                  <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
                  +91 9876543210
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
                Bangalore, India
              </li>
            </ul>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <BackToTop onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </BackToTop>
          <p>© 2024 Sanjana.V - Business Data Analytics</p>
          <p>Designed & Built with <span style={{ color: colors.primary }}>❤️</span> using React & TypeScript</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
