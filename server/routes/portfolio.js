const express = require('express');
const router = express.Router();

// GET /api/portfolio — returns all portfolio data
router.get('/', (req, res) => {
  res.json({
    name: "Fathima Rumaiza P.S",
    title: "Full-Stack Developer & AI/ML Engineer",
    location: "Kochi, India",
    email: "fathimarumaiza10@gmail.com",
    github: "https://github.com/ftmarumaiza",
    linkedin: "https://linkedin.com/in/ftmarumaiza",
    phone: "+91 9633751766",
    about: "Computer Science and Engineering graduate with an ongoing M.Tech, offering proven experience in full-stack development, deep learning, and graph-based modelling. Skilled at designing interpretable and production-ready AI systems.",
    skills: {
      languages: ["C", "Python"],
      web: ["MongoDB", "Express.js", "React.js", "Node.js"],
      aiml: ["Deep Learning", "Graph Neural Networks", "Semi-Supervised Learning", "Attention Mechanisms"],
      tools: ["TensorFlow", "PyTorch", "Git"]
    },
    education: [
      {
        degree: "M.Tech — Computer Science and Engineering",
        institution: "Mar Athanasius College of Engineering (Autonomous), Kothamangalam",
        year: "Ongoing",
        score: "CGPA: 7.75"
      },
      {
        degree: "B.Tech — Computer Science and Engineering",
        institution: "APJ Abdul Kalam Technological University",
        year: "2025",
        score: "CGPA: 7.57"
      },
      {
        degree: "Class XII — Kerala Board of Higher Secondary Examination",
        institution: "Kerala Board",
        year: "2021",
        score: "84%"
      },
      {
        degree: "Class X — Kerala Board of Public Examination",
        institution: "Kerala Board",
        year: "2019",
        score: "98%"
      }
    ],
    projects: [
      {
        title: "TrafficXplain",
        tags: ["Graph Neural Networks", "Explainable AI"],
        description: "A GNN-based traffic prediction system capturing spatial road-network patterns and temporal trends. Introduced spatial & temporal masks so the model highlights which roads and time periods drive each prediction. Applied dual spatial mask fusion to preserve accuracy while making model reasoning fully transparent."
      },
      {
        title: "Semi-Supervised Medical Image Detection",
        tags: ["Deep Learning", "Computer Vision"],
        description: "A medical image detection pipeline optimised for scenarios with limited labelled training data. Combined ensemble methods with pseudo-labelling to iteratively improve accuracy on unlabelled samples."
      },
      {
        title: "Product Search Using Ant Colony Optimization",
        tags: ["Optimization", "Bio-Inspired Computing"],
        description: "A bio-inspired search system applying ACO logic to route users to the most relevant products faster. Improved search accuracy and reduced retrieval time significantly versus standard keyword-based approaches."
      },
      {
        title: "Coursera Course Recommendation & Resume Automation",
        tags: ["Recommendation Systems", "Full-Stack"],
        description: "A recommendation engine suggesting relevant Coursera courses based on student interests and study area. Automated resume generation by collecting user inputs and producing clean, formatted output documents."
      }
    ],
    certifications: [
      { name: "Introduction to Drones — Drone Assembling & Flight Simulation", year: "2021" },
      { name: "Cyber Security and Ethical Hacking — Techmaghi", year: "2023" },
      { name: "Blender Bootcamp", year: "2023" },
      { name: "NPTEL Cloud Computing Certification", year: "2024" }
    ]
  });
});

module.exports = router;
