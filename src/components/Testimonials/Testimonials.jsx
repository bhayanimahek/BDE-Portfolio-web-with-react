// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Testimonials.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// /** Star with unique gradient id to avoid collisions */
// const Star = ({
//   filled,
//   onClick,
//   onHover,
//   onFocus,
//   idSuffix,
//   size = 22,
//   disabled,
// }) => {
//   const gradId = `goldGradient-${idSuffix}`;
//   return (
//     <svg
//       onClick={disabled ? undefined : onClick}
//       onMouseEnter={disabled ? undefined : onHover}
//       onFocus={disabled ? undefined : onFocus}
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill={filled ? `url(#${gradId})` : "none"}
//       stroke="#fbbf24"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       style={{
//         cursor: disabled ? "default" : "pointer",
//         transition: "transform .18s ease",
//       }}
//       className={filled ? "star-filled-pop" : ""}
//       aria-hidden="true"
//     >
//       <defs>
//         <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#FFD700" />
//           <stop offset="100%" stopColor="#FFA500" />
//         </linearGradient>
//       </defs>
//       <polygon
//         points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 
//                        5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//       />
//     </svg>
//   );
// };

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Rahul Mehta",
//       position: "CEO, TechWave Solutions",
//       text: "Gunjal’s strategic approach to business development has been a game-changer for our company. His ability to understand client needs and close deals is exceptional.",
//     },
//     {
//       name: "Ananya Sharma",
//       position: "Marketing Director, GrowthSpark",
//       text: "Working with Gunjal was an absolute pleasure. His professionalism, communication skills, and market insights are truly commendable.",
//     },
//     {
//       name: "Vikram Singh",
//       position: "Founder, InnovateX",
//       text: "Thanks to Gunjal’s efforts, we secured key partnerships that significantly boosted our growth. A results-driven professional through and through.",
//     },
//   ];

//   // Ratings data (last row is interactive)
//   const [ratings, setRatings] = useState([
//     { label: "SaaS Growth Consulting", score: 5 },
//     { label: "E-Commerce Strategy", score: 4.8 },
//     { label: "B2B Manufacturing Leads", score: 4.9 },
//     { label: "Startup Fundraising Guidance", score: 4.7 },
//     { label: "Your Rating", score: 0, userInteractive: true, locked: false },
//   ]);

//   // Hovered star for preview (only for the interactive row)
//   const [hoverRating, setHoverRating] = useState(0);

//   // Modal states
//   const [showModal, setShowModal] = useState(false);
//   const [pendingScore, setPendingScore] = useState(0);
//   const [modalState, setModalState] = useState("confirm"); // "confirm" | "success"

//   // Animation refs
//   const leftTitleRef = useRef(null);
//   const rightTitleRef = useRef(null);
//   const ratingsRef = useRef(null);

//   const [leftTitleInView, setLeftTitleInView] = useState(false);
//   const [rightTitleInView, setRightTitleInView] = useState(false);
//   const [panelInView, setPanelInView] = useState(false);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Load user rating if previously submitted
//   useEffect(() => {
//     const stored = localStorage.getItem("userRating");
//     if (stored) {
//       const val = parseFloat(stored);
//       setRatings((prev) =>
//         prev.map((r) =>
//           r.userInteractive ? { ...r, score: val, locked: true } : r
//         )
//       );
//     } else {
//       // Ensure default 0 & unlocked if nothing in storage
//       setRatings((prev) =>
//         prev.map((r) =>
//           r.userInteractive ? { ...r, score: 0, locked: false } : r
//         )
//       );
//     }
//   }, []);

//   // Observe headings for underline animation
//   useEffect(() => {
//     const mkObs = (cb, th = 0.6) =>
//       new IntersectionObserver(([entry]) => cb(entry.isIntersecting), {
//         threshold: th,
//       });

//     const leftObs = mkObs(setLeftTitleInView, 0.6);
//     const rightObs = mkObs(setRightTitleInView, 0.6);
//     const panelObs = mkObs(setPanelInView, 0.35);

//     if (leftTitleRef.current) leftObs.observe(leftTitleRef.current);
//     if (rightTitleRef.current) rightObs.observe(rightTitleRef.current);
//     if (ratingsRef.current) panelObs.observe(ratingsRef.current);

