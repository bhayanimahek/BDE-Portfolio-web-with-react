// src/components/Reveal.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, direction = "up", delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.8, 0.25, 1], // smooth ease
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
