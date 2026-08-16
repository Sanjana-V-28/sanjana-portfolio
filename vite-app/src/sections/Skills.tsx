import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const SkillsWrapper = styled(Section)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const SkillCategory = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.borderColor};
  animation: fadeInUp 0.8s ease-out;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
    border-color: ${colors.primary};
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

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.3s; }
`;

const SkillTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.textDark};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;

  i {
    font-size: 1.8rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SkillItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillLabel = styled.span`
  font-weight: 700;
  color: ${colors.textDark};
  font-size: 1rem;
`;

const SkillValue = styled.span`
  font-weight: 700;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1rem;
`;

const SkillBar = styled.div`
  height: 10px;
  background: linear-gradient(90deg, ${colors.bgLight} 0%, #e8ecf8 100%);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const SkillProgress = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  border-radius: 10px;
  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.4);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SkillsSection: React.FC = () => {
  const skills = {
    languages: [
      { name: 'Python for Data Analytics', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'Advanced Excel', level: 88 },
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
    visualization: [
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 85 },
    ],
    tools: [
      { name: 'Google Analytics', level: 80 },
      { name: 'Microsoft Excel', level: 90 },
      { name: 'Git', level: 75 },
    ],
  };

  return (
    <SkillsWrapper id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <SkillTitle>
              <i className="fas fa-code"></i> Languages
            </SkillTitle>
            <SkillItems>
              {skills.languages.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress width={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <i className="fas fa-database"></i> Databases
            </SkillTitle>
            <SkillItems>
              {skills.databases.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress width={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <i className="fas fa-chart-pie"></i> Visualization
            </SkillTitle>
            <SkillItems>
              {skills.visualization.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress width={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <i className="fas fa-tools"></i> Tools & Tech
            </SkillTitle>
            <SkillItems>
              {skills.tools.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress width={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsWrapper>
  );
};