//     return () => {
//       if (leftTitleRef.current) leftObs.unobserve(leftTitleRef.current);
//       if (rightTitleRef.current) rightObs.unobserve(rightTitleRef.current);
//       if (ratingsRef.current) panelObs.unobserve(ratingsRef.current);
//     };
//   }, []);

//   // Handle star click for interactive row
//   const handleStarClick = (score, isLocked) => {
//     if (isLocked) return;
//     setPendingScore(score);
//     setModalState("confirm");
//     setShowModal(true);
//   };

//   // Confirm submission
//   const confirmRating = () => {
//     setRatings((prev) =>
//       prev.map((r) =>
//         r.userInteractive ? { ...r, score: pendingScore, locked: true } : r
//       )
//     );
//     localStorage.setItem("userRating", String(pendingScore));
//     setModalState("success");
//   };

//   // Cancel submission → reset to 0 (and ensure not saved)
//   const cancelRating = () => {
//     setShowModal(false);
//     setPendingScore(0);
//     setHoverRating(0);
//     setRatings((prev) =>
//       prev.map((r) =>
//         r.userInteractive ? { ...r, score: 0, locked: false } : r
//       )
//     );
//     localStorage.removeItem("userRating");
//   };

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4500,
//     arrows: false,
//     fade: true,
//     cssEase: "ease-in-out",
//     beforeChange: (_, next) => setActiveIndex(next),
//   };

//   return (
//     <>
//       <section className="testimonials-wrapper" id="testimonials">
//         {/* LEFT: Testimonials */}
//         <div className="testimonial-left">
//           <h2
//             ref={leftTitleRef}
//             className={`testimonials-title ${
//               leftTitleInView ? "underline-animate" : ""
//             }`}
//           >
//             What Clients Say
//           </h2>

//           <Slider
//             {...settings}
//             className="testimonials-slider"
//             aria-live="polite"
//           >
//             {testimonials.map((t, i) => (
//               <div key={i}>
//                 <AnimatePresence mode="wait">
//                   {activeIndex === i && (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -30 }}
//                       transition={{ duration: 0.6 }}
//                       className="testimonial-card"
//                     >
//                       <motion.div
//                         className="quote-mark"
//                         initial={{ scale: 0, rotate: -10 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         transition={{
//                           delay: 0.15,
//                           type: "spring",
//                           stiffness: 140,
//                         }}
//                       >
//                         “
//                       </motion.div>
//                       <p className="testimonial-text">{t.text}</p>
//                       <h3 className="testimonial-name">{t.name}</h3>
//                       <span className="testimonial-position">{t.position}</span>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* RIGHT: About + Ratings */}
//         <div className="ratings-section" ref={ratingsRef}>
         

//           <h2
//             ref={rightTitleRef}
//             className={`ratings-title ${
//               rightTitleInView ? "underline-animate" : ""
//             }`}
//           >
//             Impact & Ratings
//           </h2>

//           <p className="ratings-subtext" >
//             A quick pulse of results across domains — each row reflects real
//             client feedback. Add yours to the last row to shape the story.
//           </p>

//           {ratings.map((rating, idx) => {
//             // For interactive row: preview hover if not locked
//             const isInteractive = !!rating.userInteractive;
//             const isLocked = !!rating.locked;

//             const displayScore =
//               isInteractive && !isLocked && hoverRating > 0
//                 ? hoverRating
//                 : rating.score;

//             return (
//               <div
//                 key={idx}
//                 className={`rating-row ${panelInView ? "in-view" : ""}`}
//                 style={{
//                   transitionDelay: panelInView ? `${idx * 120}ms` : "0ms",
//                 }}
//                 onMouseLeave={() => {
//                   if (isInteractive && !isLocked) setHoverRating(0);
//                 }}
//               >
//                 <div className="rating-label">
//                   {rating.label} ⭐ {Number(displayScore).toFixed(1)}
//                 </div>

