import React from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import { Container, Section, SectionTitle, Card } from '../components/CommonStyles';

const AboutWrapper = styled(Section)`
  background: ${colors.bgLight};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  animation: fadeInLeft 0.8s ease-out;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const AboutIntro = styled.p`
  font-size: 1.1rem;
  color: ${colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const AboutDetail = styled.p`
  font-size: 1rem;
  color: ${colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const Stat = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: ${shadows.sm};
  transition: ${transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.md};
  }

  h3 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textLight};
    font-size: 0.9rem;
  }
`;

const AboutVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  animation: fadeInRight 0.8s ease-out;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const AboutCard = styled(Card)`
  text-align: center;
  padding: 2.5rem;

  .card-icon {
    font-size: 3rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    color: ${colors.textDark};
  }

  p {
    color: ${colors.textLight};
    font-size: 0.95rem;
  }
`;

export const AboutSection: React.FC = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>
            <AboutIntro>
              I'm a passionate Business Data Analytics graduate from Vivekananda Degree College, Bangalore, actively seeking a Full-Time Role. With a strong foundation in data analysis, visualization, and business intelligence, I transform complex data into meaningful insights.
            </AboutIntro>
            <AboutDetail>
              My expertise lies in SQL, Advanced Excel, Power BI, Tableau, and Python. I've successfully completed multiple data analytics job simulations and real-world projects that demonstrate my ability to solve business challenges through data-driven decision-making.
            </AboutDetail>
            <AboutStats>
              <Stat>
                <h3>3+</h3>
                <p>Major Projects</p>
              </Stat>
              <Stat>
                <h3>6</h3>
                <p>Skills Mastered</p>
              </Stat>
              <Stat>
                <h3>8.63</h3>
                <p>CGPA</p>
              </Stat>
            </AboutStats>
          </AboutText>
          <AboutVisual>
            <AboutCard>
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Driven</h3>
              <p>Transforming data into actionable insights</p>
            </AboutCard>
            <AboutCard>
              <div className="card-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Analytical Mind</h3>
              <p>Problem solving through data analysis</p>
            </AboutCard>
            <AboutCard>
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Growth Oriented</h3>
              <p>Eager to learn and apply new tools</p>
            </AboutCard>
          </AboutVisual>
        </AboutContent>
      </Container>
    </AboutWrapper>
  );
};
