# Contributing to HavenForge Data

Thank you for your interest in contributing to HavenForge! This repository contains the canonical game data for Darkhaven, maintained by the community.

## Important Guidelines

### What This Repository Is

- A **community-maintained** collection of Darkhaven game data
- **Not official** — HavenForge is an independent project
- **Data only** — no code, no scripts, no build tools

### What We Accept

- Corrections to existing data
- New entries following established schemas
- Improved descriptions and documentation
- Patch notes and changelogs
- Images for documented content

### What We Do Not Accept

- Speculation presented as fact
- Datamined content or private information
- Code or scripts of any kind
- HTML, CSS, JavaScript, or TypeScript files
- Content that implies official endorsement

## File Types

This repository only accepts:

- `.yaml` / `.yml` — Structured game data
- `.json` — Structured game data
- `.md` — Documentation and guides
- `.png` / `.webp` — Images (in the `/images/` folder only)

**No other file types are permitted.**

## Folder Structure

```
havenforge-data/
├── classes/
│   └── pyromancer.yaml
├── skills/
│   └── <class>/                    # Skills grouped by class
│       └── skill-name.yaml
├── items/
│   ├── weapons/
│   ├── armor/
│   ├── accessories/
│   └── consumables/
├── builds/
│   └── <class>/                    # Builds grouped by class
│       └── build-name.yaml
├── mods/
│   └── <mod-name>/                 # Each mod gets its own folder
│       ├── mod.yaml                # Mod metadata
│       └── readme.md               # Mod documentation
├── mechanics/
│   └── topic.md
├── patches/
│   └── 0.3.1.yaml
└── images/                         # All images (mirrors data structure)
    ├── classes/
    ├── skills/<class>/
    ├── items/<category>/
    ├── builds/<class>/
    └── icons/
```

## Schema Requirements

All YAML/JSON files must include these base fields:

```yaml
id: unique_identifier      # Immutable, snake_case
type: skill                # class | skill | item | mechanic | build | mod | patch
name: Display Name
game_version: 0.3.1        # Version this data applies to
last_updated: 2026-01-30   # ISO date format
status: active             # active | deprecated | speculative
tags:
  - relevant
  - tags
```

### Optional: Icon Reference

```yaml
icon: /images/skills/pyromancer/fireball.png
```

### Rules

1. **`id` is immutable** — Once assigned, an ID cannot be changed
2. **No calculated values** — Store raw data, not derived calculations
3. **No presentation hints** — Data should be presentation-agnostic
4. **No assumptions as fact** — If uncertain, mark as `status: speculative`

## Adding New Content

### Adding a Skill

1. Create file: `skills/<class>/<skill-id>.yaml`
2. Follow the skill schema (see existing files)
3. Optionally add icon: `images/skills/<class>/<skill-id>.png`

### Adding an Item

1. Create file: `items/<category>/<item-id>.yaml`
2. Follow the item schema
3. Optionally add icon: `images/items/<category>/<item-id>.png`

### Adding a Build

1. Create file: `builds/<class>/<build-id>.yaml`
2. Follow the build schema
3. Include author attribution

### Adding a Mod

1. Create folder: `mods/<mod-name>/`
2. Add `mod.yaml` with mod metadata
3. Add `readme.md` with documentation
4. Optionally add `images/mods/<mod-name>/thumbnail.png`

## Image Guidelines

- **Location**: All images go in `/images/` with mirrored folder structure
- **Format**: PNG preferred, WebP acceptable
- **Icons**: 64x64 or 128x128 pixels
- **Naming**: Match the `id` of the corresponding YAML file
- **Optimization**: Compress images before committing

## Pull Request Guidelines

- **One logical change per PR** — Don't bundle unrelated changes
- **Clear titles** — e.g., "Add Pyromancer flame_shield skill"
- **Describe your sources** — Where did this information come from?
- **Update `last_updated`** — Always set to the current date
- **Include images** — If adding new content, include icons if available

## Questions?

If you're unsure whether something should be added or how to format it, open an Issue first to discuss.

---

*HavenForge is a community project and is not affiliated with Moon Beast Productions or Darkhaven.*
