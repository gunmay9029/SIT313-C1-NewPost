
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage(
      "Your email has been validated. Newsletter delivery requires a connected backend."
    );
    setEmail("");
  }

  return (
    <footer className="site-footer" id="contact">
      <section className="newsletter" id="signup">
        <p className="section-label">STAY IN THE LOOP</p>
        <h2>Sign Up for Our Daily Insider</h2>
        <p>
          Subscribe to receive updates, articles, tutorials, and news from
          the DEV@Deakin community.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && (
          <p className="newsletter-message" role="status">
            {message}
          </p>
        )}
      </section>

      <div className="footer-columns">
        <div className="footer-about">
          <a href="#home" className="footer-brand">
            DEV<span>@</span>Deakin
          </a>
          <p>
            A community to share ideas, discover knowledge, and learn
            together through articles and tutorials.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#contact">Contact</a>
          <a href="#signup">Newsletter</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Use</a>
        </div>

        <div>
          <h3>Stay Connected</h3>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:contact@example.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DEV@Deakin. All rights reserved.</p>
        <div>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms</a>
          <a href="#home">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
