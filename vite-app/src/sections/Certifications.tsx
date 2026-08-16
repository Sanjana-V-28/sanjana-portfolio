import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const CertificationsWrapper = styled(Section)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const CertCard = styled.div`
  background: white;
  border: 2px solid ${colors.borderColor};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  transition: ${transitions.default};
  animation: fadeInUp 0.8s ease-out;
  text-align: center;
  cursor: pointer;
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

    .cert-icon {
      transform: rotateY(360deg) scale(1.1);
    }

    .cert-badge {
      transform: translateY(-10px);
    }
  }

  .cert-icon {
    font-size: 3.5rem;
    color: ${colors.primary};
    margin-bottom: 1.5rem;
    transition: ${transitions.default};
    display: inline-block;
  }

  h3 {
    font-size: 1.2rem;
    color: ${colors.textDark};
    margin-bottom: 0.8rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .issuer {
    color: ${colors.primary};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .cert-badge {
    display: inline-block;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
    padding: 0.6rem 1.4rem;
    border-radius: 25px;
    font-size: 0.85rem;
    margin-top: 1.2rem;
    font-weight: 600;
    transition: ${transitions.default};
    letter-spacing: 0.5px;
  }

  .cert-meta {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${colors.borderColor};
    font-size: 0.85rem;
    color: ${colors.textLight};
  }
`;

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      year: '2023',
      icon: 'fas fa-chart-line',
      verified: true,
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2023',
      icon: 'fas fa-chart-pie',
      verified: true,
    },
    {
      title: 'SQL for Data Analysis',
      issuer: 'Coursera',
      year: '2023',
      icon: 'fas fa-database',
      verified: true,
    },
    {
      title: 'Python for Business Analytics',
      issuer: 'DataCamp',
      year: '2024',
      icon: 'fas fa-python',
      verified: true,
    },
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      year: '2024',
      icon: 'fas fa-chart-bar',
      verified: true,
    },
    {
      title: 'Advanced Excel Skills',
      issuer: 'LinkedIn Learning',
      year: '2024',
      icon: 'fas fa-table',
      verified: true,
    },
  ];

  return (
    <CertificationsWrapper id="certifications">
      <Container>
        <SectionTitle>Certifications & Achievements</SectionTitle>
        <CertGrid>
          {certifications.map((cert, idx) => (
            <CertCard key={idx}>
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              <div className="issuer">
                <i className="fas fa-award" style={{ marginRight: '0.5rem' }}></i>
                {cert.issuer}
              </div>
              <div className="cert-badge">
                {cert.verified && <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>}
                Verified
              </div>
              <div className="cert-meta">
                <i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>
                {cert.year}
              </div>
            </CertCard>
          ))}
        </CertGrid>
      </Container>
    </CertificationsWrapper>
  );
};
