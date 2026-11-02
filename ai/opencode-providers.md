# OpenCode Providers: Vertex, Copilot, Cursor

Setup for [OpenCode V2](https://opencode.ai/v2/docs/providers/) (tested with 2.2.5) using three providers: Google Vertex, GitHub Copilot, and Cursor. Everything else is blocked by policy.

Global config: `~/.config/opencode/opencode.jsonc`. Changes apply without restart.

## Full config

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  // Allow only these three providers (last matching rule wins)
  "policies": [
    { "action": "provider.use", "resource": "*", "effect": "deny" },
    { "action": "provider.use", "resource": "google-vertex", "effect": "allow" },
    { "action": "provider.use", "resource": "github-copilot", "effect": "allow" },
    { "action": "provider.use", "resource": "cursor", "effect": "allow" }
  ],
  "plugins": ["cursor-opencode-provider@0.8.5"],
  "providers": {
    "google-vertex": {
      "settings": {
        "project": "<gcp-project-id>",
        "location": "global"
      }
    },
    "github-copilot": {
      "name": "GitHub Copilot"
    }
  }
}
```

## Google Vertex

Uses Google Application Default Credentials (ADC); no API key. Covers Claude, Gemini, and other models.

1. Create ADC once:
   ```bash
   gcloud auth application-default login
   # -> ~/.config/gcloud/application_default_credentials.json
   ```
2. Set project + location in config (see above). ADC alone does not activate the provider.
   - Same values e.g. used in Claude Code via `ANTHROPIC_VERTEX_PROJECT_ID` and `CLOUD_ML_REGION`.
   - Alternative: env vars `GOOGLE_CLOUD_PROJECT` / `GOOGLE_VERTEX_LOCATION`.
3. Test:
   ```bash
   opencode run -m 'google-vertex/claude-haiku-4-5@20251001' 'Reply with exactly: ok'
   opencode run -m 'google-vertex/gemini-3.5-flash' 'Reply with exactly: ok'
   ```

Note: use provider ID `google-vertex` for all Vertex models (the V1 `google-vertex-anthropic` ID no longer exists).

## GitHub Copilot

Uses device OAuth. Tokens from `gh` or the Copilot CLI are **not** reused.

1. Add the provider entry (see above; optional if the provider isn't policy-blocked).
2. In the TUI:
   ```text
   /connect   # -> GitHub Copilot -> Login with GitHub Copilot -> GitHub.com
   ```
   Finish the device flow in the browser. Requires a Copilot Chat entitlement.
3. Test:
   ```bash
   opencode run -m 'github-copilot/claude-opus-5.5' 'Reply with exactly: ok'
   ```

Without login, requests fail with `missing required Authorization header`.

## Cursor (third-party plugin)

Via [oakimov/cursor-opencode-provider](https://github.com/oakimov/cursor-opencode-provider). Unofficial: it reverse-engineers Cursor's private protocol — check Cursor ToS / company policy before use.

1. Add the plugin and allow `cursor` in policies (see above).
   - Use the **bare package name**. The README's `cursor-opencode-provider/plugin/opencode2` fails on OpenCode 2.2.5 (`Plugin entrypoint not found` / treated as a local path).
   - Verify: `opencode plugin list` → `cursor.provider  0.8.5`.
2. Log in:
   ```text
   /connect   # -> Cursor -> browser login, or API key (crsr_...)
   ```
   Alternatively set `CURSOR_API_KEY` on the OpenCode service:
   ```bash
   opencode service set env CURSOR_API_KEY crsr_xxxxxxxxxxxx
   ```
3. Test:
   ```bash
   opencode run -m 'cursor/composer-2.5' 'Reply with exactly: ok'
   ```

Notes:
- Cursor models have no release date, so they sort last in `/models` — filter by provider "Cursor".
- The plugin moves MCP tools out of Code Mode (`execute`) for **all** providers. Add `"codemode": true` to an MCP server to keep it inside `execute`.
- Update: `opencode plugin check` / `opencode plugin update`.

### Security scan (2026-11-02)

Scanned `oakimov/cursor-opencode-provider` at commit `b2d2cd8` (main, 2026-10-29). **No secrets, no SAST-detected vulnerabilities, no malware indicators.**

Tests performed:
- **Manual review** — no hardcoded secrets, no TLS bypass (`rejectUnauthorized`/`NODE_TLS_REJECT`), no prototype pollution, no insecure randomness (uses `crypto.randomUUID`); `execSync` only runs static device-fingerprint commands and git uses `execFile` with arg arrays; all shell-quote helpers use correct POSIX `'\''` escaping; path writes are mode `0600`/`0700` with a realpath-based traversal guard; auth tokens only read from OpenCode's managed `auth.json` and are redacted (`authorization`, `x-cursor-checksum`) in logs; **no npm install hooks** (no `pre/postinstall`); outbound hosts limited to `cursor.sh`/`cursor.com`, `connectrpc.com`, `github.com`, `mcp.exa.ai`; publish workflow uses OIDC trusted publishing with SHA-pinned actions.
- **trufflehog 3.99.7** (git history) — 0 verified secrets; only unverified hit is a localhost test fixture `http://user:s3cret@127.0.0.1` in `test/https-proxy.test.ts`.
- **semgrep 1.183.0** (`security-audit`, `typescript`, `javascript`, `nodejs`, `command-injection`, `secrets`, `github-actions` rulesets; 112 source files) — 0 findings.

Only non-malware caveat: the plugin deliberately impersonates Cursor's official client (`checksum.ts`, `device-id.ts`) to use its private API — a Cursor-ToS question, not a security defect. Scan limits: trufflehog saw a 50-commit shallow clone (not full history); semgrep covered `src/`+`scripts/`, not `test/`.

## Selecting a model

Model references have the form `provider/model[#variant]`.

| Where | How |
| --- | --- |
| TUI | `/models`, pick one (`ctrl+t` cycles variants) |
| One-off run | `opencode run -m 'google-vertex/gemini-4-argon' '...'` |
| Default | `"model": "google-vertex/claude-opus-5-5@default"` in `opencode.jsonc` |
| Per agent | `model: github-copilot/claude-sonnet-5.5` in agent frontmatter |
| Per command | `model: cursor/composer-2.5` in command frontmatter |

List what is available:

```bash
opencode models                  # all models
opencode models | grep '^cursor/'
opencode auth list               # connected accounts
```

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Vertex missing from `/models` | Set `project` in config or `GOOGLE_CLOUD_PROJECT`; check ADC file exists |
| Copilot: `missing required Authorization header` | `/connect` → GitHub Copilot |
| Cursor: no models | `/connect` → Cursor; check `opencode plugin list` |
| Provider missing although configured | Check `policies` — `provider.use` deny wins unless a later allow matches |
| Plugin errors | `grep -i 'failed to load plugin' ~/.local/share/opencode/log/opencode.log` |
