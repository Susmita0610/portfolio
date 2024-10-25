import AboutMe from "@/components/AboutMe";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Course from "@/components/Course";
import EducationBackground from "@/components/EducationBackground";
import Events from "@/components/Events";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Posterpatent from "@/components/Posterpatent";
import Posterprep from "@/components/Posterprep";
import Projects from "@/components/Projects";
import Research from "@/components/Research";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <AboutMe />
      {/* Education Background */}
      <EducationBackground />

      {/* Experience */}
      <Experience/>
      

      {/* Paper/Patent Publications */}
      <Posterpatent/>

      {/* Awards and Achievements */}
      <Awards/>

      {/* Projects Section */}
      <Projects/>

      {/* Membership */}
      <Membership/>

      {/* Research Thrust Area */}
      <Research/>

      {/* List of Events (Organized/Attended) */}
      <Events/>

      {/* Poster/Paper Presentation */}
      <Posterprep/>

      {/* Courses Completed */}
      <Course/>
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
