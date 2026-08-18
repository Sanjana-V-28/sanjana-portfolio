import { Navbar, Footer } from './components';
import { GlobalStyles } from './theme/GlobalStyles';
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
      <Footer />
    </>
  );
}

export default App;
