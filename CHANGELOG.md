# Versions

Every release stays playable. Pick one from the menu next to the title in the app, or open the file directly. The newest is always `index.html`.

## v9.1: Vents, heat & immunity (2026-10-27)

`versions/v9.1.html` (also the current `index.html`). Replaces v9.

Plan: https://claude.ai/artifact/Q7GeHv1HqjFe1zK7hFWERo

- **Bigger vents.** Each vent's warm area now reaches up to 120px (66px in v9), and food bits appear anywhere in its inner half. Same output, spread wider.
- **Grazers know where the vents are.** A grazer under half full with no food in sight heads for a vent; a clever one picks the vent with fewer hunters and more food.
- **Summer heat.** Near a vent in summer, warm-blooded creatures pay up to 50% more upkeep; cold-blooded ones don't. Clever creatures move out to the cooler edge.
- **Inherited immunity.** A creature that recovers from disease is immune for life. Its young are 75% resistant, halving each generation unless they come through it themselves.
- **Happenings report** in the left panel: pick a season, event or disease outbreak to see its key facts (population before and after, deaths by cause, species hit hardest, and more).
- **Faster.** Touching pairs are found with a grid instead of checking every creature against every other, and drawing is batched. Per creature, a sim step and a frame now cost about the same as in v8.1 (v9 was about twice as slow).
- **Version menu pruned** to v1, v3, v5, v6, v8 and v9.1.
- **Tested** over 8 dishes of 20 minutes: the full chain held in 7 of 8 (same as v9). Plants fell to a median of about 47% of creatures (v9: 62%) because grazers do better. With and without the vent instinct, grazers spent about half as much time drifting with nothing to eat (15% vs 29%). In random dishes grazer starvation fell from about 58% to 31% of grazer deaths; in three-type dishes it didn't improve.

## v9: Seasons, senses & instincts (2026-10-27)