//                 <div
//                   className="stars"
//                   role={isInteractive ? "radiogroup" : undefined}
//                   aria-label={rating.label}
//                 >
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       idSuffix={`${idx}-${star}`}
//                       filled={star <= displayScore}
//                       disabled={!isInteractive || isLocked}
//                       onClick={
//                         isInteractive && !isLocked
//                           ? () => handleStarClick(star, isLocked)
//                           : undefined
//                       }
//                       onHover={
//                         isInteractive && !isLocked
//                           ? () => setHoverRating(star)
//                           : undefined
//                       }
//                       onFocus={
//                         isInteractive && !isLocked
//                           ? () => setHoverRating(star)
//                           : undefined
//                       }
//                     />
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Modal */}
//       {showModal && (
//         <div className="rating-modal-backdrop" role="dialog" aria-modal="true">
//           <div className="rating-modal">
//             {modalState === "confirm" ? (
//               <>
//                 <h3>Do you want to Submit Your Rating?</h3>
//                 <p>
//                   You selected {pendingScore} star{pendingScore > 1 ? "s" : ""}.
//                 </p>
//                 <div className="modal-actions">
//                   <button className="modal-btn confirm" onClick={confirmRating}>
//                     if Yes, Submit
//                   </button>
//                   <button className="modal-btn cancel" onClick={cancelRating}>
//                     No, Cancel
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3>Thanks! 🎉</h3>
//                 <p>Your rating has been saved successfully.</p>
//                 <div className="modal-actions">
//                   <button
//                     className="modal-btn confirm"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** Star with unique gradient id to avoid collisions */
const Star = ({
  filled,
  onClick,
  onHover,
  onFocus,
  idSuffix,
  size = 22,
  disabled,
}) => {
  const gradId = `goldGradient-${idSuffix}`;
  return (
    <svg
      onClick={disabled ? undefined : onClick}
      onMouseEnter={disabled ? undefined : onHover}
      onFocus={disabled ? undefined : onFocus}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? `url(#${gradId})` : "none"}
      stroke="#fbbf24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        cursor: disabled ? "default" : "pointer",
        transition: "transform .18s ease",
      }}
      className={filled ? "star-filled-pop" : ""}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 
                       5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      position: "CEO, TechWave Solutions",
      text: "Gunjal’s strategic approach to business development has been a game-changer for our company. His ability to understand client needs and close deals is exceptional.",
    },
    {
      name: "Ananya Sharma",
      position: "Marketing Director, GrowthSpark",
      text: "Working with Gunjal was an absolute pleasure. His professionalism, communication skills, and market insights are truly commendable.",
    },
    {
      name: "Vikram Singh",
      position: "Founder, InnovateX",
      text: "Thanks to Gunjal’s efforts, we secured key partnerships that significantly boosted our growth. A results-driven professional through and through.",
    },
  ];

  const [ratings, setRatings] = useState([
    { label: "SaaS Growth Consulting", score: 5 },
    { label: "E-Commerce Strategy", score: 4.8 },
    { label: "B2B Manufacturing Leads", score: 4.9 },
    { label: "Startup Fundraising Guidance", score: 4.7 },
    { label: "Your Rating", score: 0, userInteractive: true, locked: false },
  ]);

  const [hoverRating, setHoverRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pendingScore, setPendingScore] = useState(0);
  const [modalState, setModalState] = useState("confirm");

  const leftTitleRef = useRef(null);
  const rightTitleRef = useRef(null);
  const ratingsRef = useRef(null);

  const [leftTitleInView, setLeftTitleInView] = useState(false);
  const [rightTitleInView, setRightTitleInView] = useState(false);
  const [panelInView, setPanelInView] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("userRating");
    if (stored) {
      const val = parseFloat(stored);
      setRatings((prev) =>
        prev.map((r) =>
          r.userInteractive ? { ...r, score: val, locked: true } : r
        )
      );
    }
  }, []);

  useEffect(() => {
    const mkObs = (cb, th = 0.6) =>
      new IntersectionObserver(([entry]) => cb(entry.isIntersecting), {
        threshold: th,
      });

    const leftObs = mkObs(setLeftTitleInView, 0.6);
    const rightObs = mkObs(setRightTitleInView, 0.6);
    const panelObs = mkObs(setPanelInView, 0.35);

    if (leftTitleRef.current) leftObs.observe(leftTitleRef.current);
    if (rightTitleRef.current) rightObs.observe(rightTitleRef.current);
    if (ratingsRef.current) panelObs.observe(ratingsRef.current);

    return () => {
      if (leftTitleRef.current) leftObs.unobserve(leftTitleRef.current);
      if (rightTitleRef.current) rightObs.unobserve(rightTitleRef.current);
      if (ratingsRef.current) panelObs.unobserve(ratingsRef.current);
    };
  }, []);

  const handleStarClick = (score, isLocked) => {
    if (isLocked) return;
    setPendingScore(score);
    setModalState("confirm");
    setShowModal(true);
  };

  const confirmRating = () => {
    setRatings((prev) =>
      prev.map((r) =>
        r.userInteractive ? { ...r, score: pendingScore, locked: true } : r
      )
    );
    localStorage.setItem("userRating", String(pendingScore));
    setModalState("success");
  };

  const cancelRating = () => {
    setShowModal(false);
    setPendingScore(0);
    setHoverRating(0);
    setRatings((prev) =>
      prev.map((r) =>
        r.userInteractive ? { ...r, score: 0, locked: false } : r
      )
    );
    localStorage.removeItem("userRating");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <>
      <section className="testimonials-wrapper" id="testimonials">
        {/* LEFT */}
        <div className="testimonial-left">
          <h2
            ref={leftTitleRef}
            className={`testimonials-title ${
              leftTitleInView ? "underline-animate" : ""
            }`}
          >
            What Clients Say
          </h2>

          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((t, i) => (
              <div key={i}>
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="testimonial-card"
                    >
                      <motion.div
                        className="quote-mark"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.15,
                          type: "spring",
                          stiffness: 140,
                        }}
                      >
                        “
                      </motion.div>
                      <p className="testimonial-text">{t.text}</p>
                      <h3 className="testimonial-name">{t.name}</h3>
                      <span className="testimonial-position">{t.position}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Slider>
        </div>

        {/* RIGHT */}
        <div className="ratings-section" ref={ratingsRef}>
          <h2
            ref={rightTitleRef}
            className={`ratings-title ${
              rightTitleInView ? "underline-animate" : ""
            }`}
          >
            Impact & Ratings
          </h2>

          <p className="ratings-subtext">
            A quick pulse of results across domains — each row reflects real
            client feedback. Add yours to the last row to shape the story.
          </p>

          {ratings.map((rating, idx) => {
            const isInteractive = !!rating.userInteractive;
            const isLocked = !!rating.locked;

            const displayScore =
              isInteractive && !isLocked && hoverRating > 0
                ? hoverRating
                : rating.score;

            return (
              <div
                key={idx}
                className={`rating-row ${panelInView ? "in-view" : ""}`}
                style={{
                  transitionDelay: panelInView ? `${idx * 120}ms` : "0ms",
                }}
                onMouseLeave={() => {
                  if (isInteractive && !isLocked) setHoverRating(0);
                }}
              >
                <div className="rating-label">
                  {rating.label} ⭐ {Number(displayScore).toFixed(1)}
                </div>

                <div
                  className="stars"
                  role={isInteractive ? "radiogroup" : undefined}
                  aria-label={rating.label}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      idSuffix={`${idx}-${star}`}
                      filled={star <= displayScore}
                      disabled={!isInteractive || isLocked}
                      onClick={
                        isInteractive && !isLocked
                          ? () => handleStarClick(star, isLocked)
                          : undefined
                      }
                      onHover={
                        isInteractive && !isLocked
                          ? () => setHoverRating(star)
                          : undefined
                      }
                      onFocus={
                        isInteractive && !isLocked
                          ? () => setHoverRating(star)
                          : undefined
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="rating-modal-backdrop" role="dialog" aria-modal="true">
          <div className="rating-modal">
            {modalState === "confirm" ? (
              <>
                <h3>Do you want to Submit Your Rating?</h3>
                <p>
                  You selected {pendingScore} star{pendingScore > 1 ? "s" : ""}.
                </p>
                <div className="modal-actions">
                  <button className="modal-btn confirm" onClick={confirmRating}>
                    Yes, Submit
                  </button>
                  <button className="modal-btn cancel" onClick={cancelRating}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Thanks! 🎉</h3>
                <p>Your rating has been saved successfully.</p>
                <div className="modal-actions">
                  <button
                    className="modal-btn confirm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
