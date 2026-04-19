# Installing the TeslaChecklistPro design system as a Claude Code skill

This folder is a portable Claude Agent Skill. It gives any Claude instance (Claude Code, Claude Desktop, another Claude project) expert knowledge of the TeslaChecklistPro brand — colors, type, components, voice, iconography.

> **Safe by design:** skills are reference material. Claude reads them to *inform* output. Nothing in this folder executes or modifies your app unless you explicitly ask Claude to copy files into it.

---

## Install into a Claude Code project

From the root of your app:

```bash
mkdir -p .claude/skills/teslachecklistpro-design
# then unzip this folder's contents into that directory
```

Final structure:

```
your-app/
├── src/                     ← your code (untouched)
├── package.json
└── .claude/
    └── skills/
        └── teslachecklistpro-design/
            ├── SKILL.md              ← Claude discovers this
            ├── README.md
            ├── colors_and_type.css
            ├── assets/
            ├── preview/
            └── ui_kits/
```

## Invoke it

In Claude Code, just ask:

```
Use the teslachecklistpro-design skill to build the pricing page.
```

```
Style this component to match our design system.
```

```
Copy the design tokens from the teslachecklistpro-design skill into src/styles/tokens.css.
```

Claude will auto-load `SKILL.md` → `README.md` and use the tokens / components / rules from this folder.

---

## Two integration patterns

### Pattern A — Reference only (fast)
Your app imports directly from the skill folder:

```css
@import '../../.claude/skills/teslachecklistpro-design/colors_and_type.css';
```

✅ Updates to the skill propagate instantly.
❌ Couples runtime to the skills folder.

### Pattern B — Copy into app (recommended)
Ask Claude once:

> "Copy the CSS tokens into `src/styles/tokens.css` and the logo/icon assets into `public/brand/`."

Now your app is self-contained. Update the skill here in the design project anytime without breaking production.

---

## Updating the skill

1. Iterate on the design system in the dedicated design project.
2. Download the project as a zip.
3. Replace the contents of `.claude/skills/teslachecklistpro-design/` in your app.
4. Re-run Pattern B copy-out step if you use it.

Your app code is never touched by the skill folder itself — only by Claude when you ask it to integrate something.
