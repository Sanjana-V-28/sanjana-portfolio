import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 22px;
  border: ${props => props.variant === 'secondary' ? `2px solid ${colors.primary}` : 'none'};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${transitions.default};
  display: inline-block;
  text-decoration: none;
  background: ${props => 
    props.variant === 'primary' 
      ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
      : 'transparent'
  };
  color: ${props => props.variant === 'primary' ? 'white' : colors.primary};
  box-shadow: ${props => props.variant === 'primary' ? `0 4px 15px rgba(102, 126, 234, 0.4)` : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'primary' 
      ? `0 6px 20px rgba(102, 126, 234, 0.6)`
      : 'none'
    };
    background: ${props => props.variant === 'secondary' ? colors.primary : undefined};
    color: ${props => props.variant === 'secondary' ? 'white' : undefined};
  }
`;

export const Section = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${colors.bgWhite};
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: ${shadows.md};
  transition: ${transitions.default};
  border: 1px solid rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadows.lg};
  }
`;
