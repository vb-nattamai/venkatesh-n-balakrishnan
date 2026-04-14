import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const focusAreas = [
  {
    title: 'Agentic SDLC',
    description:
      'Software delivery where AI agents participate at each phase — specification, implementation, review, and validation. Building the scaffolding, evaluation harnesses, and feedback loops that make this reliable.',
  },
  {
    title: 'Context Engineering',
    description:
      'Treating context as an engineering problem, not a prompt problem. How you structure, scope, and deliver information to agents determines output quality more than model choice.',
  },
  {
    title: 'Evaluation-First AI Systems',
    description:
      'Designing testable, repeatable evaluation harnesses for AI outputs. The discipline of knowing whether something works before you ship it — applied to code generation, agent pipelines, and developer tooling.',
  },
  {
    title: 'Platform Engineering & Distributed Systems',
    description:
      'Internal developer platforms, service reliability, and the infrastructure underneath AI tooling. Scalable systems that stay correct under real-world failure conditions.',
  },
  {
    title: 'Engineering Leadership',
    description:
      'Building high-output engineering organizations. Org design, technical strategy, hiring, and the craft of developing senior engineers and distributed teams.',
  },
];

const featuredProjects = [
  {
    name: 'AgentReady',
    description:
      'A system that reads real codebases and generates context-aware scaffolding for AI agents. AgentReady analyzes repository structure, dependency graphs, conventions, and domain patterns to produce grounded, evaluation-verified outputs that agents can actually use.',
    tags: ['AI Agents', 'Context Engineering', 'Evaluation', 'Static Analysis'],
    href: 'https://github.com/vb-nattamai/agent-ready',
  },
];

const writingPreviews = [
  {
    title: 'Why AI Agents Fail on Real Codebases',
    summary:
      'Most agent demos run against clean, toy repos. Real codebases are ambiguous, inconsistently structured, and full of tribal knowledge. The failure modes are predictable once you know what to look for.',
    href: '/blog/why-ai-agents-fail-real-codebases',
  },
  {
    title: 'Context Overload in Multi-Agent Systems',
    summary:
      'More context isn\'t always better. In orchestrated agent pipelines, unbounded context injection degrades output quality, increases latency, and makes evaluation harder. Here\'s how to think about it structurally.',
    href: '/blog/context-overload-multi-agent-systems',
  },
  {
    title: 'Evaluation Is the Missing Layer in AI Developer Tooling',
    summary:
      'The AI developer tooling ecosystem has optimized for generation speed and ignored correctness signals. Without a disciplined evaluation layer, you\'re shipping vibes, not software.',
    href: '/blog/evaluation-missing-layer-ai-developer-tooling',
  },
];

const proofPoints = [
  'Director of Software Engineering leading multi-team engineering organizations',
  'Writing about agentic SDLC, context engineering, and AI developer systems',
  'Building AgentReady — context-aware scaffolding and evaluation for AI agents',
  'Working across engineering leadership, platform thinking, and practical AI adoption',
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Venkatesh Balakrishnan — Director of Software Engineering focused on AI-driven software delivery, agentic SDLC, and high-performance engineering organizations.">
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Director of Software Engineering</p>
            <h1 className={styles.heroTitle}>Venkatesh Balakrishnan</h1>
            <p className={styles.heroSubtitle}>
              Building AI-driven software delivery systems with a focus on agentic SDLC, context
              engineering, evaluation, distributed systems, and engineering leadership.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/blog">
                Writing
              </Link>
              <Link className="button button--secondary button--lg" to="/projects">
                Projects
              </Link>
              <Link
                className={`button button--outline button--lg ${styles.ctaTertiary}`}
                href="https://github.com/vb-nattamai">
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className={styles.proof}>
          <div className={styles.container}>
            <ul className={styles.proofList}>
              {proofPoints.map((point) => (
                <li key={point} className={styles.proofItem}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* What I Work On */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What I work on</h2>
            <div className={styles.grid}>
              {focusAreas.map((item) => (
                <div key={item.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured projects</h2>
            {featuredProjects.map((project) => (
              <div key={project.name} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <Link href={project.href} className={styles.projectLink}>
                    View on GitHub →
                  </Link>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tagList}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className={styles.sectionCta}>
              <Link className="button button--secondary" to="/projects">
                All projects
              </Link>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <div className={styles.writingList}>
              {writingPreviews.map((post) => (
                <Link key={post.title} to={post.href} className={styles.writingItem}>
                  <h3 className={styles.writingTitle}>{post.title}</h3>
                  <p className={styles.writingSummary}>{post.summary}</p>
                </Link>
              ))}
            </div>
            <div className={styles.sectionCta}>
              <Link className="button button--secondary" to="/blog">
                All writing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
