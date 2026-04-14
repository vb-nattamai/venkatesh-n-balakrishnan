import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About"
      description="About Venkatesh Babu Nattamai Balakrishnan — Director of Software Engineering focused on AI-driven delivery, agentic SDLC, and engineering organization design.">
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>About</h1>

          <section className={styles.section}>
            <p className={styles.lead}>
              I'm a Director of Software Engineering with a background in building systems that help
              engineering organizations move faster and more reliably. My current focus is the
              intersection of AI and software delivery — specifically, how to make AI-assisted
              development something you can actually depend on in production.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Engineering leadership</h2>
            <p>
              I've led distributed engineering teams across product and platform domains. My
              approach to leadership is grounded in clarity of direction, high standards for
              engineering craft, and building systems — both technical and organizational — that
              scale without constant intervention.
            </p>
            <p>
              I care about how organizations make decisions, how technical strategy connects to
              delivery reality, and how senior engineers grow into staff and principal roles. I
              don't believe good engineering culture is accidental — it's designed.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>AI-driven software delivery</h2>
            <p>
              The current wave of AI coding tools — copilots, chat assistants, agent scaffolds —
              are useful but immature. Most of them work well on greenfield problems and fail quietly
              on real codebases. I work on fixing that gap.
            </p>
            <p>
              My focus is on the structural problems: how do you give an AI agent the right context
              about a real system? How do you know when its output is trustworthy? How do you design
              an SDLC where agents are collaborators rather than one-shot generators?
            </p>
            <p>
              I think about this as an engineering discipline — not a product category. The
              interesting problems are in evaluation design, context scoping, grounding outputs
              against real repository constraints, and building feedback loops that improve agent
              behavior over time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Technical interests</h2>
            <ul className={styles.interestList}>
              <li>
                <strong>Agentic SDLC</strong> — Software delivery pipelines where AI agents
                participate in specification, implementation, review, and validation. What changes
                when agents are first-class contributors?
              </li>
              <li>
                <strong>Context engineering</strong> — How you structure, scope, and deliver
                context to AI systems. This is more important than prompt wording and less discussed
                than it should be.
              </li>
              <li>
                <strong>Evaluation systems</strong> — Designing testable, repeatable evaluation
                harnesses for AI outputs. The discipline of knowing whether something works before
                you ship it.
              </li>
              <li>
                <strong>Platform engineering</strong> — Internal developer platforms, reliability
                primitives, and the infrastructure that lets product teams move fast without
                creating systemic risk.
              </li>
              <li>
                <strong>Distributed systems</strong> — Service mesh, data consistency, observability,
                and the failure modes that appear at scale.
              </li>
              <li>
                <strong>Org design</strong> — Team topology, principal-level engineering craft,
                technical roadmapping, and how engineering organizations stay effective as they grow.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>What I'm working on</h2>
            <p>
              Currently building{' '}
              <a
                href="https://github.com/vb-nattamai/agent-ready"
                target="_blank"
                rel="noopener noreferrer">
                AgentReady
              </a>
              , a system that reads real codebases and generates context-aware scaffolding for AI
              agents. The goal is to close the gap between what an agent needs to work effectively
              on a real repository and what typical prompt injection gives it.
            </p>
            <p>
              I write about software engineering, AI tooling, and engineering leadership here and on{' '}
              <a
                href="https://github.com/vb-nattamai"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/venkatesh-n-balakrishnan/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
