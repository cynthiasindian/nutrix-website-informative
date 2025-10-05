import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Container from '../common/Container/Container';
import styles from './Features.module.css';

const Features = () => {
  const [activeTab, setActiveTab] = useState('dietitians');
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  const dietitianFeatures = [
    {
      icon: '👥',
      title: 'Patient Management Dashboard',
      description: 'Comprehensive dashboard to manage all patient profiles, track progress, and access complete medical histories in one place.'
    },
    {
      icon: '🍽️',
      title: 'Meal Plan Creation & Tracking',
      description: 'Create customized meal plans with detailed nutritional information. Update plans dynamically and track patient adherence in real-time.'
    },
    {
      icon: '🔬',
      title: 'Clinical Test Management',
      description: 'Upload and manage clinical test results including BMI, blood tests, and other medical documents. View historical trends and make data-driven decisions.'
    },
    {
      icon: '📅',
      title: 'Appointment Scheduling',
      description: 'Efficient calendar system for scheduling consultations, setting reminders, and managing patient appointments seamlessly.'
    },
    {
      icon: '📊',
      title: 'Progress Analytics',
      description: 'Detailed analytics and visual reports showing patient progress, adherence rates, and health outcome metrics over time.'
    },
    {
      icon: '💬',
      title: 'Secure Communication',
      description: 'HIPAA-compliant messaging system for secure communication with patients, sharing updates, and providing guidance.'
    }
  ];

  const patientFeatures = [
    {
      icon: '📱',
      title: 'Personalized Meal Plans',
      description: 'Access your customized meal plans on mobile, with detailed nutritional information and easy-to-follow instructions for every meal.'
    },
    {
      icon: '🏃',
      title: 'Exercise Tracking',
      description: 'Log your physical activities, track workout completion, and monitor your fitness progress alongside your nutrition plan.'
    },
    {
      icon: '🍰',
      title: 'Cheating Box (Honest Tracking)',
      description: 'Transparently log unplanned food intake. Honesty helps your dietitian make better adjustments to your plan.'
    },
    {
      icon: '📆',
      title: 'Appointment Management',
      description: 'View upcoming appointments, receive reminders, and easily reschedule or cancel sessions directly from your phone.'
    },
    {
      icon: '📈',
      title: 'Health Progress Monitoring',
      description: 'Track your weight, BMI, and other health metrics. View your progress with intuitive charts and celebrate your achievements.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Get timely notifications for meals, water intake, medications, and appointments to stay on track with your health goals.'
    }
  ];

  const currentFeatures = activeTab === 'dietitians' ? dietitianFeatures : patientFeatures;

  return (
    <section id="features" className={styles.features}>
      <Container>
        <div 
          ref={titleRef}
          className={`${styles.sectionHeader} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.sectionTitle}>Powerful Features</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to manage nutrition and achieve health goals
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'dietitians' ? styles.active : ''}`}
            onClick={() => setActiveTab('dietitians')}
          >
            <span className={styles.tabIcon}>👨‍⚕️</span>
            For Dietitians
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'patients' ? styles.active : ''}`}
            onClick={() => setActiveTab('patients')}
          >
            <span className={styles.tabIcon}>🙋</span>
            For Patients
          </button>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className={`${styles.featuresGrid} ${featuresVisible ? styles.visible : ''}`}
        >
          {currentFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h3>Built for Healthcare</h3>
            <p>
              Nutrix is designed specifically for healthcare professionals with features 
              that comply with HIPAA and GDPR regulations, ensuring patient data security 
              and privacy at every step.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3>Cloud-Based & Scalable</h3>
            <p>
              Hosted on AWS infrastructure, Nutrix offers reliable performance, automatic 
              backups, and seamless scalability to grow with your practice.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;