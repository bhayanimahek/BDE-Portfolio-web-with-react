

import React from "react";
import "./About.css";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import Reveal from "../Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      {/* Title */}
      <Reveal direction="up">
        <h2 className="about-title">About Me</h2>
      </Reveal>

      {/* Intro */}
      <Reveal direction="up" delay={0.1}>
        <p className="about-intro">
          I am a dynamic and results-driven{" "}
          <span className="highlight-name ">
            Business Development Executive
          </span>{" "}
          with expertise in market research, client relationship management, and
          strategic sales. With proven experience in international client
          handling, I specialize in creating opportunities that drive
          sustainable business growth.
        </p>
      </Reveal>

      {/* Highlights */}
      <div className="about-highlights">
        {[
          {
            icon: <FaBriefcase className="highlight-icon" />,
            title: "Business Development & Sales Expertise",
            desc: "Proven record of driving revenue and client acquisition.",
            delay: 0.15,
          },
          {
            icon: <FaBriefcase className="highlight-icon" />,
            title: "Technical Skills",
            desc: "Proficient in JavaScript, SQL, Python, and full-stack web development.",
            delay: 0.2,
          },
          {
            icon: <FaBriefcase className="highlight-icon" />,
            title: "International Client Handling",
            desc: "Skilled in managing US-region clients with effective communication.",
            delay: 0.25,
          },
          {
            icon: <FaCertificate className="highlight-icon" />,
            title: "Certified Professional",
            desc: "Microsoft Career Essentials in Data Analysis, IBM Project Management Fundamentals.",
            delay: 0.3,
          },
        ].map((item, index) => (
          <Reveal
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={item.delay}
          >
            <div className="highlight-card">
              {item.icon}
              <p>
                <strong>{item.title}</strong> – {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Experience */}
      <Reveal direction="left" delay={0.1}>
        <h3 className="subheading">Experience Snapshot</h3>
      </Reveal>

      <div className="about-experience">
        <Reveal direction="left" delay={0.15}>
          <div className="exp-card">
            <h4>Business Development Executive</h4>
            <p>My Equation, Ahmedabad (2025–Present)</p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div className="exp-card">
            <h4>Sales Executive</h4>
            <p>Akshar Travels Pvt Ltd (2023–2025)</p>
          </div>
        </Reveal>
      </div>

      {/* Education */}
      <Reveal direction="left" delay={0.1}>
        <h3 className="subheading">Education & Certifications</h3>
      </Reveal>

      <div className="about-education">
        {[
          {
            icon: <FaGraduationCap className="edu-icon" />,
            text: "Bachelor’s in ICT – GTU (2026)",
            delay: 0.15,
          },
          {
            icon: <FaGraduationCap className="edu-icon" />,
            text: "Diploma in Computer Engineering – GTU (2022)",
            delay: 0.2,
          },
          {
            icon: <FaCertificate className="edu-icon" />,
            text: "Microsoft Career Essentials in Data Analysis",
            delay: 0.25,
          },
          {
            icon: <FaCertificate className="edu-icon" />,
            text: "IBM Project Management Fundamentals",
            delay: 0.3,
          },
        ].map((item, index) => (
          <Reveal
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={item.delay}
          >
            <div className="edu-card">
              {item.icon}
              <p>{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {/* CTA Buttons */}
        <Reveal direction="up" delay={0.2}>
          <div className="about-btn-group">
            <a href="../..assets/gunjal.pdf" download="gunjal.pdf"  className="about-btn">
              Download Resume
            </a>
            <button
              className="about-btn contact-more-btn"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact for More Information
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
