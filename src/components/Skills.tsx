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
    <section id="skills" className="max-w-6xl mx-auto py-24">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-slate-800 p-4 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
