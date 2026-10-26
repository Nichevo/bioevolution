# Bioevolution

A modern take on the 1990s *Primordial Life* screensaver. It's an artificial-life petri dish that runs in the browser. Creatures are made of coloured lines with organs at their joints. They drift around, graze, hunt, breed and mutate, and over time the population evolves.

![The dish after a few minutes of evolution, with the inspector open on one creature](docs/screenshot.png)

| Graphs | Species by place in the food chain |
|---|---|
| ![Graphs of population, deaths, gene pool, complexity, species and food over time](docs/graphs.png) | ![Every species grouped into producers, grazers, predators, scavengers and omnivores](docs/groups.png) |

| A species page | New dish |
|---|---|
| ![A species page with its population, diet, food chain, family tree and history](docs/species.png) | ![Choosing how a new dish starts](docs/new-dish.png) |

| Close-up | On a phone |
|---|---|
| ![Close-up of creatures with eyes, fat stores and brood sacs](docs/closeup.png) | ![Phone layout](docs/phone.png) |

## Run it

Open `index.html` in any modern browser. There is no build step and nothing to install.

## Body parts

**Lines: the colour is the job**

| Colour | Job |
|---|---|
| Green | Makes energy from sunlight. Sunlight is shared, so a crowded dish feeds each plant less. |
| Cyan | Gathers food bits it touches. |
| Red | Bites, draining energy from live creatures it crosses (unless it hits blue) and from corpses. |
| Blue | Armour. Blocks red bites and pushes attackers away. |
| Yellow | Swims. Faster movement, at an extra energy cost. |
| Purple | Poison. A red segment that bites it poisons its owner, who loses energy for a few seconds. Hunters with eyes avoid poisonous prey. |
| White | Stinger. Stuns whatever it touches for a moment and drains some energy. Only blue armour stops it. |

**Organs: the shape is the job.** Organs sit at the end of a segment.

| Shape | Job |
|---|---|
| Circle (eye) | Sight. Lets the creature steer: flee dangerous predators, hunt weaker prey, head for food bits or corpses when hungry, and find a mate. More eyes see further. |
| Square (fat store) | Holds extra energy, but adds mass, so the creature is slower. |
| Triangle (brood sac) | Lowers the energy needed to breed and gives a chance of twins. |
| Kite (spitter) | Shoots globs at the prey its owner is chasing. A hit drains energy from a distance; blue armour softens it. |

## Rules

- **Size is strength.** Each line has a thickness and each organ a size, inherited and mutated like everything else. Thicker and bigger work harder (more sun, faster swimming, harder bites, longer sight) but cost more upkeep and weigh more. A weapon much thicker than the armour it hits breaks through.

- **Complexity costs.** Every part has upkeep, and upkeep grows faster than the part count, so a big complex body has to earn its keep. In return, complex creatures live longer and can do more.
- **Food.** Food bits drift into the dish in clumps. Cyan segments gather them; any creature can swallow one with its nucleus for half value. Dead bodies stay as corpses that red-biters can scavenge, then rot into more food bits. A kill leaves scraps behind too, so scavengers can follow the hunters.
- **Breeding.** Close relatives breed when they touch and are well fed, mixing both genomes. Very well fed creatures can also bud on their own.
- **Mutation.** Segment length, angle, colour and organ drift; segments and arms are added or removed; the nucleus colour drifts so lineages diverge.
- **You are what you eat.** A predator can keep genes from what it kills and pass them to its children.
- **Predators hunt.** Anything with red, white or a spitter can smell prey close by even without eyes, lock on to a target, lunge with extra speed while chasing, and hunt whenever they're not full. A faint red line shows who is chasing whom.
- **Packs and herds.** Every creature has a sociality gene. Loners keep to themselves. Social hunters gang up on whatever a relative is chasing and bite harder for each packmate nearby, so a pack can take prey too big for any one of them. Social prey herd together, and each neighbour in the herd makes them harder to bite, sting or spit at, so a predator thinks twice before attacking a crowd. Being social costs a little upkeep.
- **Easy prey.** Newborns and the old take more damage and their armour counts for less, so hunters pick them out first, along with the starving and stragglers at the edge of a herd. Herds move off from any hunter they can see and bolt together, but hungry, young and old creatures can't run as fast and fall behind.
- **Weed beds.** Dark weed patches dot the dish. A creature in the weeds is hidden from hunters unless they come very close, and frightened creatures dive for the nearest bed. The weeds cost them: half the sunlight and slower swimming.
- **Species** are named from the body plan: main colour + number of arms + main organ, e.g. *Rhodopentapod oculata* is a five-armed red biter with eyes.

## Controls

- **New dish…** chooses how life starts: one simple ancestor (a three-armed green plant that has to evolve everything else), three simple types (plant, grazer, hunter), or a random soup, plus how many creatures and how much weed to hide in (none, some or lots).

- Click to **Kill** or **Feed** (pick the tool; Shift-click uses the other one). Feeding empty water drops food bits there.
- Hover a creature to inspect it: diet, upkeep, complexity, whether it lives alone or in a pack or herd, and what it's doing right now (hunting, fleeing, hiding, grazing, courting), and whether it is young or old enough to be easy prey.
- **Scroll or pinch** to zoom (or use the − 100% + buttons), **drag** to look around, and press **F** while hovering a creature to follow it.
- Space pauses. Speed goes up to 8×. Sliders set sunlight, food supply and mutation rate.
- The small graph shows the amount of each colour (solid) and organ (dashed) in the population over time.
- **Graphs & stats** opens charts for the whole run: population by way of life (plants, grazers, predators), deaths per minute by cause, the gene pool, average complexity, average sociality, species alive, and food. Hover a chart to read exact values.
- **All species** groups every species that has ever lived by its place in the food chain, worked out from what it has actually eaten: producers (sunlight), grazers (food bits), predators (live prey), scavengers (corpses) and omnivores (a mix). It lists them alive or extinct, with a population sparkline. Click one (or a row in Top species) for its page: when and where it came from, its line of descent and the species it branched into, population over time, diet, how its members died, who it ate and who ate it, and a timeline of its history. **Show in dish** rings every living member.
- **Wipe out** kills a whole species, or a whole food-chain group from its header. It needs a second tap to confirm. **Bring back 10** revives an extinct species from its type specimen, and **Add 10** tops up a living one.

## Versions

Each release is kept playable. Use the menu next to the title to switch, or open `versions/<id>.html`. See [CHANGELOG.md](CHANGELOG.md).

## Files

- `src/app.html` is the source: markup, styles and the whole simulation in one file.
- `index.html` is `src/app.html` wrapped in a standard HTML document. Regenerate it with `./build.sh` after editing the source.
- `versions/` holds a frozen copy of every release plus `list.js`, the list the version menu reads.
- `docs/*.png` are the screenshots above. Regenerate them with `node scripts/screenshot.js` (needs Playwright) whenever the app changes.
