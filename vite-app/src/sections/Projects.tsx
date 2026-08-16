import React from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import { Container, Section, SectionTitle, Button, Grid } from '../components/CommonStyles';

const ProjectsWrapper = styled(Section)`
  background: ${colors.bgWhite};
`;

const ProjectCard = styled.div`
  background: ${colors.bgWhite};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${shadows.md};
  transition: ${transitions.default};
  border: 1px solid ${colors.borderColor};
  display: flex;
  flex-direction: column;
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

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadows.lg};
  }

  .project-icon {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: ${colors.textDark};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textLight};
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    background: ${colors.bgLight};
    color: ${colors.primary};
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      flex: 1;
      text-decoration: none;
    }
  }
`;

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Sales Analytics Dashboard',
      description: 'Created an interactive Power BI dashboard tracking sales performance across regions. Implemented KPIs and trend analysis.',
      technologies: ['Power BI', 'SQL', 'Excel'],
      icon: 'fas fa-chart-bar',
      link: '#',
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Analyzed customer data using Python (Pandas, Matplotlib) to identify purchasing patterns and segment customers.',
      technologies: ['Python', 'Pandas', 'Tableau'],
      icon: 'fas fa-users',
      link: '#',
    },
    {
      title: 'Data Warehouse Project',
      description: 'Designed and implemented a data warehouse using SQL with ETL processes to consolidate data from multiple sources.',
      technologies: ['SQL', 'MySQL', 'Excel'],
      icon: 'fas fa-database',
      link: '#',
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Grid columns={3}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx}>
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, tidx) => (
                  <span key={tidx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Button variant="primary" as="a" href={project.link}>View Details</Button>
              </div>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsWrapper>
  );
};
