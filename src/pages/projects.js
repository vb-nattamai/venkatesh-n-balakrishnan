import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const featuredProjects = [
  {
    name: 'AgentReady',
    tagline: 'Context-aware scaffolding for AI agents on real codebases',
    description: [
      'AgentReady reads a real codebase and generates the context scaffolding an AI agent needs to work effectively within it. Most agents fail on real repositories because they lack structured knowledge of the codebase\'s conventions, architecture, dependency graph, and domain patterns. AgentReady closes that gap.',
      'The system analyzes repository structure, file organization, package dependencies, code conventions, and documentation signals to produce grounded, machine-readable context that agents can consume reliably. Every output goes through an evaluation pass — AgentReady checks its own outputs against the actual codebase before returning them.',
      'The emphasis throughout is on evaluation and correctness over generation speed. A context scaffold that\'s 90% right is actively harmful if the agent acts on the wrong 10%.',
    ],
    tags: ['AI Agents', 'Context Engineering', 'Evaluation', 'Static Analysis', 'Python'],
    href: 'https://github.com/vb-nattamai/agent-ready',
    status: 'Active',
  },
];

const experimentPlaceholders = [
  {
    name: 'Eval Harness Patterns',
    description:
      'A collection of evaluation harness patterns for AI developer tools. How to define ground truth, measure regression, and build a repeatable signal for agent output quality.',
    status: 'In progress',
  },
  {
    name: 'Context Window Audit Tool',
    description:
      'A diagnostic tool for inspecting what actually lands in an LLM\'s context window when an agent fires. Useful for debugging unexplained agent failures.',
    status: 'Planned',
  },
  {
    name: 'Agentic SDLC Reference Implementation',
    description:
      'A small but complete reference implementation of a software delivery pipeline with AI agent hooks at each phase: spec, implementation, review, and validation.',
    status: 'Planned',
  },
];

function StatusBadge({status}) {
  const statusClass =
    status === 'Active'
      ? styles.statusActive
      : status === 'In progress'
      ? styles.statusInProgress
      : styles.statusPlanned;
  return <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>;
}

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="Projects and experiments by Venkatesh Babu Nattamai Balakrishnan — AI agents, context engineering, and engineering tooling.">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Projects</h1>
            <p className={styles.pageSubtitle}>
              Experiments and systems built around AI-driven software delivery, context engineering,
              and engineering tooling.
            </p>
            <Link
              href="https://github.com/vb-nattamai"
              className={styles.githubLink}>
              github.com/vb-nattamai →
            </Link>
          </div>

          {/* Featured */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured</h2>
            {featuredProjects.map((project) => (
              <div key={project.name} className={styles.featuredCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                </div>
                <div className={styles.cardBody}>
                  {project.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.tagList}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.href} className={styles.repoLink}>
                    View repository →
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* Experiments */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiments &amp; upcoming work</h2>
            <p className={styles.sectionNote}>
              Things in various stages of design and build. More detail as they mature.
            </p>
            <div className={styles.experimentList}>
              {experimentPlaceholders.map((item) => (
                <div key={item.name} className={styles.experimentCard}>
                  <div className={styles.experimentHeader}>
                    <h3 className={styles.experimentName}>{item.name}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className={styles.experimentDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
