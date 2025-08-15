import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Load from .env (Vite requires "VITE_" prefix)
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      toast.success("✅ Your message has been sent!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { label: "Developers", value: 70, emoji: "👨‍💻" },
    { label: "Designers", value: 50, emoji: "🎨" },
    { label: "Marketers", value: 60, emoji: "📈" },
    { label: "Entrepreneurs", value: 40, emoji: "👔" },
    { label: "Students", value: 30, emoji: "🎓" },
    { label: "Consultants", value: 20, emoji: "🧑‍🏫" },
  ];

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-content">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="contact-subtitle">
            Interested in working together or have a question? <br /> Send me a message!
          </p>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <motion.button type="submit" disabled={isSubmitting} whileTap={{ scale: 0.95 }}>
            {isSubmitting ? "⏳ Sending..." : "📨 Send Message"}
          </motion.button>
        </motion.form>

        <motion.div
          className="contact-stats"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="stats-title">People Who Reached Out</h3>
          {stats.map((s, index) => (
            <div className="stats-bar" key={index}>
              <motion.div
                className="bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <span role="img" aria-label={s.label}>{s.emoji}</span> {s.label}: {s.value}%
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.section>
  );
};

export default Contact;
