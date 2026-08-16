import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const SkillsWrapper = styled(Section)`
  background: ${colors.bgWhite};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const SkillCategory = styled.div`
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.3s; }

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

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.textDark};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    color: ${colors.primary};
    font-size: 1.8rem;
  }
`;

const SkillItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: ${colors.textDark};
  font-size: 0.95rem;
`;

const SkillBar = styled.div`
  height: 8px;
  background: ${colors.borderColor};
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
  border-radius: 10px;
  transition: width 0.6s ease-out;
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
                  <SkillName>{skill.name}</SkillName>
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
                  <SkillName>{skill.name}</SkillName>
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
                  <SkillName>{skill.name}</SkillName>
                  <SkillBar>
                    <SkillProgress width={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>
              <i className="fas fa-tools"></i> Tools & Technologies
            </SkillTitle>
            <SkillItems>
              {skills.tools.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillName>{skill.name}</SkillName>
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
