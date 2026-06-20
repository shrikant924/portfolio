import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn = ({ children }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
