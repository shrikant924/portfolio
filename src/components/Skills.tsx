const skills = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "JavaScript",
  "Microservices",
  "Kafka",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm sm:text-base bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-full text-slate-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
