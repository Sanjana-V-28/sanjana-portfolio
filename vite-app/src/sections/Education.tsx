import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Container, Section, SectionTitle, Card } from '../components/CommonStyles';

const EducationWrapper = styled(Section)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 3rem;
`;

const EducationCard = styled(Card)`
  animation: fadeInUp 0.8s ease-out;
  background: white;
  border: 2px solid ${colors.borderColor};
  border-radius: 16px;
  padding: 2.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: ${transitions.default};

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
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    transform: scaleX(0);
    transform-origin: left;
    transition: ${transitions.default};
  }

  &:hover {
    transform: translateY(-12px);
    border-color: ${colors.primary};
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);

    &::before {
      transform: scaleX(1);
    }

    .edu-icon {
      transform: scale(1.2) rotateZ(10deg);
    }
  }

  .edu-icon {
    font-size: 3rem;
    color: ${colors.primary};
    margin-bottom: 1.5rem;
    transition: ${transitions.default};
    display: inline-block;
  }

  h3 {
    font-size: 1.3rem;
    color: ${colors.textDark};
    margin-bottom: 0.8rem;
    font-weight: 700;
  }

  .degree {
    color: ${colors.primary};
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }

  .year {
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

  .specialization {
    color: ${colors.textLight};
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${colors.borderColor};
    line-height: 1.6;
  }

  .cgpa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    border-radius: 12px;
    font-size: 0.95rem;
    border: 1px solid ${colors.borderColor};

    .cgpa-label {
      color: ${colors.textLight};
      font-weight: 600;
    }

    .cgpa-value {
      color: ${colors.primary};
      font-weight: 800;
      font-size: 1.3rem;
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

export const EducationSection: React.FC = () => {
  const education = [
    {
      institution: 'Vivekananda Degree College',
      degree: 'Bachelor of Business Administration',
      specialization: 'Business Data Analytics with specialization in BI Tools',
      year: '2020 - 2023',
      cgpa: '8.63',
      icon: 'fas fa-graduation-cap',
    },
    {
      institution: 'State Board School',
      degree: 'Higher Secondary Education (12th)',
      specialization: 'Commerce Stream with IT elective',
      year: '2018 - 2020',
      cgpa: '8.75',
      icon: 'fas fa-book',
    },
  ];

  return (
    <EducationWrapper id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        <EducationGrid>
          {education.map((edu, idx) => (
            <EducationCard key={idx}>
              <div className="edu-icon">
                <i className={edu.icon}></i>
              </div>
              <h3>{edu.institution}</h3>
              <div className="degree">{edu.degree}</div>
              <p className="specialization">{edu.specialization}</p>
              <div className="year">
                <i className="fas fa-calendar-alt"></i>
                {edu.year}
              </div>
              <div className="cgpa">
                <span className="cgpa-label">CGPA</span>
                <span className="cgpa-value">{edu.cgpa}</span>
              </div>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationWrapper>
  );
};
