import React, { useState } from 'react';
import './App.css';
import { PORTFOLIO, navItems } from './data/portfolioData';
import ProjectVisual from './components/ProjectVisual';
import ContactForm from './components/ContactForm';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); setMobileMenuOpen(false); }}>
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
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item);
                  setMobileMenuOpen(false);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a className="btn btn-primary" href={`mailto:${PORTFOLIO.email}`} onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
        </div>
      </div>

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
