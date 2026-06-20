const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Project 1 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            InPen 2.0
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Diabetes management application with insulin calculations, reminders
            and therapy reporting.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            Tata Play Binge
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            OTT streaming platform delivering entertainment content through a
            unified ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
