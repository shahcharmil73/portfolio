import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import { Link } from 'react-router-dom';
import SkillsGrid from "../SkillsGrid";
import ProjectsSection from "../ProjectsSection";




export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
    


      <ProjectsSection />
      <Footer />
    </>
  );
}
