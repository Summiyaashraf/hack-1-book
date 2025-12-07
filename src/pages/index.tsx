import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// --- Header Component (MUST be defined and called) ---
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // 'hero--primary' class Docusaurus ke default primary color ko use karta hai
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Title aur Tagline (Yeh My Site aur Dinosaurs are cool dikhayega agar docusaurus.config.js mein hai) */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* CTA Button */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/week1/week-01-introduction"> 
            🚀 Start Learning Physical AI (Week 1)
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- Main Page Layout ---
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Feature Data
  const featuresList = [
    {
      title: 'Week 1-4: Foundations ⚙️',
      description: 'Kinematics, Sensors, Actuators, and Basic Control Systems.',
      link: '/docs/week1/week-01-introduction' 
    },
    {
      title: 'Week 5-8: Perception & AI 🧠',
      description: 'Computer Vision, Deep Learning models, and Sensor Fusion techniques.',
      link: '/docs/week5/week-05-introduction'
    },
    {
      title: 'Week 9-12: Advanced Systems 🤖',
      description: 'Autonomous Navigation, Human-Robot Interaction, and Final Project Implementation.',
      link: '/docs/week9/week-09-introduction'
    },
  ];

  // Feature Card Component
  function FeatureCard({ title, description, link }) {
    return (
      <div className="col col--4 margin-bottom--lg">
        <Link className={clsx(styles.cardLink)} to={link}>
          <div className="card shadow--md">
            <div className="card__header">
              <h3>{title}</h3>
            </div>
            <div className="card__body">
              <p>{description}</p>
            </div>
            <div className="card__footer">
              <button className="button button--primary button--block">
                Explore Module
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Welcome to the Physical AI and Humanoid Robotics Documentation.">
      
      {/* HomepageHeader ko yahan call karna zaroori hai */}
      <HomepageHeader /> 
      
      <main>
        <section className="container padding-vert--xl">
          <div className="row">
            <div className="col col--12">
              <h2 className="text--center margin-bottom--lg">
                📚 Course Overview: 12 Weeks of Physical AI
              </h2>
              <p className="text--center text--secondary">
                This comprehensive course covers the foundational and advanced concepts of integrating **Artificial Intelligence with physical systems**. Jump straight into the weekly modules to begin your journey in robotics, computer vision, and autonomous systems development.
              </p>
            </div>
          </div>
          
          {/* Feature Cards Section (Linked and Enhanced UI) */}
          <div className="row margin-top--lg">
            {featuresList.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
          
        </section>
      </main>
    </Layout>
  );
}
