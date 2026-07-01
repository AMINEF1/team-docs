import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>5G and Open RAN knowledge base</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            A shared workspace for architecture notes, deployment procedures,
            experiments, troubleshooting, and team contributions.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/architecture/overview">
              Open documentation
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/community/how-to-document">
              Contribution guide
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel} aria-label="Documentation focus areas">
          <div>
            <span className={styles.panelLabel}>Current focus</span>
            <strong>SimpleRAN lab documentation</strong>
          </div>
          <ul>
            <li>Architecture and interfaces</li>
            <li>Deployment and infrastructure</li>
            <li>IoT scenarios and experiments</li>
            <li>Operational notes for the team</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Team documentation"
      description="SimpleRAN team documentation for 5G, Open RAN, deployments, and experiments.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
