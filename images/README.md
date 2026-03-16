# Images

This folder contains all image assets for HavenForge, organized to mirror the data structure.

Images are extracted from Darkhaven's Unity asset bundles using tools like [AssetStudio](https://github.com/Perfare/AssetStudio) or [UABE](https://github.com/SeriousCache/UABE). They are **not** committed to the data repo due to copyright. Contributors must extract and place them locally following the conventions below.

## Structure

```
images/
├── base_ui/
│   └── inventory/           — Equipment slot silhouettes
│       ├── Slot_Head.png
│       ├── Slot_Chest.png
│       └── ...
├── classes/
│   ├── witch.png
│   ├── crusader.png
│   ├── hunter.png
│   └── technomancer.png
├── items/
│   ├── weapons/             — Weapon item art
│   │   ├── w_{slug}.png     — e.g. w_ritual_dagger.png
│   │   └── ...
│   ├── armors/              — Armor item art
│   │   ├── a_{slug}.png     — e.g. a_cloth_armor.png
│   │   └── ...
│   ├── shields/             — Shield item art
│   │   ├── s_{slug}.png     — e.g. s_buckler.png
│   │   └── ...
│   ├── jewelry/             — Rings, amulets
│   │   ├── j_{slug}.png     — e.g. j_ring.png
│   │   └── ...
│   ├── legendaries/         — Legendary items (WebP preferred)
│   │   ├── l_{slug}.webp    — e.g. l_staff05_the_arvinrod.webp
│   │   └── ...
│   ├── gems/                — Gem item art
│   │   ├── gem_{type}_{level}.png  — e.g. gem_amber_01.png (01=Cracked, 02=Flawed, 03=Dull)
│   │   └── ...
│   ├── runes/               — Rune item art
│   │   ├── rune{level}_{name}.png  — e.g. rune01_ash.png (levels 01-05)
│   │   └── ...
│   ├── cores/               — Heart/core item art
│   │   ├── core_{rarity}_{element}_heart.png  — e.g. core_elite_fire_heart.png
│   │   └── core_u_{monster_slug}.png          — Unique monster hearts
│   ├── dyes/                — Dye item art
│   │   ├── {name}_dye.png   — e.g. cadet_dye.png
│   │   └── ...
│   ├── tomes/               — Tome item art
│   │   ├── tome_of_{name}.png  — e.g. tome_of_might.png
│   │   └── ...
│   └── consumables/
├── skills/
│   └── witch/
│       ├── skill_{name}.png           — e.g. skill_blood_lash.png
│       └── skill_option_{name}.png    — e.g. skill_option_blood_burst.png
├── armory/
│   ├── hud/                 — Armory UI elements
│   ├── stats/               — Stat icons (Stat-Attack.png, etc.)
│   ├── class-icons/         — Generic slot icons (UnitClass-Helm.png, etc.)
│   └── skills/              — Skill panel icons
├── builds/
├── mods/
│   └── mod-name/
│       └── thumbnail.png
└── icons/
    └── (shared icons)
```

## Naming Conventions

### Item Art Prefixes

| Prefix | Category | Extension |
|--------|----------|-----------|
| `a_`   | Armor    | `.png`    |
| `w_`   | Weapon   | `.png`    |
| `s_`   | Shield   | `.png`    |
| `j_`   | Jewelry  | `.png`    |
| `l_`   | Legendary| `.webp`   |

### Slug Generation

Convert the item's display name to a slug: lowercase, strip apostrophes, replace non-alphanumeric with underscore.

Example: `Ritual Dagger` → `ritual_dagger` → `w_ritual_dagger.png`

### Gem Levels

| Level | Prefix  | File pattern |
|-------|---------|--------------|
| 01    | Cracked | `gem_{type}_01.png` |
| 02    | Flawed  | `gem_{type}_02.png` |
| 03    | Dull    | `gem_{type}_03.png` |

Types: amber, jade, lapis, onyx, opal, ruby

### Rune Levels

| Level | Name | File pattern |
|-------|------|--------------|
| 01    | Ash  | `rune01_ash.png` |
| 02    | Bat  | `rune02_bat.png` |
| 03    | Ka   | `rune03_ka.png`  |
| 04    | Deb  | `rune04_deb.png` |
| 05    | Elm  | `rune05_elm.png` |

### Heart Rarities / Elements

Rarities: `common`, `elite`, `champion`, `unique`

Elements: `cold`, `fire`, `lightning`, `nature`, `shadow`

### Dye Names

Achiote, Cadet, Cardinal, Cinnibar, Eventide, Hornet, Kingfisher, Lion, Monarch, Myrmidon, Nimbus, Queen of Night, Royal, Serengeti, Syringa, Tigress, Ursa Major

## Guidelines

- **Format**: PNG preferred, WebP for legendaries
- **Size**: Icons should be 64x64 or 128x128 pixels
- **Naming**: Follow the conventions above exactly
- **Quality**: Optimize images before committing (use tools like ImageOptim)
- **Source**: Extract from Darkhaven's Unity asset bundles; do NOT redistribute copyrighted assets publicly

## Referencing Images

In YAML files, reference images using absolute paths from the site root:

```yaml
icon: /images/items/weapons/w_ritual_dagger.png
```

The site will serve these from the `/images/` path. The `sync-images.sh` script copies this folder into the site's `public/images/` directory at build time.
