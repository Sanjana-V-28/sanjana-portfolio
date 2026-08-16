import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/variables';
import { Container, Section, SectionTitle, Card } from '../components/CommonStyles';

const EducationWrapper = styled(Section)`
  background: ${colors.bgLight};
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const EducationCard = styled(Card)`
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

  .edu-icon {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: ${colors.textDark};
    margin-bottom: 0.3rem;
  }

  .degree {
    color: ${colors.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .year {
    color: ${colors.textLight};
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .cgpa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: ${colors.bgLight};
    border-radius: 8px;
    font-size: 0.95rem;

    .cgpa-value {
      color: ${colors.primary};
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;

export const EducationSection: React.FC = () => {
  const education = [
    {
      institution: 'Vivekananda Degree College',
      degree: 'Bachelor of Business Administration',
      specialization: 'Business Data Analytics',
      year: '2020 - 2023',
      cgpa: '8.63',
      icon: 'fas fa-graduation-cap',
    },
    {
      institution: 'State Board School',
      degree: 'Higher Secondary Education',
      specialization: 'Commerce Stream',
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
              <p style={{ marginBottom: '0.5rem', color: colors.textLight }}>{edu.specialization}</p>
              <div className="year">{edu.year}</div>
              <div className="cgpa">
                <span>CGPA</span>
                <span className="cgpa-value">{edu.cgpa}</span>
              </div>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationWrapper>
  );
};
