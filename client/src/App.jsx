import React, { useState } from 'react';

const PORTFOLIO = {
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

const navItems = ['about', 'skills', 'projects', 'education', 'contact'];
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }

  :root {
    --bg: #f7f5ef;
    --surface: #ffffff;
    --ink: #141414;
    --text: #33332f;
    --muted: #73716a;
    --line: rgba(20, 20, 20, 0.12);
    --brand: #0b6b5f;
    --brand-2: #b64d2f;
    --gold: #c89d38;
    --charcoal: #181a1b;
    --shadow: 0 24px 70px rgba(20, 20, 20, 0.12);
    --radius: 8px;
    --max: 1160px;
    --serif: 'Playfair Display', Georgia, serif;
    --sans: 'Manrope', Verdana, sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    min-width: 320px;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a { color: inherit; }
  button, input, textarea { font: inherit; }

  .site-nav {
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid var(--line);
    background: rgba(247, 245, 239, 0.86);
    backdrop-filter: blur(18px);
  }

  .nav-inner {
    max-width: var(--max);
    margin: 0 auto;
    min-height: 74px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-weight: 800;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border: 1px solid var(--ink);
    background: var(--ink);
    color: var(--bg);
    font-family: var(--serif);
    font-size: 1.05rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding: 0;
  }

  .nav-links a {
    display: inline-flex;
    padding: 10px 12px;
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 800;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 180ms ease, color 180ms ease;
  }

  .nav-links a:hover {
    background: rgba(11, 107, 95, 0.1);
    color: var(--brand);
  }

  .hero {
    max-width: var(--max);
    min-height: calc(100vh - 74px);
    margin: 0 auto;
    padding: 74px 24px 56px;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
    align-items: center;
    gap: 54px;
  }

  .kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    color: var(--brand);
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .kicker::before {
    content: '';
    width: 34px;
    height: 2px;
    background: var(--brand);
  }

  .hero h1 {
    max-width: 760px;
    font-family: var(--serif);
    font-size: clamp(3.4rem, 8vw, 6.8rem);
    line-height: 0.92;
    letter-spacing: 0;
  }

  .hero h1 span {
    display: block;
    color: var(--brand-2);
  }

  .hero-copy {
    max-width: 680px;
    margin-top: 26px;
    color: var(--text);
    font-size: 1.08rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  .btn {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid var(--ink);
    border-radius: var(--radius);
    padding: 0 18px;
    color: var(--ink);
    background: transparent;
    font-size: 0.84rem;
    font-weight: 800;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(20, 20, 20, 0.12);
  }

  .btn-primary {
    background: var(--ink);
    color: #fff;
  }

  .hero-panel {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--charcoal);
    color: #f8f4ea;
    box-shadow: var(--shadow);
  }

  .portrait {
    min-height: 520px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    background:
      linear-gradient(135deg, rgba(11, 107, 95, 0.86), rgba(24, 26, 27, 0.94)),
      #182321;
  }

  .portrait-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: rgba(255,255,255,0.78);
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .photo-frame {
    position: relative;
    align-self: center;
    width: min(250px, 68%);
    aspect-ratio: 4 / 5;
    padding: 8px;
    border: 1px solid rgba(255,255,255,0.44);
    border-radius: 8px;
    background: rgba(255,255,255,0.12);
    box-shadow: 0 22px 54px rgba(0,0,0,0.28);
    transform: rotate(-2deg);
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .photo-frame::before {
    content: '';
    position: absolute;
    inset: 12px -12px -12px 12px;
    border-radius: 8px;
    background: rgba(200, 157, 56, 0.42);
    z-index: -1;
  }

  .photo-frame:hover {
    transform: rotate(0deg) translateY(-4px);
    box-shadow: 0 34px 78px rgba(0,0,0,0.36);
  }

  .photo-frame:hover .profile-photo {
    transform: scale(1.025);
  }

  .photo-window {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
  }

  .photo-window::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 0 38%, rgba(255,255,255,0.32) 48%, transparent 58% 100%);
    transform: translateX(-120%);
    transition: transform 650ms ease;
  }

  .photo-frame:hover .photo-window::after {
    transform: translateX(120%);
  }

  .profile-photo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    background: #fff;
    transition: transform 220ms ease;
  }

  .portrait-bottom {
    margin-top: auto;
  }

  .portrait-bottom h2 {
    max-width: 320px;
    font-family: var(--serif);
    font-size: 1.95rem;
    line-height: 1.06;
  }

  .portrait-bottom p {
    max-width: 320px;
    margin-top: 10px;
    color: rgba(255,255,255,0.78);
    font-size: 0.95rem;
  }

  .stats-strip {
    max-width: var(--max);
    margin: 0 auto 34px;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .stat {
    min-height: 122px;
    padding: 22px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
  }

  .stat strong {
    display: block;
    font-family: var(--serif);
    font-size: 2rem;
    line-height: 1;
  }

  .stat span {
    display: block;
    margin-top: 10px;
    color: var(--muted);
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .section {
    padding: 78px 24px;
  }

  .section-dark {
    background: var(--charcoal);
    color: #f7f1e7;
  }

  .section-inner {
    max-width: var(--max);
    margin: 0 auto;
  }

  .section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 34px;
  }

  .section-label {
    margin-bottom: 10px;
    color: var(--brand-2);
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .section-title {
    max-width: 720px;
    font-family: var(--serif);
    font-size: clamp(2.2rem, 4.5vw, 4rem);
    line-height: 1;
  }

  .section-note {
    max-width: 360px;
    color: var(--muted);
  }

  .section-dark .section-note,
  .section-dark .about-copy,
  .section-dark .cert-name {
    color: rgba(247, 241, 231, 0.72);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 0.78fr 1.22fr;
    gap: 44px;
  }

  .quote {
    border-left: 4px solid var(--gold);
    padding-left: 22px;
    font-family: var(--serif);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.1;
  }

  .about-copy {
    color: var(--text);
    font-size: 1.02rem;
  }

  .about-list {
    display: grid;
    gap: 12px;
    margin-top: 24px;
  }

  .about-list div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.14);
  }

  .about-list span:first-child {
    color: rgba(247,241,231,0.58);
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .skill-grid,
  .project-grid,
  .cert-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .skill-card,
  .project-card,
  .cert-card {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .skill-card {
    padding: 26px;
  }

  .skill-card h3,
  .project-card h3 {
    font-family: var(--serif);
    font-size: 1.55rem;
    line-height: 1.1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    border: 1px solid rgba(20, 20, 20, 0.14);
    border-radius: 999px;
    padding: 0 12px;
    background: #fbfaf7;
    color: var(--text);
    font-size: 0.78rem;
    font-weight: 700;
  }

  .projects-section {
    background: #ece8dc;
  }

  .project-card {
    min-height: 288px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    overflow: hidden;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 46px rgba(20, 20, 20, 0.1);
  }

  .project-visual {
    position: relative;
    min-height: 132px;
    border: 1px solid rgba(20, 20, 20, 0.1);
    border-radius: var(--radius);
    background:
      linear-gradient(135deg, rgba(11, 107, 95, 0.06), rgba(182, 77, 47, 0.05)),
      #faf8f2;
    overflow: hidden;
  }

  .project-visual svg {
    width: 100%;
    height: 132px;
    display: block;
  }

  .project-visual path,
  .project-visual line,
  .project-visual circle,
  .project-visual rect {
    vector-effect: non-scaling-stroke;
  }

  .project-card:hover .pulse-dot {
    animation: pulse 1100ms ease-in-out infinite alternate;
  }

  .project-card:hover .route-line {
    stroke-dashoffset: 0;
  }

  .project-card:hover .scan-line {
    transform: translateY(82px);
  }

  .route-line {
    stroke-dasharray: 220;
    stroke-dashoffset: 70;
    transition: stroke-dashoffset 650ms ease;
  }

  .scan-line {
    transition: transform 700ms ease;
  }

  .course-card-mini {
    transform-origin: center;
    transition: transform 200ms ease;
  }

  .project-card:hover .course-card-mini:nth-child(2) {
    transform: translateY(-5px);
  }

  .project-card:hover .course-card-mini:nth-child(3) {
    transform: translateY(5px);
  }

  @keyframes pulse {
    from { opacity: 0.55; r: 4; }
    to { opacity: 1; r: 6; }
  }

  .project-desc {
    margin-top: 16px;
    color: var(--text);
  }

  .project-outcome {
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    color: var(--brand);
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .education-list {
    border-top: 1px solid var(--line);
  }

  .education-item {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr) 130px;
    gap: 24px;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid var(--line);
  }

  .education-year,
  .education-score {
    font-weight: 800;
  }

  .education-degree {
    font-size: 1.05rem;
    font-weight: 800;
  }

  .education-school {
    color: var(--muted);
    font-size: 0.92rem;
  }

  .cert-card {
    padding: 22px;
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.12);
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .cert-year {
    color: var(--gold);
    font-family: var(--serif);
    font-size: 1.4rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 44px;
    align-items: start;
  }

  .contact-panel {
    display: grid;
    gap: 14px;
  }

  .contact-link {
    display: block;
    border-bottom: 1px solid var(--line);
    padding: 0 0 14px;
    text-decoration: none;
  }

  .contact-link span {
    display: block;
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .contact-link strong {
    display: block;
    margin-top: 3px;
    word-break: break-word;
  }

  .contact-form {
    display: grid;
    gap: 14px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 28px;
    background: var(--surface);
    box-shadow: 0 18px 50px rgba(20, 20, 20, 0.08);
  }

  .field {
    display: grid;
    gap: 8px;
  }

  .field label {
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .field input,
  .field textarea {
    width: 100%;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 13px 14px;
    background: #fbfaf6;
    color: var(--ink);
    outline: none;
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--brand);
    box-shadow: 0 0 0 4px rgba(11, 107, 95, 0.12);
  }

  .field textarea {
    min-height: 128px;
    resize: vertical;
  }

  .form-status {
    border-radius: var(--radius);
    padding: 12px 14px;
    font-size: 0.9rem;
  }

  .form-status.success {
    background: rgba(11, 107, 95, 0.1);
    color: #064a41;
  }

  .form-status.error {
    background: rgba(182, 77, 47, 0.12);
    color: #86321d;
  }

  footer {
    padding: 30px 24px;
    background: var(--charcoal);
    color: rgba(247, 241, 231, 0.72);
  }

  .footer-inner {
    max-width: var(--max);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 860px) {
    .nav-inner { min-height: 66px; }
    .nav-links { display: none; }
    .hero {
      min-height: auto;
      padding-top: 44px;
      padding-bottom: 42px;
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .hero h1 {
      font-size: clamp(3rem, 15vw, 4.9rem);
      line-height: 0.95;
    }
    .hero-copy {
      max-width: 100%;
      font-size: 1rem;
    }
    .hero-panel {
      max-width: 430px;
      width: 100%;
      margin: 0 auto;
    }
    .portrait {
      min-height: auto;
      padding: 24px;
    }
    .portrait-top {
      font-size: 0.72rem;
    }
    .portrait-bottom h2 {
      font-size: 1.75rem;
    }
    .stats-strip,
    .skill-grid,
    .project-grid,
    .cert-grid,
    .about-grid,
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .stats-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-bottom: 0;
    }
    .section { padding: 62px 20px; }
    .section-head { display: block; }
    .section-note { margin-top: 14px; }
    .education-item { grid-template-columns: 1fr; gap: 5px; }
    .education-score { color: var(--brand); }
    .contact-form { padding: 20px; }
    .footer-inner { display: grid; }
  }

  @media (max-width: 520px) {
    .nav-inner,
    .hero,
    .stats-strip {
      padding-left: 16px;
      padding-right: 16px;
    }
    .brand-mark {
      width: 34px;
      height: 34px;
    }
    .hero {
      padding-top: 34px;
      gap: 22px;
    }
    .kicker {
      font-size: 0.7rem;
      margin-bottom: 14px;
    }
    .kicker::before {
      width: 24px;
    }
    .hero h1 {
      font-size: clamp(2.85rem, 18vw, 4.15rem);
    }
    .hero-actions { display: grid; }
    .btn { width: 100%; }
    .portrait {
      padding: 20px;
      gap: 18px;
    }
    .portrait-top {
      display: grid;
      gap: 4px;
    }
    .photo-frame {
      width: min(214px, 74%);
      transform: rotate(-1deg);
    }
    .photo-frame::before {
      inset: 10px -10px -10px 10px;
    }
    .portrait-bottom h2 {
      font-size: 1.55rem;
    }
    .portrait-bottom p {
      font-size: 0.9rem;
    }
    .stats-strip {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .stat {
      min-height: auto;
      padding: 18px;
    }
    .section-title {
      font-size: clamp(2rem, 12vw, 3rem);
    }
    .project-card,
    .skill-card,
    .cert-card {
      padding: 20px;
    }
    .project-visual,
    .project-visual svg {
      min-height: 112px;
      height: 112px;
    }
    .cert-card {
      display: grid;
    }
    .contact-link strong {
      font-size: 0.95rem;
    }
    .about-list div { display: grid; gap: 4px; }
  }
`;

function ProjectVisual({ type }) {
  if (type === 'traffic') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <path className="route-line" d="M22 105 C82 32 145 112 204 58 C265 3 320 86 398 28" fill="none" stroke="#0b6b5f" strokeWidth="4" strokeLinecap="round" />
          <line x1="78" y1="32" x2="122" y2="96" stroke="#b64d2f" strokeWidth="2" />
          <line x1="204" y1="58" x2="270" y2="88" stroke="#b64d2f" strokeWidth="2" />
          <line x1="270" y1="88" x2="338" y2="54" stroke="#0b6b5f" strokeWidth="2" />
          {[22, 78, 122, 204, 270, 338, 398].map((x, index) => (
            <circle className="pulse-dot" key={x} cx={x} cy={[105, 32, 96, 58, 88, 54, 28][index]} r="5" fill={index % 2 ? '#b64d2f' : '#0b6b5f'} />
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'medical') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <rect x="118" y="18" width="184" height="96" rx="8" fill="#181a1b" />
          <circle cx="210" cy="66" r="36" fill="none" stroke="#f7f1e7" strokeWidth="2" opacity="0.72" />
          <path d="M184 72 C198 38 228 42 238 72 C226 62 198 96 184 72Z" fill="#0b6b5f" opacity="0.9" />
          <path d="M176 31 H244 M176 101 H244" stroke="#c89d38" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line className="scan-line" x1="130" y1="36" x2="290" y2="36" stroke="#b64d2f" strokeWidth="3" opacity="0.78" />
          <circle className="pulse-dot" cx="238" cy="70" r="5" fill="#c89d38" />
        </svg>
      </div>
    );
  }

  if (type === 'search') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <path className="route-line" d="M48 100 C90 34 134 40 168 84 C205 131 250 11 298 46 C326 67 350 78 384 30" fill="none" stroke="#b64d2f" strokeWidth="4" strokeLinecap="round" />
          {[48, 116, 168, 230, 298, 384].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={[100, 38, 84, 86, 46, 30][index]} r="13" fill="#fff" stroke="#0b6b5f" strokeWidth="2" />
              <circle className="pulse-dot" cx={x} cy={[100, 38, 84, 86, 46, 30][index]} r="4" fill="#0b6b5f" />
            </g>
          ))}
          <rect x="250" y="82" width="82" height="28" rx="6" fill="#181a1b" />
          <path d="M267 96 H315" stroke="#f7f1e7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="project-visual" aria-hidden="true">
      <svg viewBox="0 0 420 132" role="img">
        <g className="course-card-mini">
          <rect x="44" y="30" width="102" height="72" rx="8" fill="#fff" stroke="#0b6b5f" strokeWidth="2" />
          <path d="M64 52 H126 M64 70 H112 M64 88 H100" stroke="#0b6b5f" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g className="course-card-mini">
          <rect x="160" y="18" width="102" height="96" rx="8" fill="#181a1b" />
          <path d="M182 42 H238 M182 62 H224 M182 82 H240" stroke="#f7f1e7" strokeWidth="4" strokeLinecap="round" />
          <circle className="pulse-dot" cx="238" cy="98" r="5" fill="#c89d38" />
        </g>
        <g className="course-card-mini">
          <rect x="276" y="30" width="102" height="72" rx="8" fill="#fff" stroke="#b64d2f" strokeWidth="2" />
          <path d="M296 52 H358 M296 70 H344 M296 88 H330" stroke="#b64d2f" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', msg: "Message sent. I'll get back to you soon." });
        setForm({ name: '', email: '', message: '' });
      } else if (res.status === 503 && data.demoMode) {
        setStatus({ type: 'success', msg: 'Demo mode: MongoDB is not connected, so the message was not stored.' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Unable to reach the server. Please try email instead.' });
    }

    setLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          required
        />
      </div>
      {status && <div className={`form-status ${status.type}`}>{status.msg}</div>}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{styles}</style>

      <nav className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }}>
            <span className="brand-mark">R</span>
            <span>Rumaiza</span>
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={(e) => { e.preventDefault(); scrollTo(item); }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div>
            <p className="kicker">Available for opportunities</p>
            <h1>
              Fathima
              <span>Rumaiza</span>
              P.S
            </h1>
            <p className="hero-copy">{PORTFOLIO.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${PORTFOLIO.email}`}>Get in Touch</a>
              <a className="btn" href="/resume.pdf" download>Download Resume</a>
              <a className="btn" href={PORTFOLIO.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile summary">
            <div className="portrait">
              <div className="portrait-top">
                <span>{PORTFOLIO.location}</span>
                <span>MERN + AI/ML</span>
              </div>
              <div className="photo-frame">
                <div className="photo-window">
                  <img className="profile-photo" src="/profile.jpg" alt="Fathima Rumaiza P.S" />
                </div>
              </div>
              <div className="portrait-bottom">
                <h2>{PORTFOLIO.title}</h2>
                <p>MERN stack development with applied machine learning experience.</p>
              </div>
            </div>
          </aside>
        </section>

        <div className="stats-strip" aria-label="Portfolio highlights">
          <div className="stat"><strong>4+</strong><span>Projects built</span></div>
          <div className="stat"><strong>4</strong><span>Certifications</span></div>
          <div className="stat"><strong>AI/ML</strong><span>Research focus</span></div>
          <div className="stat"><strong>M.Tech</strong><span>Ongoing degree</span></div>
        </div>

        <section className="section section-dark" id="about">
          <div className="section-inner about-grid">
            <div>
              <p className="section-label">About</p>
              <h2 className="quote">Developing full-stack applications and applied machine learning projects.</h2>
            </div>
            <div>
              <p className="about-copy">{PORTFOLIO.about}</p>
              <div className="about-list">
                <div><span>Focus</span><strong>MERN stack, deep learning, graph neural networks</strong></div>
                <div><span>Languages</span><strong>Malayalam, English, Arabic, Hindi</strong></div>
                <div><span>Location</span><strong>{PORTFOLIO.location}</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-label">Expertise</p>
                <h2 className="section-title">Technical skills</h2>
              </div>
              <p className="section-note">Technologies used across academic projects, web development, and machine learning work.</p>
            </div>
            <div className="skill-grid">
              {Object.entries(PORTFOLIO.skills).map(([category, items]) => (
                <article className="skill-card" key={category}>
                  <h3>{category}</h3>
                  <div className="tags">
                    {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-label">Selected Work</p>
                <h2 className="section-title">Projects</h2>
              </div>
              <p className="section-note">A selection of academic and full-stack projects covering machine learning, optimization, and web development.</p>
            </div>
            <div className="project-grid">
              {PORTFOLIO.projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div>
                    <ProjectVisual type={project.visual} />
                    <div className="tags">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                  <p className="project-outcome">{project.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-label">Background</p>
                <h2 className="section-title">Education</h2>
              </div>
            </div>
            <div className="education-list">
              {PORTFOLIO.education.map((item) => (
                <article className="education-item" key={`${item.degree}-${item.year}`}>
                  <span className="education-year">{item.year}</span>
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-school">{item.institution}</p>
                  </div>
                  <span className="education-score">{item.score}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-label">Credentials</p>
                <h2 className="section-title">Certifications</h2>
              </div>
            </div>
            <div className="cert-grid">
              {PORTFOLIO.certifications.map((cert) => (
                <article className="cert-card" key={cert.name}>
                  <span className="cert-name">{cert.name}</span>
                  <strong className="cert-year">{cert.year}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="section-label">Contact</p>
                <h2 className="section-title">Get in touch</h2>
              </div>
              <p className="section-note">Available for full-stack development, AI/ML, internship, and early career opportunities.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-panel">
                <a className="contact-link" href={`mailto:${PORTFOLIO.email}`}>
                  <span>Email</span>
                  <strong>{PORTFOLIO.email}</strong>
                </a>
                <a className="contact-link" href={`tel:${PORTFOLIO.phone}`}>
                  <span>Phone</span>
                  <strong>{PORTFOLIO.phone}</strong>
                </a>
                <a className="contact-link" href={PORTFOLIO.github} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                  <strong>github.com/ftmarumaiza</strong>
                </a>
                <a className="contact-link" href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <strong>linkedin.com/in/ftmarumaiza</strong>
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>Fathima Rumaiza P.S</span>
          <span>Built with React, Node.js, Express, and MongoDB</span>
        </div>
      </footer>
    </>
  );
}