Removed from the version menu in v9.1 (it didn't add much on its own); still in the git history.

Brainstorm and plan: https://claude.ai/artifact/SBZeSz45zVdbwSyu6bkqKe

- **Seasons and day/night.** A year is four minutes and a day a minute and a half. Mild seasons are on by default (harsh or off in New dish). Nights are dark and a bit cold; eyes see less in the dark. Winters are shaded on the graphs.
- **Warm vents.** Vents are three times bigger, keep the cold off nearby, puff more in winter, and each has a weed bed beside it. 50% more weed overall.
- **Ten inherited instincts:** hibernation, warm or cold blood, day or night activity, poison mimicry (fools brainless hunters), lures, camouflage, poison tolerance, eggs that wait for spring, tough plants (shrubs) and caring for young.
- **Nose organ.** Smells in the dark and in the weeds, but only roughly where.
- **Behaviour.** Bite size (hunters skip much bigger prey), clever hunters stash kills, loner hunters keep their own patch, and disease spreads in crowds (Disease slider).
- **Tactics ladder.** Aim ahead at brain 0.5, ambush 0.75, flank 1, drive 1.25, mob 1.5. Ambush suits slow or camouflaged hunters. Tactic kills bite 30% harder; middling brains cost less.
- **Rebalance.** Grazers breed, grow and herd better. Pure meat-eaters get 20% more from meat and mixed diets cost more again. Armour covers the whole body (up to half off), hurts biters and is cheaper but heavier. New hives start with a stocked nest, four quick workers and a protected first minute.
- **Screens.** Season and light in the panel, instincts in the inspector, age pyramid split into grass, shrubs and each animal tier, events (buttons or now and then), balance presets, and save/load a dish as a file.
- **Tested** over 8 dishes of 20 minutes: the full food chain held in 7 of 8 (v8: 3 to 5), with plants at a median 62% of creatures (v8: about 80%), grazers 32% and predators 9%. Hunting tactics other than aiming ahead now show up (flanking, driving, ambush, mobbing), though instinct still makes most kills.

## v8.1: Gene pool graph fix (2026-10-27)

Removed from the version menu in v9.1 (it didn't add much on its own); still in the git history.

- Fix: the small gene pool graph in the left panel went blank if the panel was hidden when the window resized, or when the page opened on a phone. It now resizes itself whenever it draws.

## v8: A full food chain (2026-10-27)

`versions/v8.html`

Plan and test targets: https://claude.ai/artifact/ECTPztJrHqG8URZLwiHn6H

- **Food flows again.** Food bits used to pile up against rocks (83% of them after 10 minutes), which also shut the vents off. Now they slow down, slide along rock and rot away after about a minute.
- **Grazing is a real living.** Cyan nibbles living plants without killing them, costs less upkeep, gets more from food bits, and can smell food close by without eyes. Mixed diets cost half as much as in v7.
- **Steadier predators.** Plant tissue is poor meat and weapon-heavy prey is rich. Hunters rest after a kill, prefer common prey, breed half as often and hold territories.
- **Longer lives:** 50% longer by default, with a Lifespan slider.
- **Migrants** (New dish option, off by default): a few simple grazers or hunters arrive if that tier has been gone for two minutes.
- **New graphs:** food pyramid (by number or energy) and how it changed over time, an age pyramid, and average age and age at death.

## v7: Shared kills & picky eaters (2026-10-27)

Removed from the version menu in v9.1 (it didn't add much on its own); still in the git history.

- **Packs share food.** A clever pack hunter (brain 0.5+) with food to spare takes some to a starving packmate. The old aren't fed. The graphs and species pages count food shared.
- **Mixed diets cost.** Each way of feeding is digested worse the less of the body is built for it, and the main diet suffers a little too. A brain halves the waste, so omnivores do better with one. New Mixed diet cost slider in Balance; the inspector shows how well a mixed feeder digests each food.

## v6: Food cycle & family trees (2026-10-26)

`versions/v6.html`

- **Food has a source.** Food bits no longer appear from nowhere. Plants shed them from their arm tips, glowing vents puff them out (New dish: none, 2 or 4 vents), and corpses rot into them. Seedlings land further from their parent.
- **Food values:** sunlight gives about 25% less, food bits are worth 10, meat 1.25× and carrion 85%. Meat and carrion can overfill a creature into a **fat reserve** (up to half its normal energy, more with fat stores) that pays upkeep first.
- **Less bunching.** Plants within 30px shade each other. Packs and herds now form only with close family, and herd members keep 30px of personal space.
- **Rare but real hives.** A clever brain (0.5) is enough. The hive gene can jump high in about one birth in 200. Only one queen per species in an area, she nests in the weeds first and her workers protect her. The hive gene costs upkeep.
- **Balance panel:** Sunlight, Vent output (was Food bits) and Mutation, plus a collapsible Balance section with plant shedding, food bit value, meat value, fat reserve, crowding, brain cost and hive tendency. Settings are remembered; Reset balance restores them.
- **Family tree** on every species page: a timeline where each species is a band (thicker = more alive) branching off its parent. Shows the family or the whole dish, folds away short-lived species, hover for details and click to open.

## v5: Brains, hives & rocks (2026-10-26)

`versions/v5.html`

- **Brain** organ (hexagon). It's inherited and mutated like every other part. It costs upkeep and weight, and brainy parents need a little more energy to breed. Brain size runs from instinct through clever (0.5), cunning (1.5) and brilliant (2.5). A brain also stretches sight a little.
- **Hunting tactics:** clever hunters aim where the prey is going. Cunning hunters drive prey into a packmate or against a rock, or flank it from the side. When nothing's in sight they lie in wait in the weeds and pounce.
- **Escape tactics:**
  - Clever creatures head for weeds as soon as they spot a hunter, flee in the direction that gets them away from every threat without running into rock, and step out of the way of armed creatures they can't beat.
  - Clever herds bunch up as they run. Cunning poisonous herd members put themselves between the hunter and the herd, and brilliant armed herds mob a lone hunter.
- **Memory:** a creature with a brain remembers the species that poisoned or hurt it and avoids them, and remembers where it last found food.
- **Hives** (hive gene plus a brain):
  - A queen settles in a nest against a rock or in the weeds and lays eggs. Most hatch as small sterile workers that forage and bring food home. Armed workers act as soldiers and guard her.
  - The queen feeds hungry workers from the hive's store. Now and then she lays a young queen who leaves to found a new hive, and if the queen dies a worker can take her place.
- **Rocks:**
  - New dish offers none, scattered, a walled pond or a pond with corridors (the default). In a walled pond the edge is rock and nothing wraps round.
  - Food bits that drift against rock stay there, and weed beds grow next to the rocks.
- **Clever creatures** start: plants, a hive, a poisonous herd and a brainy pack of hunters.
- **Species filters:** show only species with a brain (or a minimum brain level), poison, armour, stingers, spitters, eyes, packs or herds, or hives. You can also sort by brain size. Species pages show brain level, hive numbers and how the species' kills were made.
- **New graphs:** intelligence (average and biggest brain), kills by tactic, ways of living (alone, packs, herds, hives) and traits in the population.

## v4: Easy prey & stampedes (2026-10-26)

Removed from the version menu in v9.1 (it didn't add much on its own); still in the git history.

- **The young and old are easy prey.** Newborns and creatures near the end of their lifespan take more damage, their armour counts for less, and hunters go for them first. Starving creatures and stragglers at the edge of a herd are also singled out. The inspector marks a creature as "young, easy prey" or "old, easy prey".
- **Herds flee.** Social creatures move away from any hunter they can see that could hurt them, and when one bolts its relatives bolt with it.
- **The weak lag behind.** Running speed drops for creatures that are hungry, very young or old, so they fall behind the herd.
- Fix: creatures heading for a weed bed now swim there instead of freezing on the spot.

## v3: Packs, herds & hiding (2026-10-26)

`versions/v3.html`

- **Scavengers** are a new food-chain group: species that live mostly on corpses rather than live prey. Kills now leave scraps behind, and diet charts split live prey from carrion.
- **Sociality gene.** Loners hunt alone. Social hunters join a relative's chase and bite harder with packmates nearby. Social prey herd together and are harder to hurt in a crowd. New "Average sociality" chart; the inspector and species pages say whether a species lives alone, in a pack or in a herd.
- **Weed beds** to hide in. Creatures in the weeds are invisible to hunters until they get very close, and fleeing creatures dive for cover. Weeds halve sunlight and slow swimming. New dish lets you choose none, some or lots.

## v2: Stronger parts (2026-10-26)

Removed from the version menu in v9.1 (it didn't add much on its own); still in the git history.

- Every line has a thickness and every organ a size, both inherited and mutated. Bigger does its job harder and costs more upkeep and weight.
- Thick green catches more sun, thick yellow swims faster, thick cyan sweeps up food from further away.
- Thick red and white hit harder, and a weapon more than 1.5× thicker than the blue armour it meets breaks through. Thick purple poisons harder.
- Bigger eyes see further, bigger fat stores hold more, bigger brood sacs breed sooner, bigger spitters hit harder.
- Species names gain *robusta* (heavy-set) or *gracilis* (slender). The inspector shows how thick each colour is, e.g. `red 42 ×1.6`.

## v1: Original (2026-10-26)

`versions/v1.html`

Everything built before versioning started: coloured line creatures (green, cyan, red, blue, yellow, purple, white), organs (eyes, fat stores, brood sacs, spitters), food bits and corpses, breeding and mutation, species records with graphs and a food-chain species explorer, New dish presets, wipe out and bring back, and zoom, pan and follow.
