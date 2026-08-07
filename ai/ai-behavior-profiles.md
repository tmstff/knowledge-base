# AI Behavior Profiles (Global)

Situation-specific instruction sets applied on top of a base layer — e.g. Coding, Reviewing, Debugging, Prod Analysis. AI infers the active profile from task context.

## Writing Profiles

### Layering

Use two layers:

1. **Base layer** — always-on rules that apply regardless of task (e.g. cite sources, no padding, never commit without instruction). Every profile inherits these.
2. **Situation profiles** — applied on top, triggered by task type. Keep profiles focused: only add rules that differ from the base layer.

Typical profiles: `Coding` / `Reviewing` / `Local Debugging` / `Prod Analysis`. Add more as needed; fewer is better.

### Activation

Instruct the AI to:
- **Infer** the active profile from task context (what is being asked, what files are involved)
- **State** which profile it's applying at the start of the task — makes behaviour predictable and auditable
- **Accept user override** — user can name a different profile explicitly

Example instruction to put in the file:
```
Activation: infer the active profile from task context. State which profile you are applying at the start of each task. User can override by naming a profile explicitly.
```

### Profile Structure

Each profile should define:
- **Trigger condition** — when it activates (e.g. "writing or editing code")
- **Rules** — numbered list, imperative, unambiguous
- **Escalation path** — what to do when a finding needs action (e.g. apply fix using Coding profile, write remainder to `.scratch/`)

### Tips

- Rules should be unambiguous enough that two different AI models produce the same behaviour.
- Prefer numbered lists over prose — easier to reference ("apply rule 3").
- Avoid overlap between profiles; if a rule belongs in all profiles, move it to the base layer.
- Keep profiles short — long profiles get ignored or hallucinated around.

## Pattern

One source-of-truth markdown file, referenced by each tool's global config. No per-repo setup needed.

```
~/repos/personal/ai-profiles/ai-profiles.md   ← source of truth (own git repo)
        │
        ├── Claude Code   ~/.claude/CLAUDE.md  →  @/path/to/ai-profiles.md
        └── VS Code       ~/.vscode/settings.json  →  copilot instructions file ref
```

## Claude Code

Add to `~/.claude/CLAUDE.md`:

```markdown
@/Users/you/repos/personal/ai-profiles/ai-profiles.md
```

Loaded automatically on every session. Project-level `CLAUDE.md` files stack on top.

## GitHub Copilot (VS Code)

Add to `~/.vscode/settings.json` (user-level, not workspace):

```json
"github.copilot.chat.codeGeneration.instructions": [
  { "file": "/Users/you/repos/personal/ai-profiles/ai-profiles.md" }
]
```

Global — no per-repo `.github/copilot-instructions.md` needed.

## Copilot CLI (`gh copilot`)

No known global config mechanism. VS Code is the fallback.

## Version Control

Keep `ai-profiles.md` in its own repo (`~/repos/personal/ai-profiles/`). Separate from `~/.claude/` config so it can be shared without exposing other personal settings.

## Sharing / Repo-Specific Layers

When ready to share: add repo-specific additions to that repo's `CLAUDE.md` and/or `.github/copilot-instructions.md`. Keep global file clean (no repo-specific content).

> Full implementation plan: `../.scratch/ai-profiles-implementation.md`  
> Requirements: `../.scratch/ai-profiles-requirements.md`
