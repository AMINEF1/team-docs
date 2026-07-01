---
sidebar_position: 3
---

# How to document team work

Use this guide when you add a procedure, an experiment, a troubleshooting note, or a meeting output.

## File naming

Prefer names that are easy to search later:

```text
docs/experiments/2026-07-01-open5gs-ueransim.md
docs/troubleshooting/free5gc-upf-routing.md
docs/deployment/install-open5gs.md
docs/team-notes/2026-07-01-sync.md
```

## Page structure

Start each page with this simple structure:

```md
# Clear title

## Context
What were we trying to do?

## Environment
Which machine, software version, branch, IP range, or hardware was used?

## Steps
Which commands or configuration changes were applied?

## Result
What worked, what failed, and what evidence confirms it?

## Next actions
What should the next team member do from here?
```

## Rules for useful notes

- Put commands in fenced code blocks
- Include error messages exactly when they matter
- Add dates for experiments and meeting notes
- Link to related pages instead of duplicating content
- Prefer short conclusions over unfinished notes
- Keep credentials, private keys, and tokens out of the repository

## Git workflow

For normal team contributions:

```bash
git pull origin main
git checkout -b docs/short-topic-name
# edit or add docs
git add docs/
git commit -m "Add documentation for short topic"
git push origin docs/short-topic-name
```

Then open a pull request on GitHub so another team member can review the documentation before it is deployed.
