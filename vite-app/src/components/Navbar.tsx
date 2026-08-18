import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, transitions } from '../theme/variables';

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  right: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 50px;
  padding: 0.9rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    padding: 1rem;
    top: 10px;
    right: 10px;
    left: 10px;
    border-radius: 20px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: ${transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.button)`
  background: none;
  border: none;
  color: ${colors.textDark};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.default};
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

const HamburgerIcon = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 2.5px;
    background: ${colors.textDark};
    border-radius: 2px;
    transition: ${transitions.default};

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 80px;
  left: 10px;
  right: 10px;
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  gap: 1rem;
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const navbarVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const linksVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <NavBar
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Logo
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sanjana.V
        </Logo>
        <NavLinks variants={linksVariants} initial="hidden" animate="visible">
          {links.map(link => (
            <NavLink
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              variants={linkVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </NavBar>
      <MobileMenu
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {links.map((link, index) => (
          <motion.button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.05 }}
            style={{
              background: 'none',
              border: 'none',
              color: colors.textDark,
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: '0.5rem',
              textAlign: 'left',
            }}
          >
            {link.label}
          </motion.button>
        ))}
      </MobileMenu>
    </>
  );
};
