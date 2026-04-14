---
id: evaluation-first
title: Evaluation-First AI Systems
sidebar_position: 4
---

# Evaluation-First AI Systems

*Evaluation-first* is an approach to building AI systems where the evaluation harness is designed before — or in parallel with — the system itself. You define what "correct" means, build the infrastructure to measure it, and only then build the thing you're measuring.

This is borrowed from test-driven development, adapted for a domain where outputs are probabilistic and "correct" is harder to define than a passing assertion.

---

## Why most AI developer tools skip this

Evaluation is slow, unglamorous, and hard to scope. You have to decide what counts as a good output before you know what kinds of outputs your system will produce. Most teams defer it because shipping feels more important.

The cost shows up later:

- You ship a system that "usually works" with no visibility into when it doesn't
- You can't detect regressions when you change the model, prompt, or context
- You can't compare approaches because you have no ground truth to compare against
- User trust degrades and you don't know why

In traditional software, you can often get away with skipping tests early and adding coverage later. In AI systems, the baseline behavior shifts with every model update, every context change, and every prompt tweak. Without evaluation infrastructure, you're flying blind.

---

## What evaluation-first looks like in practice

**Define the task precisely.** What exactly should the system do? Not "generate good code" — but "given a function signature and a docstring, generate an implementation that passes the explicitly provided tests, follows the existing module's naming conventions, and does not introduce new dependencies not present in requirements.txt."

**Build a test dataset before building the system.** A set of inputs with known correct outputs. For code generation, this means real examples from real codebases. For codebase analysis tasks, it means annotated repositories with ground-truth labels on the things you're trying to extract.

**Define metrics that matter.** Precision, recall, edit distance, passing rate against a test suite — whatever maps to the actual quality signal for your task. Avoid "LLM-as-judge" evaluations as the primary signal — they're useful but circular.

**Automate evaluation in CI.** Every change to the model config, the prompt, or the context pipeline should trigger a run against your evaluation dataset. Regressions should block deployment. This is standard engineering practice applied to AI systems.

**Keep a failure log.** The most valuable evaluation artifact isn't the pass rate — it's the set of inputs your system fails on. Build the habit of curating failure cases and using them to drive improvement.

---

## The hard part: ground truth

The hardest part of evaluation-first for AI developer tools is defining ground truth. For most tasks, "correct" is contextual, nuanced, and partially subjective.

Some strategies:

- **Use structured tasks with objective criteria.** Code that passes a test suite. A refactoring that preserves the public interface. A migration that produces valid SQL. Wherever the task has an objective completion criterion, use it.
- **Use human annotation for tasks without objective criteria, but do it systematically.** Not "does this look good?" but "does this output meet criteria A, B, and C?" with definitions for each criterion.
- **Use contrastive evaluation.** Rather than rating outputs on an absolute scale, compare pairs. Which output is better, and why? This is more reliable than absolute scoring and easier to calibrate.
- **Accept imperfect ground truth.** Some signal is better than no signal. An evaluation harness with noisy labels is still better than no harness, as long as you know the noise characteristics.

---

## Minimum viable evaluation

If "full evaluation framework" feels out of reach, the minimum useful thing is:

1. A set of 20–50 representative inputs with explicitly defined expected outputs
2. A repeatable script that runs your system against those inputs and reports pass/fail
3. The discipline to run it before every significant change

This takes a day to build. The absence of it costs weeks of invisible regressions.

---

## See also

- [Agentic SDLC](./agentic-sdlc)
- [Context Engineering](./context-engineering)
