import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const SkillsWrapper = styled(Section)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.06) 0%, rgba(118, 75, 162, 0.05) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -15%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(240, 147, 251, 0.1), transparent);
    border-radius: 50%;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;
`;

const SkillCategory = styled(motion.div)`
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

const SkillTitle = styled(motion.h3)`
  font-size: 1.4rem;
  color: ${colors.textDark};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  i {
    font-size: 1.8rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SkillItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const SkillItem = styled(motion.div)`
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

const SkillBar = styled(motion.div)`
  height: 10px;
  background: linear-gradient(90deg, ${colors.bgLight} 0%, #e8ecf8 100%);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SkillProgress = styled(motion.div)<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.5);
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

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
        <SkillsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SkillCategory
            variants={categoryVariants}
            whileHover={{ y: -10 }}
          >
            <SkillTitle>
              <motion.i
                className="fas fa-code"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              Languages
            </SkillTitle>
            <SkillItems variants={containerVariants} initial="hidden" animate="visible">
              {skills.languages.map((skill, idx) => (
                <SkillItem key={idx} variants={itemVariants}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress
                      width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory
            variants={categoryVariants}
            whileHover={{ y: -10 }}
          >
            <SkillTitle>
              <motion.i
                className="fas fa-database"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              Databases
            </SkillTitle>
            <SkillItems variants={containerVariants} initial="hidden" animate="visible">
              {skills.databases.map((skill, idx) => (
                <SkillItem key={idx} variants={itemVariants}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress
                      width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory
            variants={categoryVariants}
            whileHover={{ y: -10 }}
          >
            <SkillTitle>
              <motion.i
                className="fas fa-chart-pie"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              Visualization
            </SkillTitle>
            <SkillItems variants={containerVariants} initial="hidden" animate="visible">
              {skills.visualization.map((skill, idx) => (
                <SkillItem key={idx} variants={itemVariants}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress
                      width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillItems>
          </SkillCategory>

          <SkillCategory
            variants={categoryVariants}
            whileHover={{ y: -10 }}
          >
            <SkillTitle>
              <motion.i
                className="fas fa-tools"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              Tools & Tech
            </SkillTitle>
            <SkillItems variants={containerVariants} initial="hidden" animate="visible">
              {skills.tools.map((skill, idx) => (
                <SkillItem key={idx} variants={itemVariants}>
                  <SkillName>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <SkillValue>{skill.level}%</SkillValue>
                  </SkillName>
                  <SkillBar>
                    <SkillProgress
                      width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
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
