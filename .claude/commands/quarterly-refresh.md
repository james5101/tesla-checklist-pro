---
description: Run the full checklist refresh pipeline for a Tesla model — researcher, editor, then applier — with human review gates between each phase.
argument-hint: <model> [topic]
---

You are driving the quarterly checklist refresh workflow for TeslaChecklistPro. This chains three agents with **hard human-review gates** between each phase. You do not skip the gates. You do not condense phases.

Model (and optional topic) from this invocation: **$ARGUMENTS**

If `$ARGUMENTS` is empty or the model isn't one of `model-s`, `model-3`, `model-y`, `model-x`, `cybertruck`, stop and ask for the model before doing anything else.

## Phase 1 — Research

Dispatch the `delivery-defect-researcher` agent with the model (and topic, if provided). Its rulebook is at `.claude/agents/delivery-defect-researcher.md`. It will write `research/<model>-<YYYY-MM-DD>[-<topic>].md`.

When it finishes, tell the user:

1. Where the brief was written.
2. A one-line count: how many proposed additions, split by category.
3. Any evidence-bar caveats the researcher flagged (blocked sources, thin citations).
4. **Prompt for review.** Exact words: *"Review the brief at `<path>`. When you're ready to translate it into an edit plan, reply 'continue'. To stop here, reply 'stop' or just close the loop."*

Then STOP. Do not proceed to Phase 2 without an explicit continue from the user. If the user wants to amend the brief manually before proceeding, let them — re-read the brief when they say continue.

## Phase 2 — Edit plan

Dispatch the `checklist-editor` agent with the brief path from Phase 1. Its rulebook is at `.claude/agents/checklist-editor.md`. It will write `research/<same-stem>-edit-plan.md`.

When it finishes, tell the user:

1. Where the plan was written.
2. New / expansion / reword counts.
3. Old total → new total.
4. Any copy-substitution warnings the editor flagged.
5. Any items downgraded from expansion to new due to lookup failure.
6. **Prompt for review.** Exact words: *"Review the plan at `<path>`. When you're ready to apply it as-written, reply 'apply'. To stop here, reply 'stop'."*

Then STOP. Do not proceed to Phase 3 without an explicit apply from the user. If they want to edit the plan manually before applying, let them.

## Phase 3 — Apply

Dispatch the `checklist-applier` agent with the plan path from Phase 2. Its rulebook is at `.claude/agents/checklist-applier.md`. It will edit `src/data/checklist.ts` and headline-copy pages, then run `npm run build`.

When it finishes, tell the user:

1. Applied counts (new / expansion / reword by ID).
2. CATEGORIES count deltas.
3. Headline-copy substitutions applied vs skipped (plan-flagged).
4. Build result (pass / fail, with error output on fail).
5. A reminder to run `git diff` and commit when they're satisfied.

Do NOT commit or push. The human commits.

## Guardrails

- Agents register at Claude Code startup. If any of the three agents can't be dispatched directly, fall back to dispatching `general-purpose` with explicit instructions to read that agent's rulebook verbatim from `.claude/agents/<name>.md` and follow it.
- Every phase writes a durable artifact under `research/`. That's the audit trail — don't skip writing the intermediate files even if the user says "just do everything."
- Never run Phase 2 on a brief the user hasn't acknowledged, or Phase 3 on a plan the user hasn't approved. The whole point of this command is the review gates.
- If a phase's agent reports a failure (no qualifying findings, build fails, etc.), surface it to the user and stop — do not try to patch over it by running the next phase.
