

// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import caseStudies from "../CaseStudiesData";
// import "./CaseStudiesDetail.css";

// const CaseStudiesDetail = () => {
//   const { id } = useParams();
//   const study = caseStudies.find((cs) => cs.id === parseInt(id));

//   // Scroll to top on load
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!study) {
//     return (
//       <div className="case-not-found">
//         <h2>Case Study Not Found</h2>
//         <Link to="/#case-studies">← View Case Studies</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="case-detail">
//       {/* Banner */}
//       <div className="case-banner">
//         <img src={study.thumbnail} alt={study.title} className="banner-img" />
//         <div className="banner-overlay"></div>
//         <motion.div
//           className="banner-text"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1>{study.title}</h1>
//           <p>
//             <strong>Client:</strong> {study.client} | {study.date}
//           </p>
//         </motion.div>
//       </div>

//       <div className="case-content">
//         {/* Problem + Result */}
//         <div className="case-summary">
//           <motion.div
//             className="summary-card problem"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2>🚩 Problem</h2>
//             <p>{study.problem}</p>
//           </motion.div>

//           <motion.div
//             className="summary-card result"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2>🏆 Result</h2>
//             <p>{study.result}</p>
//           </motion.div>
//         </div>

//         {/* Challenge */}
//         {study.details.challenge && (
//           <motion.div
//             className="case-section"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2>💡 Business Challenge</h2>
//             <p>{study.details.challenge}</p>
//           </motion.div>
//         )}

//         {/* Objectives */}
//         {study.details.objectives?.length > 0 && (
//           <motion.div
//             className="case-section"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h2>🎯 Objectives</h2>
//             <ul>
//               {study.details.objectives.map((obj, i) => (
//                 <li key={i}>{obj}</li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {/* Solution */}
//         {study.details.solution?.length > 0 && (
//           <motion.div
//             className="case-section"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             <h2>🛠 Solution</h2>
//             <ul>
//               {study.details.solution.map((sol, i) => (
//                 <li key={i}>{sol}</li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {/* Results */}
//         {study.details.results?.length > 0 && (
//           <motion.div
//             className="case-section results"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h2>📊 Results</h2>
//             <div className="results-grid">
//               {study.details.results.map((res, i) => (
//                 <div key={i} className="result-item">
//                   <h3>{res.value}</h3>
//                   <p>{res.label}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Conclusion */}
//         {study.details.conclusion && (
//           <motion.div
//             className="case-section conclusion"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//           >
//             <h2>📝 Conclusion</h2>
//             <blockquote>{study.details.conclusion}</blockquote>
//           </motion.div>
//         )}

//         {/* View All Case Studies Link */}
//         <div className="view-link" style={{ marginTop: "3rem", marginBottom: "4rem" }}>
//           <Link
//             to="/#case-studies"
//             className="view-link-text"
//             style={{ fontSize: "1.4rem", fontWeight: "700" }}
//           >
//             ← Back to Case Studies
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesDetail;


// components/CaseStudies/CaseStudiesDetails/CaseStudiesDetail.jsx

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "../CaseStudiesData";
import "./CaseStudiesDetail.css";

const CaseStudiesDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((cs) => cs.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!study) {
    return (
      <div className="case-not-found">
        <h2>Case Study Not Found</h2>
        <Link to="/#case-studies">← Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <section className="case-detail">
      {/* Banner */}
      <div className="case-banner">
        <img src={study.thumbnail} alt={study.title} className="banner-img" />
        <div className="banner-overlay"></div>
        <motion.div
          className="banner-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>{study.title}</h1>
          <p>
            <strong>Client:</strong> {study.client} | {study.date}
          </p>
        </motion.div>
      </div>

      <div className="case-content">
        {/* Problem + Result */}
        <div className="case-summary">
          <motion.div
            className="summary-card problem"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>🚩 Problem</h2>
            <p>{study.problem}</p>
          </motion.div>
          <motion.div
            className="summary-card result"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>🏆 Result</h2>
            <p>{study.result}</p>
          </motion.div>
        </div>

        {/* Challenge */}
        <motion.div
          className="case-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>💡 Business Challenge</h2>
          <p>{study.details.challenge}</p>
        </motion.div>

        {/* Objectives */}
        {study.details.objectives?.length > 0 && (
          <motion.div
            className="case-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>🎯 Objectives</h2>
            <ul>
              {study.details.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Solution */}
        {study.details.solution?.length > 0 && (
          <motion.div
            className="case-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 >🛠 Solution</h2>
            <ul>
              {study.details.solution.map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Results */}
        {study.details.results?.length > 0 && (
          <motion.div
            className="case-section results"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 >📊 Results</h2>
            <div className="results-grid">
              {study.details.results.map((res, i) => (
                <div key={i} className="result-item">
                  <h3>{res.value}</h3>
                  <p>{res.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Testimonial */}
        {study.details.testimonial && (
          <motion.div
            className="case-section testimonial"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <blockquote>
              “{study.details.testimonial.quote}”
              <footer>— {study.details.testimonial.author}</footer>
            </blockquote>
          </motion.div>
        )}

        {/* Conclusion */}
        {study.details.conclusion && (
          <motion.div
            className="case-section conclusion"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>📝 Conclusion</h2>
            <blockquote>{study.details.conclusion}</blockquote>
          </motion.div>
        )}

        {/* Back Link */}
        <div className="view-link" style={{ marginTop: "3rem" }}>
          <Link to="/#case-studies" className="view-link-text" style={{ fontSize: "1.3rem" }}>
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesDetail;
