import { Navbar, Footer } from './components';
import { AppThemeProvider } from './theme/ThemeContext';
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
    <AppThemeProvider>
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
    </AppThemeProvider>
  );
}

export default App;
