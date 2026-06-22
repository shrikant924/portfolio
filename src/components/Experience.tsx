import { motion } from "framer-motion";
import tsystemsLogo from "../assets/t-system.jpg";
import zimetricsLogo from "../assets/zimterics.jpg";
import infiniteLogo from "../assets/infinite.png";

const experiences = [
  {
    company: "T-Systems ICT India Pvt. Ltd.",
    role: "Consultant (Full Stack Developer)",
    duration: "Feb 2025 - Present",
    logo: tsystemsLogo,
  },
  {
    company: "Zimetrics",
    role: "QA Analyst / Full Stack Development Exposure",
    duration: "Jan 2023 - Jan 2025",
    logo: zimetricsLogo,
  },
  {
    company: "Infinite Computer Solutions",
    role: "Software Test Engineer",
    duration: "Apr 2022 - Jan 2023",
    logo: infiniteLogo,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Professional Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-slate-300 dark:border-slate-700 pl-6 sm:pl-10 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[35px] top-7 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950 shadow-lg"></span>

            {/* Experience Card */}
            <div
              className="
                bg-gradient-to-br
                from-white
                to-slate-50
                dark:from-slate-800/70
                dark:to-slate-900/70
                backdrop-blur-md
                border border-slate-200 dark:border-slate-700
                rounded-2xl
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-100 shadow-md p-2 flex items-center justify-center flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {exp.company}
                  </p>

                  <span className="inline-block mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
