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
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Professional Experience
      </h2>

      <div className="relative border-l border-slate-700 pl-6 sm:pl-10 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[33px] top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></span>

            {/* Card */}
            <div className="bg-slate-800/60 hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 p-6 rounded-xl border border-slate-700">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Company Logo */}
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 rounded-xl bg-white p-2 object-contain flex-shrink-0"
                />

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {exp.role}
                  </h3>

                  <p className="text-blue-400 text-sm mt-1">{exp.company}</p>

                  <span className="text-sm text-slate-400">{exp.duration}</span>
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
