import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Experience
      </h2>

      <div className="relative border-l border-slate-700 pl-6 sm:pl-10 space-y-10">
        {/* Item 1 */}
        <div className="relative">
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></span>

          <div className="bg-slate-800/60 hover:bg-slate-800 transition p-5 sm:p-6 rounded-xl border border-slate-700">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-base sm:text-lg text-white">
                Consultant - T-Systems ICT India
              </h3>
              <span className="text-sm text-slate-400">2025 - Present</span>
            </motion.div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></span>

          <div className="bg-slate-800/60 hover:bg-slate-800 transition p-5 sm:p-6 rounded-xl border border-slate-700">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-base sm:text-lg text-white">
                QA Analyst - Zimetrics
              </h3>
              <span className="text-sm text-slate-400">2023 - 2025</span>
            </motion.div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></span>

          <div className="bg-slate-800/60 hover:bg-slate-800 transition p-5 sm:p-6 rounded-xl border border-slate-700">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-base sm:text-lg text-white">
                Software Test Engineer - Infinite
              </h3>
              <span className="text-sm text-slate-400">2022 - 2023</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
