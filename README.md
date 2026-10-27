# Bioevolution

A modern take on the 1990s *Primordial Life* screensaver. It's an artificial-life petri dish that runs in the browser. Creatures are made of coloured lines with organs at their joints. They drift around, graze, hunt, breed and mutate, and over time the population evolves.

![The dish after a few minutes of evolution, with the inspector open on one creature](docs/screenshot.png)

| Graphs | Species by place in the food chain |
|---|---|
| ![Graphs of population, deaths, gene pool, complexity, species and food over time](docs/graphs.png) | ![Every species grouped into producers, grazers, predators, scavengers and omnivores](docs/groups.png) |

| A species page | New dish |
|---|---|
| ![A species page with its population, diet, food chain, family tree and history](docs/species.png) | ![Choosing how a new dish starts](docs/new-dish.png) |

| Family tree | Balance controls |
|---|---|
| ![A family tree timeline: each species is a band that thickens with numbers and branches off its parent](docs/tree.png) | ![The sliders, with the Balance section open](docs/balance.png) |

| Close-up | On a phone |
|---|---|
| ![Close-up of creatures with eyes, fat stores and brood sacs](docs/closeup.png) | ![Phone layout](docs/phone.png) |

## Run it

Open `index.html` in any modern browser. There is no build step and nothing to install.

## Body parts

**Lines: the colour is the job**

| Colour | Job |
|---|---|
| Green | Makes energy from sunlight and sheds some of it as food bits from its arm tips. Sunlight is shared, and close green neighbours shade each other, so a crowded patch feeds each plant less. |
| Cyan | Gathers food bits it touches. |
| Red | Bites, draining energy from live creatures it crosses (unless it hits blue) and from corpses. |
| Blue | Armour. Blocks red bites, hurts the biter and pushes it away, and toughens the whole body (up to half off every bite). Cheap to run but heavy. A blue rim marks well-armoured creatures. |
| Yellow | Swims. Faster movement, at an extra energy cost. |
| Purple | Poison. A red segment that bites it poisons its owner, who loses energy for a few seconds. Hunters with eyes avoid poisonous prey. |
| White | Stinger. Stuns whatever it touches for a moment and drains some energy. Only blue armour stops it. |

**Organs: the shape is the job.** Organs sit at the end of a segment.

| Shape | Job |
|---|---|
| Circle (eye) | Sight. Lets the creature steer: flee dangerous predators, hunt weaker prey, head for food bits or corpses when hungry, and find a mate. More eyes see further. |
| Square (fat store) | Holds extra energy and a bigger fat reserve, but adds mass, so the creature is slower. |
| Triangle (brood sac) | Lowers the energy needed to breed and gives a chance of twins. |
| Kite (spitter) | Shoots globs at the prey its owner is chasing. A hit drains energy from a distance; blue armour softens it. |
| Two dots (nose) | Smell. Works at night and finds things in the weeds, but only roughly. Cheaper than an eye. |
| Hexagon (brain) | Intelligence. Unlocks smarter moves (see *Brains* below). Costs upkeep and weight, and brainy parents need more energy to breed. |

## Rules

- **Size is strength.** Each line has a thickness and each organ a size, inherited and mutated like everything else. Thicker and bigger work harder (more sun, faster swimming, harder bites, longer sight) but cost more upkeep and weigh more. A weapon much thicker than the armour it hits breaks through.

