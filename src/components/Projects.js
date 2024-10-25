const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-3">Project One</h3>
            <p className="text-gray-400 mb-4">
              Conducted a small project on Enterpreneurship.
            </p>
            <a href="/ecoproject.pdf" target='_blank' className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Additional Project Cards */}
          <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-3">Project Two</h3>
            <p className="text-gray-400 mb-4">
              School Management System using Python and MySql
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-3">Project Three</h3>
            <div className="text-gray-400 mb-4">
              <p>
                Developed a data-driven system utilizing NumPy to analyze motion
                data and visualize search results for life detection in space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
