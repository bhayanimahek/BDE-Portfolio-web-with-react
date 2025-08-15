

import React from "react";
import {
  FaHandshake,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaLaptop,
  FaComments,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "Lead Generation", icon: <FaHandshake />, level: 90 },
    { name: "Market Research", icon: <FaSearch />, level: 85 },
    { name: "Client Relationship Management", icon: <FaUsers />, level: 88 },
    { name: "Negotiation & Sales Strategy", icon: <FaChartLine />, level: 92 },
    { name: "CRM Tools (HubSpot, Salesforce)", icon: <FaLaptop />, level: 80 },
    { name: "Communication & Presentation", icon: <FaComments />, level: 95 },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            {/* Animated Icon */}
            <motion.div
              className="skill-icon"
              animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {skill.icon}
            </motion.div>

            <h3 className="skill-name">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>

            <motion.span
              className="skill-level"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.3 }}
            >
              {skill.level}%
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
