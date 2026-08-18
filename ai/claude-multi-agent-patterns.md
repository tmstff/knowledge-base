# Claude Multi-Agent Patterns

How to structure multiple Claude agents to work together, when it makes sense, and how to coordinate them.

## When to Use Multiple Agents

Before reaching for multi-agent, check these criteria:

- **Complexity** — Is the task multi-step and hard to fully specify upfront?
- **Value** — Does the outcome justify higher cost and latency?
- **Parallelism** — Can independent subtasks run concurrently?
- **Context isolation** — Would one long context window hurt quality or hit limits?

If none of these apply, a single well-prompted Claude call is almost always better.

## Do Roles Make Sense? Yes.

Each agent gets its own identity. The coordinator uses `name` and `description` to decide who to delegate to.

| Field | Purpose |
|---|---|
| `name` | How the coordinator refers to this agent |
| `description` | What this agent is good at (used for routing) |
| `model` | Run cheap tasks on Haiku, heavy reasoning on Opus |
| `tools` | Scoped to only what this agent needs |

## Coordination Patterns

### Coordinator + Specialist Workers
The most common pattern. A coordinator agent owns the plan and delegates subtasks to specialist sub-agents. Each worker has a narrower system prompt and tool set.

```
Coordinator
├── Agent("coder-agent",   "implement feature X")
├── Agent("reviewer-agent","review the diff")
└── Agent("test-agent",    "write tests for feature X")
```

### Self-Copies (Fan-Out)
Spawn copies of the current agent to process many similar items in parallel. Good for large batches (e.g., 50 files, 20 PRs) where each item is independent.

### Advisor
A non-executing agent the coordinator consults before committing to expensive actions. Typically a cheap model (Haiku) to screen options before Opus does the heavy work.

### Independent Verification
Two agents independently analyze the same problem; the coordinator reconciles their findings. Useful for catching errors or getting higher-confidence results.

## Relevant Use Cases

| Pattern | Example |
|---|---|
| Fan-out over data | 50 PRs → one reviewer agent per PR in parallel |
| Specialist delegation | Route "write code" → coder, "write tests" → test agent |
| Cheap + expensive split | Haiku skims/filters, Opus processes what passes |
| Independent verification | Two agents analyze separately, coordinator reconciles |
| Long-running without context blowout | Each sub-task is an isolated agent thread |

## Key Isolation Property

Agents share the container/filesystem but each thread has its **own conversation history**. This means:

- Shared files = the coordination channel between agents
- No context pollution between agents
- The coordinator only sees what sub-agents explicitly return, not their full internal reasoning

This isolation is what makes multi-agent practical for long, complex tasks — each agent stays focused without accumulating noise from other threads.

## Claude Code (CLI): Defining and Invoking Agents

### Defining an Agent Role

Create a Markdown file with YAML frontmatter. The file body is the agent's system prompt.

**Location:**
- `~/.claude/agents/<name>.md` — global, available across all projects
- `.claude/agents/<name>.md` — project-local only

Per the global `CLAUDE.md` convention for this setup: always create in `~/.claude/agents/`.

**File format:**

```markdown
---
name: go-reviewer
description: Reviews Go code for correctness and idiomatic patterns. Use for "review this", "audit this file", "check my diff".
model: claude-sonnet-5        # optional — inherits session model if omitted
tools: [Read, Grep, Bash]     # scoped to what this agent needs; omit for all tools
---

You are a Go code reviewer. Focus on correctness, error handling, and idiomatic Go.
Never suggest style changes unless they affect readability significantly.
Return findings as: `path:line: severity: problem. fix.`
```

The `description` field serves two purposes: it tells Claude when to pick this agent automatically, and it tells the human what the agent is for. Write it with explicit trigger phrases ("use for...") so both uses are clear.

### Invoking an Agent

Three ways to get Claude to use a sub-agent:

1. **Automatic** — Claude decides on its own to use the `Agent` tool when the task benefits from isolation or delegation. It selects the agent type based on `description` matching against the task at hand.

2. **Explicit user request** — Ask for it directly: *"use the code-reviewer agent for this"* or *"review this PR"*. Claude matches the request to the closest agent by description.

3. **Coordinator → worker (in workflows)** — A coordinator Claude instance calls the `Agent` tool with `subagent_type` set to the agent name and passes a typed `prompt`. This is how multi-step workflows fan out work programmatically.

### How This Differs from Copilot CLI

Copilot CLI uses **runtime intent matching** — the dispatcher automatically routes a task to an agent based on `description` similarity, without explicit invocation syntax.

Claude Code uses **explicit tool calls** — the coordinator (or the user) consciously selects which agent to invoke. The `description` guides that selection, but the routing is deliberate, not automatic. This gives more predictable behaviour at the cost of requiring the coordinator to make the delegation decision explicitly.

## Versioned and Shareable Agent Config

Keep agent definitions in a personal git repo and symlink the tool-specific directories into it. One source of truth; changes tracked in version control; shareable across machines.

### Pattern

```
~/repos/personal/ai-config/agents/          ← source of truth (own git repo)
        ├── coder.md                        ← Claude Code agents (*.md)
        ├── reviewer.md
        └── copilot/
            ├── coder.agent.md            ← Copilot CLI agents (*.agent.md)
            └── reviewer.agent.md

~/.claude/agents/   → ~/repos/personal/ai-config/agents/         (Claude Code)
~/.copilot/agents/  → ~/repos/personal/ai-config/agents/copilot/ (Copilot CLI)
```

```bash
ln -s ~/repos/personal/ai-config/agents ~/.claude/agents
ln -s ~/repos/personal/ai-config/agents/copilot ~/.copilot/agents
```

### Referencing Profiles Instead of Duplicating

Agent prompts should reference a shared profile file rather than copy its content. When the profile changes, agents in a fresh session pick it up automatically.

**Claude Code** — profile is loaded via `CLAUDE.md` (`@/path/to/ai-profiles.md`), so the agent body just says which profile to apply:

```markdown
---
name: coder
description: Writes or edits code. Applies the Coding profile from ai-profiles.md.
tools: [Read, Edit, Write, Bash]
---

Apply the **Coding** profile defined in ai-profiles.md (loaded via CLAUDE.md). Follow all rules exactly, including the base layer rules.
```

**Copilot CLI**:

```yaml
---
name: coder
description: >
  Writes, edits, or creates code. Use for implementing features, fixing bugs,
  refactoring, or any task that produces or modifies code.
tools: ["*"]
---

Apply the **Coding** profile defined in ai-profiles.md (loaded via copilot-instructions.md). Follow all rules in that profile exactly, including the base layer rules.
```

See [AI Behavior Profiles](ai-behavior-profiles.md) for how to set up the shared profile file.
