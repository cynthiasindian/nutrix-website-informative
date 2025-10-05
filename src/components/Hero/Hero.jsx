import { useEffect, useState } from 'react';
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';
import { smoothScrollTo } from '../../utils/smoothScroll';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    smoothScrollTo('about');
  };

  const handleDownload = () => {
    smoothScrollTo('download');
  };

  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={`${styles.heroText} ${isVisible ? styles.visible : ''}`}>
            <h1 className={styles.title}>
              Transform Your <span className={styles.highlight}>Nutrition Journey</span> with Nutrix
            </h1>
            <p className={styles.subtitle}>
              The complete platform connecting dietitians and patients for better health outcomes. 
              Manage meal plans, track progress, and achieve your wellness goals together.
            </p>
            <div className={styles.ctaButtons}>
              <Button 
                variant="primary" 
                size="large"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={handleDownload}
              >
                Download App
              </Button>
            </div>
            
            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Active Users</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Meal Plans</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`${styles.heroImage} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageWrapper}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  {/* Simplified app mockup */}
                  <div className={styles.mockupContent}>
                    <div className={styles.mockupHeader}>
                      <div className={styles.mockupAvatar}></div>
                      <div className={styles.mockupText}>
                        <div className={styles.mockupLine}></div>
                        <div className={styles.mockupLineSmall}></div>
                      </div>
                    </div>
                    <div className={styles.mockupCard}>
                      <div className={styles.mockupCardTitle}></div>
                      <div className={styles.mockupCardContent}>
                        <div className={styles.mockupItem}></div>
                        <div className={styles.mockupItem}></div>
                        <div className={styles.mockupItem}></div>
                      </div>
                    </div>
                    <div className={styles.mockupCard}>
                      <div className={styles.mockupCardTitle}></div>
                      <div className={styles.mockupProgress}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className={`${styles.floatingCard} ${styles.card1}`}>
                <span className={styles.cardIcon}>🥗</span>
                <span className={styles.cardText}>Healthy Meals</span>
              </div>
              <div className={`${styles.floatingCard} ${styles.card2}`}>
                <span className={styles.cardIcon}>📊</span>
                <span className={styles.cardText}>Track Progress</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;