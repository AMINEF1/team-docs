import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Architecture',
    href: '/docs/architecture/overview',
    description:
      'High-level notes for the 5G and Open RAN environment, including components, standards, and interfaces.',
  },
  {
    title: 'Deployment',
    href: '/docs/deployment/quickstart',
    description:
      'Infrastructure requirements, quickstart steps, SlapOS notes, and Wendelin integration points.',
  },
  {
    title: 'Experiments',
    href: '/docs/experiments/iot-scenarios',
    description:
      'Reusable experiment writeups for IoT, UERANSIM, Open5GS, Free5GC, srsRAN, and lab validation.',
  },
  {
    title: 'Standards',
    href: '/docs/api-reference/standards',
    description:
      'Reference material for 3GPP, ETSI, IETF, eCPRI, F1-AP, NGAP, and related SimpleRAN interfaces.',
  },
  {
    title: 'Community',
    href: '/docs/community/how-to-contribute',
    description:
      'Team contribution workflow, governance notes, and practical rules for keeping documentation useful.',
  },
  {
    title: 'How to document',
    href: '/docs/community/how-to-document',
    description:
      'A lightweight template for adding procedures, experiments, troubleshooting notes, and meeting outputs.',
  },
];

function Feature({title, href, description}) {
  return (
    <Link className={styles.featureCard} to={href}>
      <span className={styles.cardEyebrow}>Team docs</span>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Work areas</Heading>
          <p>Use these sections to keep technical work discoverable, reviewed, and reusable by the whole team.</p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
