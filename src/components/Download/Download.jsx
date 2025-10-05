import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Container from '../common/Container/Container';
import styles from './Download.module.css';

const Download = () => {
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

  const appFeatures = [
    'Track meals and nutrition on-the-go',
    'Receive real-time notifications',
    'Access your meal plans anytime',
    'Monitor your health progress',
    'Stay connected with your dietitian'
  ];

  return (
    <section id="download" className={styles.download}>
      <Container>
        <div 
          ref={contentRef}
          className={`${styles.downloadContent} ${contentVisible ? styles.visible : ''}`}
        >
          {/* Text Content */}
          <div className={styles.textContent}>
            <span className={styles.badge}>Get The App</span>
            <h2 className={styles.title}>
              Take Your Nutrition Journey Anywhere
            </h2>
            <p className={styles.description}>
              Download the Nutrix mobile app for iOS and Android. Stay on track with 
              your nutrition goals, communicate with your dietitian, and monitor your 
              progress—all from the palm of your hand.
            </p>

            {/* Features List */}
            <ul className={styles.featuresList}>
              {appFeatures.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className={styles.downloadButtons}>
              <a href="#" className={styles.downloadBtn}>
                <div className={styles.btnIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className={styles.btnText}>
                  <span className={styles.btnSmall}>Download on the</span>
                  <span className={styles.btnLarge}>App Store</span>
                </div>
              </a>

              <a href="#" className={styles.downloadBtn}>
                <div className={styles.btnIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                </div>
                <div className={styles.btnText}>
                  <span className={styles.btnSmall}>GET IT ON</span>
                  <span className={styles.btnLarge}>Google Play</span>
                </div>
              </a>
            </div>

            {/* QR Code Info */}
            <div className={styles.qrInfo}>
              <div className={styles.qrPlaceholder}>
                <div className={styles.qrCode}>QR</div>
              </div>
              <p className={styles.qrText}>
                Scan to download or visit your app store
              </p>
            </div>
          </div>

          {/* App Preview */}
          <div className={styles.appPreview}>
            <div className={styles.phoneContainer}>
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  {/* App Screenshot Mockup */}
                  <div className={styles.screenshot}>
                    <div className={styles.screenshotHeader}>
                      <div className={styles.headerBar}></div>
                      <div className={styles.headerTitle}>My Meal Plan</div>
                    </div>
                    <div className={styles.screenshotContent}>
                      <div className={styles.mealCard}>
                        <div className={styles.mealIcon}>🍳</div>
                        <div className={styles.mealInfo}>
                          <div className={styles.mealName}></div>
                          <div className={styles.mealCalories}></div>
                        </div>
                      </div>
                      <div className={styles.mealCard}>
                        <div className={styles.mealIcon}>🥗</div>
                        <div className={styles.mealInfo}>
                          <div className={styles.mealName}></div>
                          <div className={styles.mealCalories}></div>
                        </div>
                      </div>
                      <div className={styles.mealCard}>
                        <div className={styles.mealIcon}>🍗</div>
                        <div className={styles.mealInfo}>
                          <div className={styles.mealName}></div>
                          <div className={styles.mealCalories}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Download;