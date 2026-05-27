export const PORTFOLIO = {
  name: 'Fathima Rumaiza P.S',
  title: 'Full-Stack Developer & AI/ML Engineer',
  location: 'Kochi, India',
  email: 'fathimarumaiza10@gmail.com',
  github: 'https://github.com/ftmarumaiza',
  linkedin: 'https://linkedin.com/in/ftmarumaiza',
  phone: '+91 9633751766',
  intro:
    'Computer Science postgraduate student focused on MERN stack development, machine learning, and practical software solutions.',
  about:
    'I am currently pursuing M.Tech in Computer Science and Engineering, with project experience in full-stack development, deep learning, graph neural networks, and semi-supervised learning. My work combines backend logic, frontend implementation, and applied machine learning concepts.',
  skills: {
    Languages: ['C', 'Python'],
    'MERN Stack': ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    'AI / ML': ['Deep Learning', 'Graph Neural Networks', 'Semi-Supervised Learning', 'Attention Mechanisms'],
    Tools: ['TensorFlow', 'PyTorch', 'Git']
  },
  education: [
    { degree: 'M.Tech - CSE', institution: 'Mar Athanasius College of Engineering', year: 'Ongoing', score: '7.75 CGPA' },
    { degree: 'B.Tech - CSE', institution: 'APJ Abdul Kalam Technological University', year: '2025', score: '7.57 CGPA' },
    { degree: 'Class XII', institution: 'Kerala Board of Higher Secondary', year: '2021', score: '84%' },
    { degree: 'Class X', institution: 'Kerala Board of Public Examination', year: '2019', score: '98%' }
  ],
  projects: [
    {
      title: 'TrafficXplain',
      visual: 'traffic',
      tags: ['GNN', 'Explainable AI'],
      description:
        'Traffic prediction system using graph neural networks with spatial and temporal masks to identify important roads and time periods in each prediction.',
      outcome: 'Graph-based traffic analysis'
    },
    {
      title: 'Medical Image Detection',
      visual: 'medical',
      tags: ['Deep Learning', 'Computer Vision'],
      description:
        'Medical image detection pipeline designed for limited labeled datasets, using ensemble methods and pseudo-labeling to improve classification performance.',
      outcome: 'Semi-supervised image detection'
    },
    {
      title: 'ACO Product Search',
      visual: 'search',
      tags: ['Optimization', 'Bio-Inspired'],
      description:
        'Product search approach based on Ant Colony Optimization to improve retrieval accuracy and reduce search time compared with simple keyword matching.',
      outcome: 'Optimized product retrieval'
    },
    {
      title: 'Course Recommender & Resume Bot',
      visual: 'course',
      tags: ['Full-Stack', 'Recommendation'],
      description:
        'Full-stack tool that recommends Coursera courses based on user interests and generates formatted resumes from structured user inputs.',
      outcome: 'Course recommendation and resume generation'
    }
  ],
  certifications: [
    { name: 'Introduction to Drones - Drone Assembling & Flight Simulation', year: '2021' },
    { name: 'Cyber Security and Ethical Hacking - Techmaghi', year: '2023' },
    { name: 'Blender Bootcamp', year: '2023' },
    { name: 'NPTEL Cloud Computing Certification', year: '2024' }
  ]
};

export const navItems = ['about', 'skills', 'projects', 'education', 'contact'];
export const API_BASE_URL = process.env.REACT_APP_API_URL || '';
