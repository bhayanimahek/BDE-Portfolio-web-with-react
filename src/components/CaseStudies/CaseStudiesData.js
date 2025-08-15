

// import first from '../../assets/casestudy/first.jpg';
// import second from '../../assets/casestudy/sec.jpg';
// import third from '../../assets/casestudy/third.jpg';

// const caseStudies = [
//   {
//     id: 1,
//     title: "Website Revamp & Sales Funnel Optimization",
//     client: "TechFlow Solutions",
//     date: "March 2025",
//     thumbnail: first,
//     problem:
//       "The client's outdated website caused a 35% drop in conversions due to slow loading, poor navigation, and inconsistent branding.",
//     result:
//       "Achieved a 62% conversion lift and reduced the sales cycle by 40% in just 3 months.",
//     details: {
//       challenge:
//         "Highly competitive SaaS space with increasing customer acquisition costs and a cluttered UI that drove visitors away in under 10 seconds.",
//       objectives: [
//         "Redesign the website with modern UX principles.",
//         "Automate lead nurturing for faster conversions.",
//         "Set up live analytics dashboards.",
//         "Ensure brand consistency across all marketing."
//       ],
//       solution: [
//         "Conducted full UX audit with heatmaps and user testing.",
//         "Launched a mobile-first website with simplified CTAs.",
//         "Integrated CRM with real-time conversion tracking.",
//         "Created a brand style guide to unify visuals."
//       ],
//       results: [
//         { label: "Increase in Conversion Rate", value: "+62%" },
//         { label: "Reduction in Sales Cycle", value: "-40%" },
//         { label: "Customer Retention", value: "+75%" },
//         { label: "Revenue Growth in 6 Months", value: "$1.2M" }
//       ],
//       conclusion:
//         "By merging UX improvements with automated lead nurturing, TechFlow achieved rapid growth and consistent customer loyalty."
//     }
//   },
//   {
//     id: 2,
//     title: "E-commerce Checkout Streamlining",
//     client: "Urban Threads",
//     date: "January 2025",
//     thumbnail: second,
//     problem:
//       "Cart abandonment rates hit 72% due to a slow, multi-step checkout process and unclear delivery timelines.",
//     result:
//       "Reduced abandonment by 45% and boosted average order value by 28% in two months.",
//     details: {
//       challenge:
//         "High traffic but low conversions due to friction at checkout. Customers abandoned carts before completing purchases.",
//       objectives: [
//         "Simplify checkout to 3 steps or less.",
//         "Add clear shipping and return info.",
//         "Upsell related products during checkout.",
//         "Speed up site load times for mobile."
//       ],
//       solution: [
//         "Built a single-page checkout with progress bar.",
//         "Added AI-powered upselling suggestions.",
//         "Displayed estimated delivery dates at checkout.",
//         "Optimized product images for faster loading."
//       ],
//       results: [
//         { label: "Cart Abandonment Reduction", value: "-45%" },
//         { label: "Average Order Value Increase", value: "+28%" },
//         { label: "Mobile Speed Improvement", value: "+42%" },
//         { label: "Repeat Purchase Growth", value: "+33%" }
//       ],
//       conclusion:
//         "By removing friction and boosting trust signals, Urban Threads turned one-time buyers into loyal repeat customers."
//     }
//   },
//   {
//     id: 3,
//     title: "B2B Lead Generation & Positioning",
//     client: "Vertex Industrial",
//     date: "February 2025",
//     thumbnail: third,
//     problem:
//       "Only 40% of incoming leads met qualification criteria, wasting sales team resources.",
//     result:
//       "Improved lead quality by 85% and doubled the close rate in just four months.",
//     details: {
//       challenge:
//         "Vertex struggled to attract decision-makers in its industrial niche, with weak brand positioning and untargeted campaigns.",
//       objectives: [
//         "Refine ideal customer profile (ICP).",
//         "Position the brand as an industry leader.",
//         "Score and prioritize leads efficiently.",
//         "Expand into new high-value regions."
//       ],
//       solution: [
//         "Ran LinkedIn ads targeting refined ICP segments.",
//         "Published thought-leadership content and whitepapers.",
//         "Implemented AI-based lead scoring in the CRM.",
//         "Hosted online webinars with industry experts."
//       ],
//       results: [
//         { label: "Qualified Lead Increase", value: "+85%" },
//         { label: "Lead-to-Close Rate", value: "29%" },
//         { label: "Brand Mentions Increase", value: "+48%" },
//         { label: "New Market Entry", value: "3 Regions" }
//       ],
//       conclusion:
//         "By combining precise targeting with valuable industry content, Vertex established a repeatable, scalable sales model."
//     }
//   }
// ];

// export default caseStudies;


// components/CaseStudies/CaseStudiesData.js

import first from '../../assets/casestudy/first.jpg';
import second from '../../assets/casestudy/sec.jpg';
import third from '../../assets/casestudy/third.jpg';

// Optional before/after images (replace with your own)
// import before1 from '../../assets/casestudy/before1.jpg';
// import after1 from '../../assets/casestudy/after1.jpg';
// import before2 from '../../assets/casestudy/before2.jpg';
// import after2 from '../../assets/casestudy/after2.jpg';
// import before3 from '../../assets/casestudy/before3.jpg';
// import after3 from '../../assets/casestudy/after3.jpg';

