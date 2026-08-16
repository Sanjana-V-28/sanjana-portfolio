import React from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const CertificationsWrapper = styled(Section)`
  background: ${colors.bgWhite};
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const CertCard = styled.div`
  background: linear-gradient(135deg, ${colors.bgLight}, ${colors.bgWhite});
  border: 2px solid ${colors.borderColor};
  border-radius: 12px;
  padding: 2.5rem;
  transition: ${transitions.default};
  animation: fadeInUp 0.8s ease-out;
  text-align: center;
  cursor: pointer;

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

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadows.lg};
    border-color: ${colors.primary};
  }

  .cert-icon {
    font-size: 3rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: ${colors.textDark};
    margin-bottom: 0.5rem;
  }

  .issuer {
    color: ${colors.textLight};
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .year {
    display: inline-block;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      year: '2023',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2023',
      icon: 'fas fa-chart-pie',
    },
    {
      title: 'SQL for Data Analysis',
      issuer: 'Coursera',
      year: '2023',
      icon: 'fas fa-database',
    },
    {
      title: 'Python for Business Analytics',
      issuer: 'DataCamp',
      year: '2024',
      icon: 'fas fa-snake',
    },
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      year: '2024',
      icon: 'fas fa-chart-bar',
    },
    {
      title: 'Advanced Excel Skills',
      issuer: 'LinkedIn Learning',
      year: '2024',
      icon: 'fas fa-table',
    },
  ];

  return (
    <CertificationsWrapper id="certifications">
      <Container>
        <SectionTitle>Certifications</SectionTitle>
        <CertGrid>
          {certifications.map((cert, idx) => (
            <CertCard key={idx}>
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              <div className="issuer">{cert.issuer}</div>
              <div className="year">{cert.year}</div>
            </CertCard>
          ))}
        </CertGrid>
      </Container>
    </CertificationsWrapper>
  );
};
