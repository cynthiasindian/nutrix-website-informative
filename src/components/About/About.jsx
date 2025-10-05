import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Container from '../common/Container/Container';
import styles from './About.module.css';

const About = () => {
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className={styles.about}>
      <Container>
        <div 
          ref={titleRef}
          className={`${styles.sectionHeader} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.sectionTitle}>About Nutrix</h2>
          <p className={styles.sectionSubtitle}>
            Bridging the gap between dietitians and patients through innovative technology
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`${styles.aboutContent} ${contentVisible ? styles.visible : ''}`}
        >
          {/* Problem & Solution */}
          <div className={styles.textBlock}>
            <div className={styles.problemSection}>
              <span className={styles.label}>The Problem</span>
              <h3 className={styles.blockTitle}>Traditional Methods Fall Short</h3>
              <p className={styles.blockText}>
                Despite growing adoption of digital health solutions, nutrition management 
                continues to rely on outdated methods. Meal plans delivered as static PDFs 
                or printed documents are difficult to update, track, or integrate into daily routines. 
                This creates inefficiencies in follow-up and weakens the ability of dietitians to 
                monitor progress or adjust plans in a timely manner.
              </p>
            </div>

            <div className={styles.solutionSection}>
              <span className={styles.label}>Our Solution</span>
              <h3 className={styles.blockTitle}>A Connected Digital Platform</h3>
              <p className={styles.blockText}>
                Nutrix provides a dedicated platform that connects dietitians with their patients 
                in a structured and interactive way. Our system supports meal plan sharing, 
                automated follow-up, progress tracking, reminders, and scheduling—all in one place. 
                By bridging prescription and practice, we help improve adherence and support better 
                health outcomes.
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 className={styles.statCardNumber}>500+</h4>
              <p className={styles.statCardLabel}>Patients Managed</p>
              <p className={styles.statCardDesc}>
                Active users benefiting from personalized nutrition plans
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18"/>
                  <path d="M15 3v18"/>
                </svg>
              </div>
              <h4 className={styles.statCardNumber}>1000+</h4>
              <p className={styles.statCardLabel}>Meal Plans Created</p>
              <p className={styles.statCardDesc}>
                Customized nutrition strategies for diverse health goals
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4 className={styles.statCardNumber}>95%</h4>
              <p className={styles.statCardLabel}>Success Rate</p>
              <p className={styles.statCardDesc}>
                Users achieving their nutrition and wellness goals
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🎯</div>
              <div className={styles.highlightContent}>
                <h4>Targeted Solution</h4>
                <p>Built specifically for healthcare professionals and their patients</p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🔒</div>
              <div className={styles.highlightContent}>
                <h4>HIPAA & GDPR Compliant</h4>
                <p>Your health data is protected with enterprise-grade security</p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>📱</div>
              <div className={styles.highlightContent}>
                <h4>Cross-Platform</h4>
                <p>Seamless experience across web and mobile applications</p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>⚡</div>
              <div className={styles.highlightContent}>
                <h4>Real-Time Updates</h4>
                <p>Instant synchronization between dietitians and patients</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;