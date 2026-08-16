import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Container, Section, SectionTitle, Card } from '../components/CommonStyles';

const ExperienceWrapper = styled(Section)`
  background: white;
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
  margin-bottom: 4rem;
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
    width: 24px;
    height: 24px;
    background: white;
    border: 4px solid ${colors.primary};
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    transition: ${transitions.default};
  }

  &:hover::after {
    border-color: ${colors.secondary};
    box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 14px;
    top: 0;

    &::after {
      width: 16px;
      height: 16px;
      border-width: 3px;
    }
  }
`;

const TimelineContent = styled(Card)`
  animation: fadeInUp 0.8s ease-out;
  background: linear-gradient(135deg, white, ${colors.bgLight});
  border: 2px solid ${colors.borderColor};
  border-radius: 16px;
  padding: 2.5rem;
  cursor: pointer;
  transition: ${transitions.default};
  position: relative;
  overflow: hidden;

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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    transform: scaleX(0);
    transform-origin: left;
    transition: ${transitions.default};
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${colors.primary};
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);

    &::before {
      transform: scaleX(1);
    }

    .company-badge {
      color: ${colors.primary};
    }
  }

  h4 {
    font-size: 1.4rem;
    color: ${colors.textDark};
    margin-bottom: 0.8rem;
    font-weight: 700;
  }

  .role {
    color: ${colors.primary};
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }

  .date {
    color: ${colors.textLight};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
      color: ${colors.primary};
    }
  }

  p {
    color: ${colors.textLight};
    line-height: 1.7;
    font-size: 0.95rem;
  }

  .company-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    color: ${colors.secondary};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    margin-bottom: 1rem;
    transition: ${transitions.default};
    border: 1px solid rgba(102, 126, 234, 0.2);
  }
`;

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Analytics Firm',
      role: 'Data Analytics Intern',
      date: 'June 2023 - August 2023',
      description: 'Assisted in creating interactive dashboards using Power BI and Tableau. Analyzed sales data using SQL and Python to identify key trends and patterns. Collaborated with senior analysts on business intelligence projects.',
    },
    {
      company: 'Digital Marketing Agency',
      role: 'Analytics Associate',
      date: 'September 2023 - December 2023',
      description: 'Performed comprehensive data analysis on customer behavior and website performance metrics. Created automated reports using Google Analytics and Excel for stakeholder presentations. Provided actionable insights that improved campaign performance by 25%.',
    },
  ];

  return (
    <ExperienceWrapper id="experience">
      <Container>
        <SectionTitle>Professional Experience</SectionTitle>
        <ExperienceTimeline>
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx}>
              <TimelineMarker />
              <TimelineContent>
                <div className="company-badge">
                  <i className="fas fa-building"></i> {exp.company}
                </div>
                <h4>{exp.company}</h4>
                <div className="role">
                  <i className="fas fa-briefcase"></i> {exp.role}
                </div>
                <div className="date">
                  <i className="fas fa-calendar-alt"></i>
                  {exp.date}
                </div>
                <p>{exp.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </ExperienceTimeline>
      </Container>
    </ExperienceWrapper>
  );
};
