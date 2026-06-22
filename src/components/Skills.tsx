import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaJenkins,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiKubernetes,
  SiMan,
  SiJira,
  SiPostman,
  SiSwagger,
  SiJunit5,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Framework", icon: <SiSpringboot /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Microservices", icon: <SiSpringboot /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Elasticsearch", icon: <SiElasticsearch /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Maven", icon: <SiMan /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "Agile Scrum", icon: "🚀" },
  { name: "CI/CD Pipelines", icon: "⚙️" },
  { name: "Unit Testing", icon: <SiJunit5 /> },
  { name: "Automation Testing Frameworks", icon: "🧪" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-white"
      >
        Skills & Technologies
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.03,
            }}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-3
              px-5 py-3
              rounded-full
              bg-white/80
              dark:bg-slate-800/60
              backdrop-blur-sm
              border border-slate-200 dark:border-slate-700
              shadow-md hover:shadow-xl
              transition-all duration-300
              text-slate-900 dark:text-slate-200
            "
          >
            <span className="text-xl flex items-center justify-center">
              {skill.icon}
            </span>

            <span className="font-medium text-sm sm:text-base">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
