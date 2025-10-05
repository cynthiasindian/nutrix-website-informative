import { smoothScrollTo, scrollToTop } from '../../utils/smoothScroll';
import Container from '../common/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'download', label: 'Download' }
  ];

  const teamMembers = [
    'Cynthia Sindian',
    'Rita Msaed',
    'Roy Gebrayel'
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo} onClick={scrollToTop}>
              <img 
                src="/assets/images/logo.png" 
                alt="Nutrix Logo" 
                className={styles.logoImage}
              />
              <span className={styles.logoName}>Nutrix</span>
            </div>
            <p className={styles.brandDescription}>
              Empowering healthier lives through innovative nutrition management. 
              Connecting dietitians and patients for better health outcomes.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink} 
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink} 
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@nutrix.com" 
                className={styles.socialLink} 
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => smoothScrollTo(link.id)}
                    className={styles.link}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Team</h3>
            <ul className={styles.linksList}>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <span className={styles.teamMember}>{member}</span>
                </li>
              ))}
            </ul>
            <div className={styles.supervisor}>
              <p className={styles.supervisorLabel}>Supervisor</p>
              <p className={styles.supervisorName}>Mr. Michel Tannoury</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get in Touch</h3>
            <p className={styles.contactText}>
              Have questions about Nutrix? We'd love to hear from you.
            </p>
            <a href="mailto:contact@nutrix.com" className={styles.contactEmail}>
              contact@nutrix.com
            </a>
            <div className={styles.university}>
              <p className={styles.universityName}>Antonine University</p>
              <p className={styles.universityDept}>Faculty of Engineering</p>
              <p className={styles.universityYear}>Fall 2025</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Nutrix. All rights reserved.
          </p>
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;