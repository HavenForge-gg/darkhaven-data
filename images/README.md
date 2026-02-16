# Images

This folder contains all image assets for HavenForge, organized to mirror the data structure.

## Structure

```
images/
├── classes/
│   └── pyromancer.png
├── skills/
│   └── pyromancer/
│       └── fireball.png
├── items/
│   ├── weapons/
│   ├── armor/
│   ├── accessories/
│   │   └── obsidian_ring.png
│   └── consumables/
├── builds/
│   └── pyromancer/
│       └── fire_pyromancer.png
├── mods/
│   └── mod-name/
│       └── thumbnail.png
└── icons/
    └── (shared icons)
```

## Guidelines

- **Format**: PNG preferred, WebP acceptable
- **Size**: Icons should be 64x64 or 128x128 pixels
- **Naming**: Match the `id` of the corresponding YAML file
- **Quality**: Optimize images before committing (use tools like ImageOptim)

## Referencing Images

In YAML files, reference images using absolute paths from the site root:

```yaml
icon: /images/skills/pyromancer/fireball.png
```

The site will serve these from the `/images/` path.
