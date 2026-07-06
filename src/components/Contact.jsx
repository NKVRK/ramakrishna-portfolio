import useScrollReveal from '../hooks/useScrollReveal';

function Contact() {
  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section">
      <div ref={ref} className="container reveal">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Let's work <span className="gradient-text">together</span>
        </h2>

        <div className="contact__grid">
          {/* LEFT COLUMN */}
          <div className="contact__info">
            <p className="contact__info-text">
              I'm always open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="contact__details">
              {/* Email */}
              <a
                href="mailto:nakkaramakrishna9999@gmail.com"
                className="contact__detail"
              >
                <div className="contact__detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>nakkaramakrishna9999@gmail.com</span>
              </a>

              {/* Phone */}
              <a href="tel:+919381318069" className="contact__detail">
                <div className="contact__detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span>+91 93813 18069</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ramakrishna-n-k-v/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail"
              >
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>

              {/* Location */}
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Bhimavaram, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea
                placeholder="Your message..."
                className="contact__textarea"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
