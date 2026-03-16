# Damage System

## Damage Types

Darkhaven features multiple damage types, each with corresponding resistances and penetration stats:

| Type | Color | Description |
|------|-------|-------------|
| **Blunt** | Grey | Physical blunt damage |
| **Cold** | Blue | Frost/ice elemental damage |
| **Lightning** | Yellow | Electrical elemental damage |
| **Fire** | Orange | Fire elemental damage |
| **Shadow** | Purple | Dark/shadow elemental damage |

## Damage Calculation

Base damage is determined by the equipped weapon's min–max damage range. The final damage dealt is modified by:

- **Weapon damage** (base min–max roll)
- **Skill multipliers** (each skill has its own damage coefficient)
- **Attribute scaling** (Strength for melee, Magic for spells, Dexterity for ranged)
- **Critical hits** (crit chance per damage type, with increased damage on crit)

## Resistances

Each damage type has a corresponding resistance value (0–100%). Resistance reduces incoming damage of that type by the resistance percentage. Enemies also have resistances which reduce your outgoing damage.

## Penetration

Penetration counters enemy resistances. Each damage type has a penetration stat that bypasses a portion of the target's resistance to that type.

## Critical Hits

Critical chance is tracked per damage type. When a critical hit occurs, the damage is multiplied. Critical resistance reduces the chance of receiving critical hits of each type.
