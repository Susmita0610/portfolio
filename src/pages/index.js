import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import EducationBackground from "@/components/EducationBackground";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
      <section id="publications" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Paper/Patent Publications</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Details of any published papers or patents can be added here.
          </p>
        </div>
      </section>

      {/* Awards and Achievements */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Awards and Achievements</h2>
          <div className="bg-gray-700 p-5 rounded-lg">
            <p>Smart India Hackathon Finalist</p>
            <p>Geeks United HITK Coordinator</p>
            <p>Google Developer Club Core Member</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Membership */}
      <section id="membership" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Membership</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Member of various technical communities and developer clubs.
          </p>
        </div>
      </section>

      {/* Research Thrust Area */}
      <section id="research" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Research Thrust Area</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            My research interests include blockchain technology, decentralized
            applications, and scalable software architectures.
          </p>
        </div>
      </section>

      {/* List of Events (Organized/Attended) */}
      <section id="events" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">
            List of Events (Organized/Attended)
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Details of the events I have organized or attended, including
            workshops, hackathons, and webinars.
          </p>
        </div>
      </section>

      {/* Poster/Paper Presentation */}
      <section id="presentation" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Poster/Paper Presentation</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Information about the posters or papers presented at various
            conferences or seminars.
          </p>
        </div>
      </section>

      {/* Courses Completed */}
      <section id="courses" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">
            Courses Completed (NPTEL/COURSERA/LinkedIn Learning)
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            List of courses completed, such as NPTEL, Coursera, and LinkedIn
            Learning certifications.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
