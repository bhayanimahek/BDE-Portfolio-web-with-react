

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "./CaseStudiesData";
import "./Casestudies.css";

const CaseStudies = () => {
  return (
    <section className="case-section" id="case-studies">
      {/* Section Heading */}
      <motion.h3
        className="case-title"
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.7 }}
      >
        Case Studies
      </motion.h3>

      {/* Intro Paragraphs */}
      <motion.p
        className="case-subtitle"
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.7 }}
      >
        <strong>Every business deal tells a story</strong> — a story of challenges, strategy,
        and determination. <strong> Gunjal Panchal</strong> writes these case studies to share not just the results,
        but also the thought process, tactics, and small wins that lead to
        <em> massive success</em>. Each case study is designed to inspire Business Development Executives,
        sales teams, and entrepreneurs who want to close bigger deals — faster, smarter, and with confidence.
      </motion.p>

      <motion.p
        className="case-intro-extra"
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.7 }}
      >
        By revealing the behind-the-scenes decisions, obstacles, and breakthroughs, these stories
        provide you with actionable insights and proven frameworks you can apply to your own business journey.
        These are not just wins — they are <strong>blueprints for growth</strong>.
      </motion.p>

      {/* Case Studies List */}
      <div className="case-list">
        {caseStudies.map((study, index) => {
          const isSecond = index % 2 === 1;
          const fromImage = isSecond ? 140 : -140;
          const fromText = isSecond ? -140 : 140;

          return (
            <motion.article
              key={study.id}
              className={`case-item ${isSecond ? "reverse" : ""}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* Image */}
              <motion.div
                className="case-image"
                initial={{ opacity: 0, x: fromImage, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 60, damping: 18 }}
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Link to={`/case-studies/${study.id}`}>
                  <img src={study.thumbnail} alt={study.title} />
                  <div className="image-overlay"></div>
                </Link>
              </motion.div>

              {/* Text */}
              <motion.div
                className="case-info"
                initial={{ opacity: 0, x: fromText, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  {study.title}
                </motion.h3>

                <motion.p
                  className="case-client"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <strong>Client:</strong> {study.client} &nbsp; | &nbsp; {study.date}
                </motion.p>

                <motion.p
                  className="case-abstract"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  {study.abstract}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link to={`/case-studies/${study.id}`} className="case-link">
                    View Case Study →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
