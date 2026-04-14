---
slug: context-overload-multi-agent-systems
title: Context Overload in Multi-Agent Systems
authors: [venkatesh]
tags: [ai-agents, context-engineering, multi-agent, distributed-systems]
date: 2024-11-02
---

There's a failure mode that shows up consistently when you build multi-agent systems: the more context you give agents, the worse the outputs get — past a certain threshold. This is counterintuitive if you think of context as purely additive. It isn't.

Understanding why requires thinking about context the same way you'd think about a bandwidth-constrained channel in a distributed system: it has capacity, and when you push past capacity, you don't just get slower — you get degraded fidelity.

<!-- truncate -->

## How multi-agent context works

In a simple agent setup, you have one agent, one context window, one task. The context contains the task description, relevant background, and whatever tools or documents the agent has access to. Manageable.

In a multi-agent setup, you have orchestrators, subagents, tool call results, and intermediate outputs flowing between them. The context at each node in this graph is the accumulation of everything upstream.

This creates two distinct problems:

**Vertical accumulation.** An orchestrator fires a subagent. The subagent's output (possibly long) gets returned into the orchestrator's context. The orchestrator fires another subagent with the updated context. This continues until the orchestrator's context window is approaching capacity, at which point earlier context is either dropped (losing signal) or retained (diluting signal-to-noise).

**Horizontal noise.** Subagents working in parallel on different aspects of a task produce outputs that weren't designed to be coherent with each other. When those outputs are recombined into a single context for the next stage, the resulting context contains overlapping, sometimes contradictory information about the same domain.

---

## Why more context degrades quality

This might seem paradoxical — shouldn't more information help? Not necessarily, and here's why.

Language models process their entire context window before generating each token. The attention mechanism means tokens near the beginning and end of the context window receive more weight than tokens in the middle. Long context windows have a well-documented "lost in the middle" problem: information buried in the middle of a long context is less reliably retrieved than the same information at the extremes.

More fundamentally: context is not a neutral carrier. When you put contradictory or redundant information into a context window, you're not just adding tokens — you're creating uncertainty. The model has to resolve contradictions probabilistically, and it often doesn't do so correctly.

In multi-agent systems, this compounds quickly. Each agent adds to the noise. Each handoff introduces another opportunity for context pollution. By stage four or five of a complex pipeline, the context your final agent is working with may be technically enormous but functionally incoherent.

---

## What this looks like in practice

Signs that your multi-agent pipeline is suffering from context overload:

- Outputs get less specific and more hedged as the pipeline progresses
- The final agent's output contradicts earlier outputs in the same run without resolution
- Intermediate agents start paraphrasing earlier context rather than extending it
- You add more agents to improve quality and quality gets worse

The last one is particularly common and particularly frustrating. The instinct when an agent pipeline produces poor output is to add more context, more agents, more review steps. This can make the problem worse.

---

## Structural fixes

The solution isn't to limit what agents can do — it's to be deliberate about what flows between them.

**Design context boundaries explicitly.** Each agent in a pipeline should receive only the context it needs to complete its specific task. Not the full upstream context — the minimal distillation of upstream context that's relevant to this agent's responsibility. This is harder to implement but produces dramatically better results.

**Use structured outputs at handoff points.** When an agent returns a result that feeds into another agent, the result should be structured rather than natural language wherever possible. A structured output can be parsed, validated, and compact. A verbose natural language output carries noise.

**Compress aggressively between stages.** The orchestrator's job at each stage isn't just to receive and re-inject outputs — it's to compress. Take the outputs of the previous stage, extract the relevant signal, discard the noise, and present only the signal to the next stage.

**Separate storage from context.** Not everything needs to be in the context window. Intermediate results that might be needed by future stages but aren't needed right now can be written to storage and retrieved when relevant. This is the equivalent of working memory versus long-term memory in human cognition.

---

## The deeper issue

Context overload in multi-agent systems is a symptom of treating context as cheap. It isn't. Every token in a context window has a cost — not just a financial cost, but a quality cost. When you design a multi-agent system, you're implicitly making decisions about information architecture: what gets passed where, in what form, and at what granularity.

Teams that do this deliberately produce multi-agent systems that work. Teams that don't iterate toward systems that work in demos and fail under real load.

The engineering discipline for this doesn't exist yet in any codified form. It's one of the genuinely interesting problems in the space.
