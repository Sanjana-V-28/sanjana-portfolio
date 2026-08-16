import { GlobalStyles } from './theme/GlobalStyles';
import { Navbar } from './components';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  CertificationsSection,
  ContactSection,
} from './sections';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}

export default App;
