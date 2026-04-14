---
slug: why-ai-agents-fail-real-codebases
title: Why AI Agents Fail on Real Codebases
authors: [venkatesh]
tags: [ai-agents, context-engineering, software-engineering]
date: 2024-09-15
---

AI agent demos are almost always run against clean, small, well-structured repositories. The agent opens a few files, reads a README, makes a change, and the change is right. It's impressive. Then you point the same agent at a real production codebase and the quality drops off a cliff.

This isn't a coincidence, and it isn't a model capability problem. The failure modes are structural.

<!-- truncate -->

## The gap between demos and reality

Real codebases have properties that demo codebases don't:

**Accumulated ambiguity.** Real code carries years of decisions. Functions named after their third implementation. Config keys that no longer match their purpose. Tests that pass but don't test the thing they're named after. An agent working from file contents alone has no way to distinguish the meaningful name from the misleading one.

**Implicit conventions.** Every non-trivial codebase has conventions that aren't written down — how errors are handled, how services are named, which patterns are approved versus which ones exist because they were never cleaned up. These conventions exist in the heads of the people who wrote the code. Agents don't have heads.

**Deep dependency graphs.** A change to a function signature might have implications in twelve other files. Following those implications requires understanding the dependency structure of the project, not just reading the files that are immediately visible.

**Scale.** A production codebase might have 500,000 lines of code across 3,000 files. No context window holds that. The question isn't "can the agent read the code" — it's "how does the agent know which code to read?"

---

## Why context injection doesn't fix this

The common quick fix is to inject more context. Give the agent a longer system prompt. Embed the README. Pass in some relevant files. 

This helps at the margins, but it doesn't address the structural problem. More context isn't the same as the right context.

When you inject context naively, a few things happen:

**Signal dilution.** The relevant signal gets buried in noise. An LLM processing a 100,000 token context window isn't giving equal attention to every token — relevant facts that appear in a noisy context are less likely to be used than the same facts in a focused context.

**Contradiction amplification.** Real codebases have inconsistencies. Stale comments, outdated docs, conflicting patterns in different modules. When you inject large chunks of context, you inject these contradictions. The agent has no reliable way to resolve them.

**No structural understanding.** A dump of file contents doesn't convey architecture. An agent reading ten service files in a microservices system doesn't know which one is upstream of which, which ones own which data, or which ones would be affected by a particular change. That information lives in the structure, not in any individual file.

---

## What actually needs to happen

The agents that work reliably on real codebases have one thing in common: they have structured representations of the codebase, not raw file dumps.

This means things like:
- A map of the module structure and dependency graph
- Extracted interface contracts (what each module exposes and what it depends on)  
- Identified conventions (naming patterns, error handling patterns, test patterns)
- Explicit pointers to the files relevant to a given task

Building this representation is the actual engineering problem. It's not prompt engineering. It's static analysis, graph construction, and careful representation design — combined with evaluation to confirm the representation is accurate enough to be useful.

Most current agent frameworks don't have this infrastructure. They give agents file system access and a search tool and call it done. For simple tasks on small codebases, this is fine. For complex tasks on real systems, it's why agents fail.

---

## The optimistic take

None of this is unsolvable. The failure modes are well-defined, which means they can be engineered around. The interesting problems are:

- How do you extract a codebase into a representation that's useful to agents without losing fidelity?
- How do you scope context to a specific task without missing relevant information?
- How do you evaluate whether your context representation is good enough to enable the task?

These are hard engineering problems, not fundamental limitations of the technology. They're just not the problems most of the ecosystem is focused on right now.
