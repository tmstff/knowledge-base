# Some AI Stuff that Could Be Useful

## Tools

* [Supacode](https://supacode.sh/) — Native macOS app for running 50+ coding agents in parallel in isolated git worktrees from a single terminal interface.
* [CodeBurn](https://codeburn.app/) — A local-first CLI/TUI dashboard for tracking AI coding token costs across Claude Code, Cursor, Codex, and others.
  * `codeburn report -p today --refresh 60`
* [Claude](https://claude.ai/)
  * `/clear` — Wipes all conversation history for a hard reset; use at task boundaries when switching to something unrelated.
  * `/resume` — Opens a session picker or jumps directly to a named past session to pick up where you left off.
  * `/btw` — Asks an ephemeral side question without adding it to the conversation context.
  * `/goal` — Sets a completion condition and keeps Claude working autonomously across turns until it is met, using a separate evaluator model to check after each turn.
  * `/plugin marketplace add <owner>/<repo>` — Adds a skill marketplace from a GitHub repository.
  * `esc` — Interrupts the current thinking or execution mid-response.
  * `esc esc` — Opens a message picker to rewind the conversation to a previous point and branch from there.
  * ~/.claude/settings.json
    ```
    "permissions": {
        "allow": ["Bash(npm run *)", "Read(./src/**)"],
        "ask":   ["Bash(git push *)"],
        "deny":  ["Bash(rm *)", "Read(./.env*)"]
    }
    ```
* Sandboxing
  * [OpenShell](https://github.com/NVIDIA/OpenShell) — NVIDIA's safe private runtime for autonomous AI agents; isolates each agent in a sandboxed container with policy-enforced network and filesystem controls.
  * [sbx](https://github.com/docker/sbx-releases) — Docker Sandboxes; gives AI tools controlled containerized access to filesystem, network, and tools without risking the host machine.

## Skills

* [mattpocock/skills](https://github.com/mattpocock/skills/) — A collection of reusable AI agent skills for common software engineering workflows.
  * `/grill-me` — Intensively questions your plan until every decision branch is resolved, ensuring full alignment before implementation begins.
  * `/to-prd` — Synthesizes the current conversation into a product requirements document and posts it as a GitHub issue.
  * try out:
    * `/tdd` - Test-driven development with red-green-refactor loop. 
    * `/write-a-skill` — Creates new agent skills with proper structure, progressive disclosure, and bundled resources.
* [caveman](https://github.com/JuliusBrussee/caveman) - makes agent talk like caveman — cuts ~75% of output tokens, keeps full technical accuracy. Brain still big. Mouth small.
* [openshift-eng/ai-helpers](https://github.com/openshift-eng/ai-helpers/) — Developer productivity plugins and commands for Claude Code and other AI assistants.
  * `/code-review:pr <pr-url-or-number>` — Performs a comprehensive code quality review of a GitHub PR, checking test coverage, idiomatic patterns, DRY/SOLID principles, and build verification.
  * `/code-review:pre-commit-review` - Performs a comprehensive code quality review of staged and unstaged changes before committing. Otherwise same as :pr 
* [aro-ai-tools](https://github.com/openshift-online/aro-ai-tools) — AI skills and plugins for querying ARO (Azure Red Hat OpenShift) metrics and logs through AI coding agents.

## Misc
* `CLAUDE.md` - Identity & behavior rules specific to Claude; Define Claude’s role, tone, coding conventions, and persistent rules
* `CONTEXT.md` - Session snapshot: current goals, active tasks, temporary tribal knowledge
* [AI Behavior Profiles](ai-behavior-profiles.md) — How to create situation-specific profiles (Coding, Reviewing, Debugging, etc.) that load globally in Claude Code and Copilot from a single source-of-truth file.