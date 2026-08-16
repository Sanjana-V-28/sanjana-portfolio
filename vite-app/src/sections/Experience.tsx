import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/variables';
import { Container, Section, SectionTitle, Card } from '../components/CommonStyles';

const ExperienceWrapper = styled(Section)`
  background: ${colors.bgLight};
`;

const ExperienceTimeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div<{ align?: 'left' | 'right' }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: center;

  &:nth-child(even) {
    direction: rtl;

    > div {
      direction: ltr;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    direction: ltr !important;

    > div {
      direction: ltr !important;
    }
  }
`;

const TimelineMarker = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border: 4px solid ${colors.primary};
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 14px;
    top: 0;

    &::after {
      width: 14px;
      height: 14px;
      border-width: 3px;
    }
  }
`;

const TimelineContent = styled(Card)`
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

  h4 {
    font-size: 1.3rem;
    color: ${colors.textDark};
    margin-bottom: 0.3rem;
  }

  .role {
    color: ${colors.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .date {
    color: ${colors.textLight};
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textLight};
    line-height: 1.7;
  }
`;

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Analytics Firm',
      role: 'Data Analytics Intern',
      date: 'June 2023 - August 2023',
      description: 'Assisted in creating dashboards using Power BI and Tableau. Analyzed sales data using SQL and Python to identify trends.',
    },
    {
      company: 'Digital Marketing Agency',
      role: 'Analytics Associate',
      date: 'September 2023 - December 2023',
      description: 'Performed data analysis on customer behavior. Created automated reports using Google Analytics and Excel.',
    },
  ];

  return (
    <ExperienceWrapper id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceTimeline>
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx}>
              <TimelineMarker />
              <TimelineContent>
                <h4>{exp.company}</h4>
                <div className="role">{exp.role}</div>
                <div className="date">{exp.date}</div>
                <p>{exp.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </ExperienceTimeline>
      </Container>
    </ExperienceWrapper>
  );
};
