import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const focusAreas = [
  {
    title: 'Agentic SDLC',
    description:
      'Designing software delivery systems where AI agents participate as first-class contributors — from spec to deploy. Building the scaffolding, evaluation harnesses, and feedback loops that make this reliable.',
  },
  {
    title: 'Context Engineering',
    description:
      'Treating context as an engineering problem, not a prompt problem. How you structure, scope, and deliver information to agents determines output quality more than model choice.',
  },
  {
    title: 'Platform & Distributed Systems',
    description:
      'Internal developer platforms, service mesh, reliability engineering, and the infrastructure layer underneath AI tooling. Systems that don\'t break when the unexpected happens.',
  },
  {
    title: 'Engineering Leadership',
    description:
      'Building high-output engineering organizations. Hiring, org design, technical strategy, and the craft of managing senior engineers and distributed teams.',
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
              Building AI-driven software delivery systems. Focused on agentic SDLC, context
              engineering, evaluation, platform infrastructure, and high-performance engineering
              organizations.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/projects">
                Projects
              </Link>
              <Link className="button button--secondary button--lg" to="/blog">
                Writing
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://github.com/vb-nattamai">
                GitHub
              </Link>
            </div>
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