- **Complexity costs.** Every part has upkeep, and upkeep grows faster than the part count, so a big complex body has to earn its keep. In return, complex creatures live longer and can do more.
- **Food.** Every food bit has a source: plants shed them, glowing vents on the floor puff them out over a wide warm patch, and corpses rot into them. Bits drift, slide along rocks and rot away after a minute or so. Cyan segments gather them, and can smell them close by even without eyes; any creature can swallow one with its nucleus for half value. Cyan also **nibbles living plants** a little at a time, leaving them enough to grow back. Dead bodies stay as corpses that red-biters can scavenge. A kill leaves scraps behind too, so scavengers can follow the hunters. Grazers are born knowing where the vents are, and head for one when they're under half full and see no food.
- **Fat.** Sunlight gives the least energy, food bits more, and meat the most. Meat and carrion can overfill a creature into a fat reserve (shown in the inspector) that pays its upkeep first, so a well-fed hunter can wait out a lean spell.
- **Mixed diets cost.** A body built for one diet digests it fully. A creature that feeds several ways (say a plant with a red tip) digests each food worse the less of its body is built for it, so a plant gets little from the odd bite of meat. A brain halves the waste, so clever omnivores do best. Plant tissue is poor food for a meat-eater, and a body full of weapons is rich, so hunting grazers pays better than eating plants and hunting other hunters can pay too. The inspector shows how well a mixed feeder digests each food.
- **Breeding.** Close relatives breed when they touch and are well fed, mixing both genomes. Very well fed creatures can also bud on their own.
- **Mutation.** Segment length, angle, colour and organ drift; segments and arms are added or removed; the nucleus colour drifts so lineages diverge.
- **You are what you eat.** A predator can keep genes from what it kills and pass them to its children.
- **Predators hunt.** Anything with red, white or a spitter can smell prey close by even without eyes, lock on to a target, lunge with extra speed while chasing, and hunt whenever they're not full. After a kill they rest a moment to digest. They prefer whatever prey is plentiful, so rare species get a chance to recover. Predators breed more slowly than the creatures they eat and hold territories: one with several other predators close by won't breed. A faint red line shows who is chasing whom.
- **Packs and herds.** Every creature has a sociality gene. Loners keep to themselves. Social hunters gang up on whatever a close relative (family) is chasing and bite harder for each packmate nearby, so a pack can take prey too big for any one of them. Clever pack hunters with food to spare take some to a starving packmate, but leave the old to fend for themselves. Social prey herd with their family, keeping a little personal space, and each neighbour in the herd makes them harder to bite, sting or spit at, so a predator thinks twice before attacking a crowd. Being social costs a little upkeep.
- **Easy prey.** Newborns and the old take more damage and their armour counts for less, so hunters pick them out first, along with the starving and stragglers at the edge of a herd. Herds move off from any hunter they can see and bolt together, but hungry, young and old creatures can't run as fast and fall behind.
- **Brains.** Intelligence runs from instinct (0) to 3. Hunting tactics unlock in steps: aim ahead at 0.5, ambush at 0.75 (for slow or camouflaged hunters), flank a packmate's prey at 1, drive prey into a packmate or rock at 1.25, and at 1.5 armed herds mob a lone hunter. A kill made with a tactic bites 30% harder. Clever hunters (1+) stash a kill and come back to it. Clever prey hide as soon as they spot a hunter, flee the way that avoids every threat and the rocks, and bunch up as a herd; poisonous herd members shield the rest. A brain also remembers which species hurt it and where food was, and sees through mimics and lures. Small and middling brains are cheap; big ones cost much more.
- **Loners.** A hunter that lives alone keeps its own patch: it chases off weaker hunters, keeps clear of stronger ones and heads home when idle.
- **Hives.** Rare but real. A new queen starts with a stocked nest, her first four workers hatch quickly and bigger than usual, and she is hard to hurt for her first minute. The hive gene now and then jumps high in a newborn, and with a clever brain (0.5 or more) that creature can become a queen (ringed), one per species in an area. She settles into a nest in the weeds or by a rock. The hive gene costs upkeep. Her eggs hatch as small sterile workers that bring food home; armed workers guard her. She feeds hungry workers from the hive's store and now and then lays a young queen who leaves to found a new hive.
- **Seasons, day and night.** A year lasts four minutes: less sun and cold in winter, more sun in summer (mild by default, harsh or off in New dish). Each day lasts a minute and a half; nights are dark and a little cold, and eyes see much less in the dark. Cold slows cold-blooded creatures; warm-blooded ones keep going but cost more to run. Warm vents keep the cold off nearby and puff out more food in winter. In summer the vents are too hot for warm-blooded creatures: close to one they pay up to 50% more upkeep, and clever ones keep to the cooler edge.
- **Instincts.** Hidden genes, each on or off, shown in the inspector: hibernation (sleeps through the cold on almost no energy), warm or cold blood, active by day or by night, the poison look (some are only mimics, which fools hunters without a brain), a lure that grazers mistake for food, camouflage (eyes have to come twice as close), poison tolerance, eggs that wait for spring, tough plants (slow-growing shrubs that are hard to eat and live long, against quick soft grass) and caring for young (a clever parent guards and feeds its own).
- **Eyes and noses.** Eyes see far but only in the light. A nose smells in the dark and into the weeds, but only gives a rough direction, so it can't aim ahead. Up close every creature senses exactly.
- **Bite size.** A hunter only goes for prey up to a bit bigger than itself; a pack can take bigger.
- **Disease.** A creature packed in with many relatives can fall ill (grey specks): slower and hungrier for 20 seconds. It spreads by touch. Survivors are immune for life, and their young are 75% resistant, halving each generation unless they come through it themselves.
- **Rocks.** Nothing swims through rock, so a creature that runs the wrong way gets cornered. Food bits that drift against rock slide along it.
- **Weed beds.** Dark weed patches dot the dish. A creature in the weeds is hidden from hunters unless they come very close, and frightened creatures dive for the nearest bed. The weeds cost them: half the sunlight and slower swimming.
- **Species** are named from the body plan: main colour + number of arms + main organ, e.g. *Rhodopentapod oculata* is a five-armed red biter with eyes.

