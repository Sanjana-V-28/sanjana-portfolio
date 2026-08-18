import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, transitions } from '../theme/variables';
import { Container } from './CommonStyles';

const FooterWrapper = styled(motion.footer)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  color: white;
  padding: 4rem 0 2rem 0;
  margin-top: 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
    border-radius: 50%;
  }
`;

const FooterContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)`
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

const FooterLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: ${transitions.default};
  font-size: 0.95rem;
  display: inline-block;

  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: ${transitions.default};
  font-size: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px) scale(1.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const FooterBottom = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CopyRight = styled.p`
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
`;

const BackToTop = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: ${transitions.default};
  font-weight: 600;
  font-size: 0.95rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <FooterSection variants={sectionVariants}>
            <h4>About</h4>
            <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
              Business Data Analytics professional passionate about transforming data into actionable insights using Python, SQL, Power BI, and Tableau.
            </p>
          </FooterSection>

          <FooterSection variants={sectionVariants}>
            <h4>Quick Links</h4>
            <FooterLinks variants={containerVariants} initial="hidden" animate="visible">
              <FooterLink href="#hero" variants={linkVariants}>Home</FooterLink>
              <FooterLink href="#about" variants={linkVariants}>About</FooterLink>
              <FooterLink href="#projects" variants={linkVariants}>Projects</FooterLink>
              <FooterLink href="#contact" variants={linkVariants}>Contact</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection variants={sectionVariants}>
            <h4>Services</h4>
            <FooterLinks variants={containerVariants} initial="hidden" animate="visible">
              <FooterLink href="#skills" variants={linkVariants}>Data Analysis</FooterLink>
              <FooterLink href="#skills" variants={linkVariants}>Dashboard Design</FooterLink>
              <FooterLink href="#skills" variants={linkVariants}>SQL & Python</FooterLink>
              <FooterLink href="#skills" variants={linkVariants}>Business Intelligence</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection variants={sectionVariants}>
            <h4>Connect</h4>
            <SocialLinks variants={containerVariants} initial="hidden" animate="visible">
              <SocialIcon
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                variants={linkVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i>
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                variants={linkVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin"></i>
              </SocialIcon>
              <SocialIcon
                href="mailto:sanjana@email.com"
                title="Email"
                variants={linkVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CopyRight>
            © {new Date().getFullYear()} Sanjana.V — Business Data Analytics. All rights reserved.
          </CopyRight>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to Top
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
