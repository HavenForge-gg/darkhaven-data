# HavenForge.GG - Darkhaven Game Data

Community-maintained game data for [Darkhaven](https://playdarkhaven.com) and hosted in Wiki form on [HavenForge.gg](https://havenforge.gg).

Because this is a public repo, we encourage you to submit changes and raise issues.

## About

This repository contains structured data about Darkhaven's classes, skills, items, mechanics, and more. It serves as the canonical data source for [HavenForge.gg](https://havenforge.gg), a community companion site.

**This is not an official repository.** HavenForge is an independent, community-run project.

## Structure

```
darkhaven-data/
├── _meta/                — Auto-generated metadata (history.json)
├── classes/              — Playable character classes
├── skills/
│   └── <class>/          — Skills grouped by class
├── items/
│   ├── gems/             — One file per gem (+ _category.yaml)
│   ├── tomes/            — One file per tome
│   ├── dyes/             — One file per dye
│   ├── special/          — Unique/legendary items
│   ├── accessories/
│   └── ...
├── builds/
│   └── <class>/          — Builds grouped by class
├── mods/
│   └── <mod-name>/       — Each mod gets a folder
│       ├── mod.yaml
│       └── readme.md
├── mechanics/            — Game systems documentation
├── patches/              — Patch notes
└── images/               — All image assets
    ├── classes/
    ├── skills/<class>/
    ├── items/<category>/
    └── ...
```

## Usage

This data is consumed by:

- **HavenForge.gg** — Rendered as human-readable pages
- **HavenForge App** — Consumed as JSON for offline mobile access

All data is available under the [MIT License](LICENSE).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting corrections, additions, and new content.

## Versioning

### Game Version Tags

When data is updated for a new game patch, tag the commit:

```bash
git tag game/0.0.23272
git push origin game/0.0.23272
```

This enables:
- Diffing between game versions: `git diff game/0.0.23272..game/0.0.23300`
- GitHub Releases with auto-generated changelogs per game patch
- The site displaying "Data current as of version X"

### Data Version Tags

The repository also uses semantic versioning (`vX.Y.Z-data`) for schema-level changes:
- **Major**: Breaking schema changes
- **Minor**: New data categories or fields
- **Patch**: Data corrections and additions

### Per-File History

A GitHub Action automatically generates `_meta/history.json` on each push to `main`.
This file contains per-file last-commit metadata (date, author, message) and is consumed
by the site to display "last updated" dates on each page.

## Disclaimer

HavenForge is a community project maintained independently. It is not affiliated with, endorsed by, or officially connected to Moon Beast Productions or Darkhaven.

All game content and intellectual property belong to their respective owners.
