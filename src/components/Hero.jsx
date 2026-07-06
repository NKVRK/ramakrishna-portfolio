import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">
            <span className="wave">👋</span> Hey there, I'm
          </p>

          <h1 className="hero__name">
            Ramakrishna <span className="gradient-text">Nakka</span>
          </h1>

          <h2 className="hero__title">Frontend Developer</h2>

          <p className="hero__desc">
            I build responsive, performant web applications with React.js and
            modern JavaScript. Passionate about crafting intuitive user
            experiences and clean component architectures.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__photo-wrapper">
          <div className="hero__photo-ring">
            <img
              src="/headshot.png"
              alt="Ramakrishna Nakka"
              className="hero__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
