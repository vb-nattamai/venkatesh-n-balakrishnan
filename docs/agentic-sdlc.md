---
id: agentic-sdlc
title: Agentic SDLC
sidebar_position: 2
---

# Agentic SDLC

An *agentic SDLC* is a software delivery lifecycle where AI agents participate as active contributors — not just autocomplete tools — at multiple stages of the development process.

---

## What makes it different

Traditional SDLC stages look something like: **requirements → design → implementation → review → test → deploy**.

In an agentic SDLC, agents can participate in each stage:

- **Requirements** — agents can parse specs, identify ambiguities, generate clarifying questions, and produce structured representations of intended behavior
- **Design** — agents can generate architecture options, evaluate tradeoffs against existing system constraints, and surface relevant precedents from the codebase
- **Implementation** — agents produce code, but grounded in real context about the codebase — conventions, dependencies, test patterns, naming schemes
- **Review** — agents run against defined correctness criteria: does this change match the spec? does it break any invariants? does it align with existing patterns?
- **Validation** — agents run evaluation harnesses against outputs before they reach humans for review

The difference from "AI-assisted development" (copilots, chat assistants) is that the agent is embedded in the process and feeds back into it, not just responding to prompts.

---

## The hard problems

**Context fidelity.** Agents need to know about the real system they're working in. Not a summary, not a README excerpt — the actual structure, conventions, and constraints of the codebase. Providing this reliably is still an open engineering problem.

**Evaluation.** How do you know the agent's output is correct? Not just "it runs" — does it actually do what was intended? This requires explicit evaluation criteria, which most workflows don't define.

**Handoff design.** Where does the human stay in the loop, and where does the agent own the outcome? The boundary matters for both quality and trust. Getting this wrong in either direction — too much human oversight makes agents pointless, too little makes errors invisible — is an active failure mode.

**Failure mode visibility.** Agents fail silently. They produce confident-sounding wrong answers. The tooling to catch this — tracing, logging, evaluation replay — barely exists yet.

---

## Why it matters

The leverage here is real. If you can reliably automate the routine parts of the delivery cycle — boilerplate, test generation, documentation, convention-checking — engineers spend more time on the hard problems that actually need judgment.

But "reliably" is the operative word. Most current agent-based development tools aren't reliable enough for use in production workflows on complex systems. The infrastructure to make them reliable is what's actually worth building.

---

## See also

- [Context Engineering](./context-engineering)
- [Evaluation-First AI Systems](./evaluation-first)
