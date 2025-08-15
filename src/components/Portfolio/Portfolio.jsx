import React, { useState } from "react";
import "./Portfolio.css";
import { FaHandshake, FaChartLine, FaBullhorn, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Strategic Partnership for XYZ Corp",
    category: "Partnerships",
    description:
      "Developed and negotiated a partnership that boosted client acquisition by 45% within 6 months.",
    details:
      "This project involved identifying potential B2B partners, negotiating terms, and creating a mutually beneficial agreement. The campaign included co-branded marketing and cross-promotion strategies.",
    icon: <FaHandshake />,
  },
  {
    id: 2,
    title: "Market Expansion Campaign",
    category: "Campaigns",
    description:
      "Designed and executed a multi-channel campaign that increased brand awareness by 60%.",
    details:
      "Utilized social media ads, influencer partnerships, and targeted email campaigns to expand into three new regional markets. Monitored KPIs and optimized for maximum ROI.",
    icon: <FaBullhorn />,
  },
  {
    id: 3,
    title: "B2B Sales Strategy",
    category: "Strategies",
    description:
      "Implemented a sales strategy resulting in a 30% increase in lead conversions.",
    details:
      "Focused on lead nurturing through personalized follow-ups, CRM integration, and sales team training sessions to improve closing rates.",
    icon: <FaChartLine />,
  },
  {
    id: 4,
    title: "Event Collaboration Summit",
    category: "Events",
    description:
      "Managed a corporate event attracting 500+ industry leaders, fostering key networking opportunities.",
    details:
      "Organized keynote speeches, panel discussions, and B2B networking sessions. Partnered with sponsors and media outlets to ensure maximum visibility.",
    icon: <FaHandshake />,
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["All", "Partnerships", "Campaigns", "Strategies", "Events"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      id="portfolio"
      className="portfolio-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Portfolio
      </motion.h2>

      <motion.p
        className="portfolio-subtitle"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Showcasing impactful projects and collaborations that delivered measurable growth.
      </motion.p>
      <div className="portfolio-filters">
  {categories.map((cat) => (
    <motion.button
      key={cat}
      className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
      onClick={() => setSelectedCategory(cat)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {selectedCategory === cat ? `★ ${cat}` : cat}
    </motion.button>
  ))}
</div>

{/* Project Cards */}
<div className="portfolio-grid">
  {filteredProjects.map((project, index) => (
    <motion.div
      key={project.id}
      className="portfolio-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="icon">{project.icon}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <motion.button
        className="learn-more"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveProject(project)}
      >
        Learn More →
      </motion.button>
    </motion.div>
  ))}
</div>

{/* Modal Popup */}
<AnimatePresence>
  {activeProject && (
    <motion.div
      className="modal-overlay"
      onClick={() => setActiveProject(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="modal-close"
          onClick={() => setActiveProject(null)}
        >
          <FaTimes size={22} />
        </button>
        <div className="modal-icon">{activeProject.icon}</div>
        <h2>{activeProject.title}</h2>
        <p className="modal-category">📂 {activeProject.category}</p>
        <hr />
        <p className="modal-details">{activeProject.details}</p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    
    </motion.section>
  );
}