const caseStudies = [
  // CASE STUDY 1
  {
    id: 1,
    title: "Website Revamp & Funnel Optimization",
    client: "TechFlow Solutions",
    date: "March 2025",
    thumbnail: first,
    problem:
      "Conversion rate dropped 35% in 6 months due to outdated UI, inconsistent branding, and lack of a structured sales funnel.",
    result:
      "Boosted conversions by 62% and shortened sales cycles by 40% in just 90 days.",
    details: {
      beforeAfter: { before: "before1", after: "after1" },
      challenge:
        "TechFlow operates in a saturated SaaS market with rising customer acquisition costs and declining retention.",
      objectives: [
        "Redesign the website for a mobile-first experience.",
        "Implement automated email outreach for lead nurturing.",
        "Integrate CRM with real-time sales dashboards.",
        "Develop a consistent brand style guide."
      ],
      solution: [
        "Conducted a UX/UI audit and rebuilt the site with a modern, responsive layout.",
        "Created segmented email campaigns targeting different buyer personas.",
        "Connected the CRM to track lead progress and deal closure rates.",
        "Standardized visual branding across all touchpoints."
      ],
      results: [
        { label: "Conversion Rate", value: "+62" },
        { label: "Sales Cycle Reduction", value: "-40" },
        { label: "Customer Retention", value: "+75" },
        { label: "Revenue Increase ($M)", value: "1.2" }
      ],
      testimonial: {
        quote: "They transformed our sales process in record time! We now have a repeatable growth model.",
        author: "Sarah Johnson, CEO"
      },
      conclusion:
        "Aligning sales and marketing under a unified, data-driven strategy created sustainable and scalable growth."
    }
  },

  // CASE STUDY 2
  {
    id: 2,
    title: "E-Commerce Conversion Boost Through CRO & Branding",
    client: "UrbanStyle Clothing",
    date: "January 2025",
    thumbnail: second,
    problem:
      "Despite high traffic, UrbanStyle's cart abandonment rate was over 78%, and repeat purchases were low.",
    result:
      "Cart abandonment reduced by 32%, average order value increased by 28%, and repeat purchases grew by 46%.",
    details: {
      beforeAfter: { before: "before2", after: "after2" },
      challenge:
        "The fashion e-commerce space is highly visual, yet UrbanStyle lacked strong product presentation and trust signals on its site.",
      objectives: [
        "Improve checkout process to reduce friction.",
        "Enhance product photography and descriptions.",
        "Introduce loyalty program to encourage repeat purchases.",
        "Optimize website speed for mobile shoppers."
      ],
      solution: [
        "Implemented a one-page checkout with multiple payment options.",
        "Revamped all product images with professional photography and 360° views.",
        "Launched a points-based loyalty system with personalized offers.",
        "Compressed images and used a global CDN to cut page load time by 45%."
      ],
      results: [
        { label: "Cart Abandonment Drop", value: "-32" },
        { label: "Average Order Value", value: "+28" },
        { label: "Repeat Purchases", value: "+46" },
        { label: "Mobile Page Speed (sec)", value: "-1.8" }
      ],
      testimonial: {
        quote: "We saw instant results after the CRO changes. Customers are buying more and coming back sooner.",
        author: "James Patel, Marketing Director"
      },
      conclusion:
        "Focusing on both user experience and customer retention created a double impact: higher conversions and stronger brand loyalty."
    }
  },

  // CASE STUDY 3
  {
    id: 3,
    title: "Lead Generation Overhaul for B2B Manufacturer",
    client: "SteelPro Engineering",
    date: "February 2025",
    thumbnail: third,
    problem:
      "SteelPro relied heavily on word-of-mouth referrals and had no structured inbound lead system, resulting in unpredictable sales cycles.",
    result:
      "Generated 310 qualified leads in 4 months and closed $2.5M in contracts.",
    details: {
      beforeAfter: { before: "before3", after: "after3" },
      challenge:
        "The industrial manufacturing sector is slow-moving, and decision-makers require high trust and technical validation before purchase.",
      objectives: [
        "Build a content-driven lead generation funnel.",
        "Develop case study & whitepaper assets for credibility.",
        "Implement LinkedIn Ads targeting procurement managers.",
        "Automate lead nurturing sequences."
      ],
      solution: [
        "Designed a gated resource library with technical whitepapers to attract prospects.",
        "Produced video case studies highlighting past project successes.",
        "Launched hyper-targeted LinkedIn ad campaigns by industry and job title.",
        "Built a 6-email nurture sequence addressing buyer objections."
      ],
      results: [
        { label: "Qualified Leads", value: "310" },
        { label: "Deals Closed ($M)", value: "2.5" },
        { label: "Lead-to-Client Conversion", value: "+18" },
        { label: "Time to Close Reduction", value: "-25" }
      ],
      testimonial: {
        quote: "For the first time, we have a steady pipeline of high-quality leads coming in every month.",
        author: "Michael Wong, Sales Director"
      },
      conclusion:
        "A targeted inbound strategy replaced their reliance on referrals, creating predictable revenue streams."
    }
  }
];

export default caseStudies;
