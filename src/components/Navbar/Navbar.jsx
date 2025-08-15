// import React, { useState } from "react";
// import { FaUserTie, FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Close menu after click on mobile
//     }
//   };

//   return (
//     <motion.nav
//       className="navbar"
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {/* Logo */}
//       <motion.div
//         className="logo"
//         onClick={() => scrollToSection("home")}
//         whileHover={{ scale: 1.05 }}
//       >
//         <FaUserTie className="logo-icon" />
//         <motion.div
//           className="logo-text"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <span className="logo-first">Gunjal</span>
//           <span className="logo-second">Panchal</span>
//         </motion.div>
//       </motion.div>

//       {/* Hamburger Icon for Mobile */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Navigation Links */}
//       <motion.ul
//         className={`nav-links ${menuOpen ? "active" : ""}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         {[
//           { id: "about", label: "About" },
//           { id: "portfolio", label: "Portfolio" },
//           { id: "skills", label: "Skills" },
//           { id: "testimonials", label: "Testimonials" },
//         ].map((link) => (
//           <motion.li
//             key={link.id}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <a
//               href={`#${link.id}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection(link.id);
//               }}
//             >
//               {link.label}
//             </a>
//           </motion.li>
//         ))}
//       </motion.ul>

//       {/* Desktop Contact Button */}
//       <motion.button
//         className="contact-btn desktop-contact"
//         onClick={() => scrollToSection("contact")}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Contact
//       </motion.button>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="logo"
        onClick={() => scrollToSection("home")}
        whileHover={{ scale: 1.05 }}
      >
        <FaUserTie className="logo-icon" />
        <motion.div
          className="logo-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="logo-first">Gunjal</span>
          <span className="logo-second">Panchal</span>
        </motion.div>
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <motion.ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { id: "about", label: "About" },
          { id: "portfolio", label: "Portfolio" },
          { id: "skills", label: "Skills" },
          { id: "testimonials", label: "Testimonials" },
          { id: "case-studies", label: "Case Studies" },
          { id: "blogs", label: "Blogs" },
        ].map((link) => (
          <motion.li
            key={link.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Desktop Contact Button */}
      <motion.button
        className="contact-btn desktop-contact"
        onClick={() => scrollToSection("contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
