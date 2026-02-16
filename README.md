# HavenForge Data

Community-maintained game data for [Darkhaven](https://darkhaven.game).

## About

This repository contains structured data about Darkhaven's classes, skills, items, mechanics, and more. It serves as the canonical data source for [HavenForge.gg](https://havenforge.gg), a community companion site.

**This is not an official repository.** HavenForge is an independent, community-run project.

## Structure

```
havenforge-data/
├── classes/              — Playable character classes
├── skills/
│   └── <class>/          — Skills grouped by class
├── items/
│   ├── weapons/
│   ├── armor/
│   ├── accessories/
│   └── consumables/
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

- Repository uses semantic versioning: `vX.Y.Z-data`
- The HavenForge website pins to specific data versions
- Breaking schema changes increment the major version

## Disclaimer

HavenForge is a community project maintained independently. It is not affiliated with, endorsed by, or officially connected to Moon Beast Productions or Darkhaven.

All game content and intellectual property belong to their respective owners.
