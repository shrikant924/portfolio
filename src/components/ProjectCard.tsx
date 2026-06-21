import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800/60 border border-slate-700 rounded-xl p-6"
    >
      <h3 className="font-semibold text-lg sm:text-xl text-white">{title}</h3>

      <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ProjectCard;
