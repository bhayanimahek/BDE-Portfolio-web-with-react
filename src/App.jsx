// import './App.css';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import About from './components/About/About.jsx';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
// import CaseStudies from './components/CaseStudies/CaseStudies.jsx';
// import Blogs from './components/Blogs/Blogs.jsx';
// import Skills from './components/Skills/Skills.jsx';
// import Testimonials from './components/Testimonials/Testimonials.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import Footer from './components/Footer/Footer.jsx';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Portfolio />
//       <CaseStudies />
//       <Blogs />
//       <Skills />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;



import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import CaseStudies from './components/CaseStudies/CaseStudies.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Skills from './components/Skills/Skills.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import CaseStudiesDetail from './components/CaseStudies/CaseStudiesDetails/CaseStudiesDetail.jsx';

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <Hero />
              <About />
              <Portfolio />
              <CaseStudies />
              <Blogs />
              <Skills />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Case Study Detail Page */}
        <Route path="/case-studies/:id" element={<CaseStudiesDetail />} />
      </Routes>
    </>
  );
}

export default App;