## Controls

- **New dish…** chooses how life starts: one simple ancestor (a three-armed green plant that has to evolve everything else), three simple types (plant, grazer, hunter), or a random soup, plus clever creatures (plants, a hive, a poisonous herd and brainy hunters), how many creatures, rocks (none, scattered, a walled pond, or a pond with corridors), how much weed to hide in, and how many food vents (none, 2 or 4), whether **seasons** are off, mild or harsh, **day and night**, random **events** now and then, and whether **migrants** arrive (a few simple grazers or hunters drift in if that whole tier has been gone for two minutes).

- Click to **Kill** or **Feed** (pick the tool; Shift-click uses the other one). Feeding empty water drops food bits there.
- Hover a creature to inspect it: diet, upkeep, complexity, whether it lives alone or in a pack or herd, and what it's doing right now (hunting, fleeing, hiding, grazing, courting), and whether it is young or old enough to be easy prey.
- **Scroll or pinch** to zoom (or use the − 100% + buttons), **drag** to look around, and press **F** while hovering a creature to follow it.
- Space pauses. Speed goes up to 8×. Sliders set sunlight, vent output and mutation rate. The **Balance** section opens more: plant shedding, food bit value, meat value, fat reserve, crowding, brain cost, hive tendency, mixed diet cost and lifespan (lives are 50% longer than in v7 by default). A **Preset** menu sets them all at once (Classic, Gentle, Harsh, Brainy), and there is a **Disease** slider. Your settings are remembered, and **Reset balance** puts them back.
- **Happenings** lists every season, event and disease outbreak; pick one to see when it ran, the population before and after, deaths by cause, the species hit hardest, and what was special about it (hibernation and spring eggs in winter, cases and survivors in an outbreak).
- **Event…** makes something happen now: a cold snap, an algae bloom, a poison patch or a rockfall. Events are marked on the graphs.
- **Save dish** downloads the whole dish as a file and **Load dish** opens one (species histories start afresh). A dish is too big to share as a link, so share the file.
- The small graph shows the amount of each colour (solid) and organ (dashed) in the population over time.
- **Graphs & stats** opens charts for the whole run: a **food pyramid** (producers, grazers, predators, top predators and scavengers, by number alive or energy held) and how it changed, an **age pyramid** (grass and shrubs on one side, each animal tier on the other, by stage of life) with average age and age at death, population by way of life (plants, grazers, predators), deaths per minute by cause, the gene pool, average complexity, average sociality, intelligence, kills by tactic, ways of living, traits in the population, species alive, and food. Hover a chart to read exact values.
- **All species** groups every species that has ever lived by its place in the food chain, worked out from what it has actually eaten: producers (sunlight), grazers (food bits), predators (live prey), scavengers (corpses) and omnivores (a mix). Filter by trait (brain, eyes, poison, armour, stinger, spitter, pack or herd, hive) or by brain level, or sort by brain size. It lists them alive or extinct, with a population sparkline. Click one (or a row in Top species) for its page: when and where it came from, a family tree drawn as a timeline (each species a band that thickens with numbers and branches where it split; hover for details, click to open, switch to the whole dish), its line of descent and the species it branched into, population over time, diet, how its members died, who it ate and who ate it, and a timeline of its history. **Show in dish** rings every living member.
- **Wipe out** kills a whole species, or a whole food-chain group from its header. It needs a second tap to confirm. **Bring back 10** revives an extinct species from its type specimen, and **Add 10** tops up a living one.

## Versions

Each release is kept playable. Use the menu next to the title to switch, or open `versions/<id>.html`. See [CHANGELOG.md](CHANGELOG.md).

## Files

- `src/app.html` is the source: markup, styles and the whole simulation in one file.
- `index.html` is `src/app.html` wrapped in a standard HTML document. Regenerate it with `./build.sh` after editing the source.
- `versions/` holds a frozen copy of every release plus `list.js`, the list the version menu reads.
- `docs/*.png` are the screenshots above. Regenerate them with `node scripts/screenshot.js` (needs Playwright) whenever the app changes.
