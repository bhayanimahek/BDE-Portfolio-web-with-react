



import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import blogs from "./BlogsData";
import "./Blogs.css";

const Blogs = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    let rafId;

    if (isInView) {
      // Step 1: Animate cards in sequence
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: i * 0.15,
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1], // smooth ease
        },
      }));

      // Step 2: Wait until animations are done, then start scroll
      const startScroll = setTimeout(() => {
        const container = scrollRef.current;
        let scrollPos = 0;
        const speed = 0.4;

        const loopScroll = () => {
          scrollPos += speed;
          if (scrollPos >= container.scrollWidth / 2) {
            scrollPos = 0;
          }
          container.scrollLeft = scrollPos;
          rafId = requestAnimationFrame(loopScroll);
        };

        rafId = requestAnimationFrame(loopScroll);
      }, blogs.length * 150 + 500); // total animation time + buffer

      return () => {
        clearTimeout(startScroll);
        cancelAnimationFrame(rafId);
      };
    } else {
      // Reset when out of view so animations replay
      controls.start({ opacity: 0, y: 40, scale: 0.95 });
    }
  }, [isInView, controls]);

  const doubledBlogs = [...blogs, ...blogs];

  return (
    <section className="blogs-section" id="blogs" ref={sectionRef}>
      <h2 className="blogs-title">Latest Insights & Strategies</h2>
      <p className="blogs-subtitle">
        Explore in-depth guides, strategies, and personal experiences tailored
        for Business Development Executives.
        <br />
        <strong>Gunjal Panchal</strong> has mastered the art of relationship
        building, market analysis, and negotiation, consistently delivering
        growth for his clients. Through targeted outreach, leveraging modern CRM
        tools, and an innovative content-driven approach, he has helped
        businesses expand into new markets and close high-value deals. His
        methods combine strategic planning with genuine human connection —
        making him a trusted partner in the BDE field.
      </p>

      <div className="blogs-carousel" ref={scrollRef}>
        {doubledBlogs.map((blog, i) => (
          <motion.div
            key={i}
            className="blog-card horizontal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={controls}
            custom={i}
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 0 25px rgba(99,102,241,0.6)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={blog.thumbnail} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <span className="blog-date">{blog.date}</span>
              <p>{blog.excerpt}</p>
              <a href={`/blogs/${blog.id}`} className="read-more">
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
