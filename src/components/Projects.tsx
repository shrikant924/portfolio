const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold text-xl">InPen 2.0</h3>

          <p className="mt-3">
            Diabetes management application with insulin calculations, reminders
            and therapy reporting.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold text-xl">Tata Play Binge</h3>

          <p className="mt-3">
            OTT streaming platform delivering entertainment content through a
            unified ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
