import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="footer-logo">
          <span className="footer-logo-first">Business Development Executive</span>
          <span className="footer-logo-second">Portfolio</span>
        </div>
        <div className="footer-social">
          <a href="mailto:gunjalpanchal847@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/GUNJALPANCHAL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gunjal-panchal-108770185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="footer-arrow"
          onClick={scrollToHero}
          aria-label="Scroll to Hero Section"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
        <p>
          &copy; {new Date().getFullYear()} Business Development Executive
          Portfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
