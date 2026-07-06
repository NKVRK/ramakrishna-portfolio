import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => e.preventDefault()}>
          RN
        </a>

        <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar__overlay${menuOpen ? ' visible' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
