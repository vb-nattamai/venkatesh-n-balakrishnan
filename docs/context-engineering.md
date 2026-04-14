---
id: context-engineering
title: Context Engineering
sidebar_position: 3
---

# Context Engineering

*Context engineering* is the discipline of designing, structuring, and delivering the right information to an AI system at the right time. It's the actual lever in AI-assisted development — more important than prompt wording, model selection, or system design choices that get more attention.

---

## Why context is the variable that matters

Language models are context-processing machines. Given a context window, they predict the most likely continuation. The quality of that prediction is almost entirely a function of what's in the context.

This is obvious once stated, but the implication is often missed: **if your AI outputs are bad, the problem is almost always context, not the model.**

Common context problems:

- **Too little context** — the agent doesn't know about the relevant parts of the system
- **Wrong context** — the agent has information, but not the specific information it needs for this task  
- **Noisy context** — the context window is full of irrelevant text that crowds out signal
- **Contradictory context** — different parts of the context contradict each other, producing confused outputs
- **Stale context** — the context reflects an old state of the system, not the current one

---

## Context as a first-class engineering concern

Most teams treat context as a prompt engineering problem: write better prompts, include more detail, tweak the system message. This is the wrong frame.

Context engineering operates at a higher level:

**Scope design.** What is the minimal context set that lets an agent complete this task correctly? This isn't about giving agents everything — it's about giving them the right things. Larger context windows don't solve the signal-to-noise problem, they just make it more expensive.

**Extraction and structuring.** How do you pull relevant context from a live system? For codebases, this means analyzing structure, dependencies, conventions, and domain patterns — not concatenating files. The representation matters as much as the content.

**Delivery mechanisms.** Context can be injected directly, retrieved via vector search, fetched via tool calls, or constructed dynamically at inference time. Each mechanism has different tradeoffs for relevance, staleness, and cost.

**Evaluation of context quality.** Does the context you're providing actually enable the task? This is measurable — you can run the same task with different context configurations and compare output quality. Most teams don't do this.

---

## Patterns

**Repository context maps.** A structured representation of a codebase — its modules, dependencies, conventions, and key abstractions — that agents can query rather than read raw files.

**Task-scoped context.** Rather than providing a generic system context, build context around the specific task. For a code change, that means: the files being changed, the tests covering those files, the interface contracts those files implement, and examples of how similar changes have been made previously.

**Context compression.** Large inputs need to be compressed before entering the context window, but naive summarization loses precision. Good compression strategies are domain-specific — compressing code is different from compressing documentation.

**Context versioning.** Context snapshots should be reproducible. If you can't replay the exact context that produced an output, you can't debug failures or run controlled evaluations.

---

## See also

- [Agentic SDLC](./agentic-sdlc)
- [Evaluation-First AI Systems](./evaluation-first)
