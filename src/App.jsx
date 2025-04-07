import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectSection from './components/ProjectSection';
import EducationSection from './components/Education';
import SkillSlider from './components/SkillSlider';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <About />
        <SkillSlider />
        <Experience />
        <ProjectSection />
        <EducationSection />
        <Footer />
    </>
  );
}

export default App;
