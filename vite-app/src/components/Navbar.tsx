import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import ThemeToggler from './ThemeToggler';

const NavBar = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  box-shadow: ${shadows.lg};
  padding: 1rem 2rem;
  animation: slideDown 0.6s ease-out;

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

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  
  .logo-dot {
    color: ${colors.primary};
  }
`;

const NavMenu = styled.ul<{ $isOpen?: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-top: 1rem;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled.a`
  color: ${colors.textDark};
  font-weight: 500;
  transition: ${transitions.default};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

const Hamburger = styled.div<{ $isOpen?: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: ${colors.textDark};
    transition: ${transitions.default};
    border-radius: 2px;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none'};
    }
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <NavBar>
      <NavContainer>
        <Logo>
          Sanjana<span className="logo-dot">.</span>V
        </Logo>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ThemeToggler />
        </div>
        <NavMenu $isOpen={isOpen}>
          <li><NavLink onClick={() => scrollToSection('hero')}>Home</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('about')}>About</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('education')}>Education</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('certifications')}>Certifications</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink></li>
        </NavMenu>
        <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavContainer>
    </NavBar>
  );
};
