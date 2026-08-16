import React from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import { Container, Section, SectionTitle } from '../components/CommonStyles';

const ProjectsWrapper = styled(Section)`
  background: ${colors.bgWhite};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -200px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08), transparent);
    border-radius: 50%;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${shadows.md};
  transition: ${transitions.default};
  border: 1px solid ${colors.borderColor};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
    border-color: ${colors.primary};

    .project-header {
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      color: white;

      .project-icon {
        color: white;
      }
    }

    .project-overlay {
      opacity: 1;
    }
  }

  .project-header {
    padding: 2rem;
    background: linear-gradient(135deg, ${colors.bgLight}, ${colors.bgWhite});
    transition: ${transitions.default};
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 120px;
  }

  .project-icon {
    font-size: 2.8rem;
    color: ${colors.primary};
    transition: ${transitions.default};
    flex-shrink: 0;
  }

  .project-header-content {
    flex: 1;

    h3 {
      font-size: 1.3rem;
      color: ${colors.textDark};
      margin-bottom: 0.5rem;
      font-weight: 700;
      transition: ${transitions.default};
    }

    .category {
      color: ${colors.primary};
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .project-body {
    padding: 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .project-description {
    color: ${colors.textLight};
    margin-bottom: 1.5rem;
    line-height: 1.7;
    flex-grow: 1;
    font-size: 0.95rem;
  }

  .project-stats {
    display: flex;
    justify-content: space-around;
    padding: 1.5rem 0;
    border-top: 1px solid ${colors.borderColor};
    margin-bottom: 1.5rem;

    .stat {
      text-align: center;

      .stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .stat-label {
        font-size: 0.8rem;
        color: ${colors.textLight};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    color: ${colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(102, 126, 234, 0.2);
    transition: ${transitions.default};

    &:hover {
      border-color: ${colors.primary};
      background: rgba(102, 126, 234, 0.15);
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      flex: 1;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
      text-align: center;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: ${transitions.default};
      cursor: pointer;

      &:first-child {
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
        color: white;
        border-color: transparent;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
      }

      &:last-child:hover {
        background: ${colors.primary};
        color: white;
      }
    }
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.05);
    opacity: 0;
    transition: ${transitions.default};
    pointer-events: none;
  }
`;

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Sales Analytics Dashboard',
      category: 'Dashboard',
      description: 'Interactive Power BI dashboard tracking sales performance across regions with real-time KPIs and trend analysis.',
      technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
      stats: { metrics: '15+', regions: '5', users: '50+' },
      icon: 'fas fa-chart-bar',
      link: '#',
      github: '#',
    },
    {
      title: 'Customer Behavior Analysis',
      category: 'Data Analysis',
      description: 'Comprehensive analysis using Python to identify purchasing patterns, segment customers, and predict churn.',
      technologies: ['Python', 'Pandas', 'Tableau', 'ML'],
      stats: { records: '100K+', segments: '8', accuracy: '92%' },
      icon: 'fas fa-users',
      link: '#',
      github: '#',
    },
    {
      title: 'Data Warehouse Project',
      category: 'Database',
      description: 'Designed and implemented enterprise data warehouse with ETL processes to consolidate data from multiple sources.',
      technologies: ['SQL', 'MySQL', 'Excel', 'SSIS'],
      stats: { tables: '20+', rows: '1M+', queries: '100+' },
      icon: 'fas fa-database',
      link: '#',
      github: '#',
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard key={idx}>
              <div className="project-header">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="project-header-content">
                  <div className="category">{project.category}</div>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                
                <div className="project-stats">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <div className="stat-value">{value}</div>
                      <div className="stat-label">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="tech-stack">
                  {project.technologies.map((tech, tidx) => (
                    <span key={tidx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link}>View Details</a>
                  <a href={project.github}>GitHub</a>
                </div>
              </div>
              <div className="project-overlay"></div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsWrapper>
  );
};
