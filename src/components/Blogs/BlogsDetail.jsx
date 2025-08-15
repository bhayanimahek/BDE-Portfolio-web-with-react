import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "./BlogsData";
import { motion } from "framer-motion";
import "./Blogs.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <motion.div
      className="blog-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="blog-banner">
        <img src={blog.thumbnail} alt={blog.title} />
      </div>
      <div className="blog-detail-content">
        <h1>{blog.title}</h1>
        <span className="blog-date">{blog.date}</span>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
