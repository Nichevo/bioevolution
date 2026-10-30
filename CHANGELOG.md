# Versions

Every release stays playable. Pick one from the menu next to the title in the app, or open the file directly. The newest is always `index.html`.

## v14.1: Gentler parasites & hunters that wait out lean times (2026-10-30)

`versions/v14.1.html` (also the current `index.html`). Follows v14, which stays in the menu.

Plan: https://claude.ai/artifact/KbS6cYxHGq29syG8r5Ur6Y

- **Parasites drain, they don't kill.** A riding parasite no longer bites. It takes a quarter of whatever its host eats, but the host gets 15% more from every meal while carrying it, so the host loses about a tenth of its food. Nothing is taken while the host is under 30% full, and the cut is shared when two ride one host. Hosts need only be 1.2 times the parasite's size.
- **Hunters wait out lean times.** A hunter that is under 30% full and not chasing anything idles and pays 60% of its running cost until it finds prey.
- **Zone labels** sit in the middle of each quarter, clear of the side panel.
- **Test** (8 dishes, 30 minutes each, against 8 of v14): food chain held in 8 of 8 (v14: 8 of 8). Hunters 28% of those alive (v14: 23%). Dishes where hunters, once established at 20 or more, crashed to 5 or fewer: 0 (v14: 2), and no dish dropped that low after the first ten minutes (v14: 3). Hunters raise 1.26 young per life (v14: 1.13) and starve less (33% of deaths, was 37%). Misses: grazers fall to 32% of the dish (v14: 58%) and the dish holds about 10% fewer creatures at the end (319, was 357); complex bodies rise to 17% (v14: 6%), mostly hunters; parasites are still rare (about 1 alive per dish). Tried and dropped: a breeding boost for hunters when rare (hunters fell to 12% with boom and bust) and letting hunters keep twice the fat (no crashes but the food chain held in only 6 of 8).

## v14: Zones, parasites, cleaners & fruit (2026-10-30)

`versions/v14.html`. Follows v13.5, which stays in the menu.

Plan: https://claude.ai/artifact/8KAME61ztLzVu26iUDxuht

- **Zones tab** (next to Genes): the dish in quarters, each with its creatures by role, food bits, births and deaths per minute (deaths by cause), body sizes, vents and weed, top 3 species and a population chart; click one to go there. Two tables set life inside a vent against outside, and in the weeds against the open, for plants, grazers and hunters. **View: zones** draws the quarters in the dish.
- **Parasites.** A new instinct for simple biters only (6 parts or fewer, no brain): it latches onto a bigger animal of another kind, rides along and drains about a fifth of its host's running cost, never its last reserves. At most 2 per host; they breed as they ride; a dart shakes one off and thick armour keeps them off.
- **Cleaners.** A new instinct for small animals (8 parts or fewer): they eat parasites off other animals. Hosts with parasites let them close, and a cleaned hunter spares that kind of cleaner for a minute.
- **Fruit.** A new instinct for plants: richer shed bits that cost the plant more, and a grazer that eats one drops the seed about 20 seconds later wherever it has got to, where a new plant sprouts.
- **Complex bodies cost more.** From 16 parts: 1.5% more upkeep per part past 16, 20% longer to grow up, 30% longer between litters, and a plant's lifespan stops growing with its parts at 16.
- **Cold blood rebalanced.** Upkeep is 80% of normal for cold blood and 120% for warm (was 70% and 130%), and cold-blooded animals are up to 10% slower to notice things and to get going on a chase or escape unless they are warming up by a vent.
- **Test** (16 dishes, 15 minutes each, against 16 of v13.5): food chain held in 16 of 16. The dish holds more (453 creatures, was 351), and empty patches are rarer (0.08 areas at any moment, was 0.27), helped by 370 fruit seeds sown. Complex bodies 10% to 6%, and they now raise the fewest young in every role. Cold-blooded creatures 18% and warm 13% of those alive (was about two to one); young per life cold against warm: grazers 1.75 / 1.96, hunters 1.16 / 1.14, plants 1.48 / 1.27. Misses: parasites stay rare, about 2–3 alive per dish, reaching 3% of animals in only 2 of 16 dishes (13–14% there), and cleaners have little to do (7 parasites cleaned). A stronger parasite (easier to latch on, cheaper to ride) cut hunters to 6% and broke the food chain in 2 of 16 dishes, so it was left out. Hunters fell from 30% to 22% of those alive, mostly from the complex-body costs.

## v13.5: Filter fix, hive heirs, weeds & more hunters (2026-10-30)

`versions/v13.5.html`. Follows v13.4, which stays in the menu.

Plan: https://claude.ai/artifact/AG1eRS9n7Xxn7K4gyKcque

- **Filter feeding fixed.** The filter gene used to work on any body: in v13.4 it was carried by 54% of hunters, 69% of omnivores and 33% of plants, giving them full-value food bits and a slow drift. It now only works on a body with no weapons that is more grazer than plant, and the Species filter, the Genes graph and the inspector only show it there.
- **Hive workers** run on half the queen's brain and pay half its cost, and grow to 0.7 of full size (was 0.85), so the queen (1.35) stands out.
- **A new queen.** When a queen dies and 3 or more workers are left, about 5 seconds later the best-fed collector near the nest becomes queen. Soldiers never take over.
- **Nose** reaches 100–240px (was 70–200), finds things in the weeds from a bit further, aims at a smelt target twice as well, and a grazer that smells a hunter coming flees sooner.
- **Weed beds** are more common (9 patches on Some, 16 on Lots, was 6 and 12) and bigger, shed the odd food bit, and shade out a fifth of the sun instead of half. (With half the sun shaded, the bigger beds cut the dish from 377 to 288 creatures.)
- **Vents:** a new dish has 4 to 6 (was 3 to 5); the menu's top option is 8.
- **Grazers** breed on a little less saved energy.
- **Test** (16 dishes, 15 minutes each, against 16 of v13.4): food chain held in 16 of 16. Hunters alive at the end went from 16% to 30% (median dish), and omnivores fell from 9% to 3% of lives, now raising 1.12 young each (plants 1.52, grazers 1.87). Creatures are in the weeds 26% of the time (old beds: about 12%). 20 hives got a new queen after theirs died. Complex bodies 7% to 10%. Misses: the dish holds fewer creatures (351, was 377), and parts of it are empty a bit more often (0.27 areas at any moment, was 0.14). Hunters with a nose still raise fewer young than those without (0.96 against 1.19), but eyes and spit show the same gap (1.03 against 1.22), so it is the cost of a bigger body rather than the nose. Hunters with 7+ parts starve a little more per minute (0.42, was 0.35).

## v13.4: Omnivore young specialise & carrion disease (2026-10-29)

`versions/v13.4.html`. Follows v13.3, which stays in the menu.

- **Omnivore young specialise.** When a parent feeds more than one way and no way makes up 70% of its feeding parts, there is a 15% chance that one part of its smallest feeding kind becomes its main kind in the young. Over a few generations mixed feeders drift back into plants, grazers or hunters. (A 40% chance cut omnivores further but made bodies much simpler and hunters rare.)
- **Carrion carries disease.** Eating a corpse can make a creature ill, about a 15% chance for each second spent eating (scaled by the Disease slider and any inherited resistance). Scavengers are immune, hunters take half the risk, and plants and grazers take all of it.
- **Test** (16 dishes, 15 minutes each, against 16 of v13.3): food chain held in 16 of 16. Omnivores now raise fewer young per life than plants or grazers (1.52, against 1.58 and 1.89; v13.3: 1.60, level with plants). Hunters went up from 13% to 19% of creatures, average body size from 7.2 to 9.0 parts, and complex bodies from 5% to 7%. Misses: the omnivore share did not fall (9%, v13.3: 8%, ranging from 2% to 24% per dish), because omnivores get only about 10% of their food from carrion and the illness is mild. The dish holds fewer creatures (377 on average, v13.3: 440).

## v13.3: Dead zones refill, hunting hives & fewer omnivores (2026-10-29)

`versions/v13.3.html`. Follows v13.2, which stays in the menu.

Plan: https://claude.ai/artifact/8X54Z6rzPXf5tmpBx4dLM8

- **Dead zones refill.** About 1 young plant in 20 drifts into a neighbouring part of the dish, the emptiest one around. When a part of the dish that was lived in has had 3 or fewer creatures for a minute, new life springs up there instead of by a vent, and more often: plants first, then simple grazers once the plants have taken hold.
- **Hunting hives feed their queen.** While the hive is calm, a hunting hive's soldiers hunt anything that wanders within 150px of the nest, and any soldier more than 70% full takes the spare home.
- **Fewer omnivores.** Extra diets are wasted a little more (the waste factor goes from 0.75 to 0.875), and a brain cuts the waste by 40% instead of half. (A full-strength version also cost complex bodies about a third of their share in random dishes, so the halfway version was chosen.)
- **Top species** card opens with a row counting how many are alive of each type, then the top 5.
- **Species list** has a **Blood** filter (warm-blooded, cold-blooded, in between), and each row shows a warm or cold tag.
- **Dying-out stories** show the species' numbers across its whole life in the side chart, plus whoever ate most of them.
- **Season badge** in the dish's bottom-left corner: season, a ring that fills as it goes by, day or night; hover for details.
- **Test** (16 dishes, 15 minutes each, against 16 of v13.2): food chain held in 16 of 16 (v13.2: 14 of 16). Parts of the dish with 3 or fewer creatures fell from 1.14 to 0.25 at any moment, dead spells from 92 to 31, and their average length from 2.4 to 1.5 minutes. Omnivore species fell from 13% to 8% of creatures. Random-soup dishes kept their complexity (complex bodies 27%, v13.2 batches 24-32%). Simple bodies still starve least in every role. In 8 hive-heavy dishes (full omnivore change), hunting-hive queens starved 34% of the time (v13.2: 55%). Misses: in ordinary dishes, hunting-hive queens still starve 64% of the time (v13.2: 66%, few queens). Omnivores still raise about as many young per life as plants (1.60 against 1.59). Hunters with 7+ parts starve a little more per minute alive (0.40 against 0.37).

## v13.2: Hive castes, raider boost & clearer top predators (2026-10-29)

`versions/v13.2.html`. Follows v13.1, which stays in the menu.

Plan: https://claude.ai/artifact/AHZsSX5u3uTUGSzm2rajCa

- **Species page over time.** Diet, How they died and How they hunt keep their totals, and each now has a chart underneath: the share of each food over time, deaths per minute by cause, and kills per minute by tactic.
- **Soldiers and collectors.** A queen's eggs hatch as collectors (dark dot), whose weapons are switched off and who forage and bring food home, or soldiers (red dot), who keep their weapons, stay by the queen to see off intruders, are fed from her store and live 40% as long. She lays about 1 soldier in 6 while calm and up to 1 in 2 when hunters come near or her hive is hurt (the alarm fades over a minute). Soldiers cost her more, and she never lays faster. A hive whose body has no weapons lays only collectors.
- **Raider boost.** A hive raider hits a big hive's members 5% harder for each member past 8, up to 50%, and only that hive's members, so the boost fades as the hive shrinks. Kept mild because the queen changed in the same release.
- **Top predators** follow one rule for the whole species, from the last 3 minutes: at least 5 kills of real hunters (not scavengers or hive members) making up at least 40% of its kills. Every member counts as top in the food pyramid and graphs. A species keeps the crown down to 3 and 30%, then loses it, and its history notes both.
- **Simple bodies starve less.** The flat part of the running cost scales with size: half for a 3-part body, all of it from 8 parts.
- **Test.** Hive-heavy dishes (8 random dishes each, 15 minutes, with the hive gene common at the start): hive members fell from 9% of creatures on v13.1 to 5% with castes and 4% with the raider boost, and the biggest hive from 6.5 to 4.2 members on average. Hives still formed in most minutes. After the alarm was made to count only hunters, soldiers were 19% of workers in calm hives and 45% under attack. Ordinary dishes (16 dishes against 16 of v13.1): food chain held in 16 of 16 for both, plants/grazers/hunters 47/43/17 against 44/36/21, hives 1% against 2% (largest peak 12% against 16%). Simple bodies now starve least in every role: plants with 6 parts or fewer 23% (v13.1 29%) against 28-31% for bigger plants, grazers 13% against 34% for complex ones, hunters 29% against 46%. Simple bodies rose from 58% to 66% of creatures and average parts fell from 9.1 to 8.5. A species was crowned in 9 of 16 dishes. Misses: mid-size and complex hunters starve more than on v13.1 (40-46% against 34-36%), and queens starve more often (49% of queen deaths against 36%). Solo and pack hunters were left as they were, and stayed even (1.21 against 1.19 young per life).

## v13.1: New life, leaner hunters & milder disease (2026-10-29)

`versions/v13.1.html`. Follows v13, which stays in the menu.

- **Food pyramid** has a third option, **Energy per creature**: the average energy each member of a level holds.
- **New life** (a New dish option, on by default): every minute or two a few tiny, very simple plants, grazers or, rarely, biters spring up, usually by a vent.
- **Hunters hoard less.** Hunters' fat store is half the size, and only 60% of a meat surplus is banked as fat.
- **Milder disease.** Illness lasts 15 s (was 20). Crowds start it less often. Each sick creature passes it to at most one other, and 60% pass it to none. An outbreak needs 8 sick at once and ends when one or none is left.
- **Gentler arms races.** A hunted species' young mutate up to 40% more (was up to twice as much). Their changes still lean to defence.
- **Full screen** folds both panels down to their headers instead of hiding them, so they can still be opened.
- **Test** (8 dishes, 15 minutes each, against 8 of v13): food chain held in 8 of 8. Hunters fell from 26% to 17% of creatures, and their share of all energy from 26% to 16% (fat from 16% to 6% of it); each hunter holds about the same. Sick at any moment fell from 13 to 3.5, and outbreaks from 5.4 to 4.6 per dish, with 18% more creatures alive. Minutes with an arms race running fell from about two thirds to 46%. Deaths still run about twice as high during arms races as outside them, because a race starts when a species is being eaten heavily.

## v13: Stings, complex bodies & clearer views (2026-10-29)

`versions/v13.html`. Follows v12, which stays in the menu.

Plan: https://claude.ai/artifact/J79UEfrMS1a52aihZxmDtJ

- **Two sting paths.** A new inherited venom gene lets each lineage lean to a freeze sting (prey held up to 4 s) or a weakening sting (1.5 s, but the frozen prey takes up to 80% more damage from every attacker). Stingers can take prey half again their own size.
- **Eyes** see a fifth further per level, level 3 sees well at night, eyes cost less to run (0.11 instead of 0.14 per unit) and less again while resting.
- **Complex bodies.** Simple-body perks are a third smaller. Parts cost less as they add up. A body of 12+ parts with 4+ line colours runs 15% cheaper and stores 15% more. Parts only fade after three calm minutes, half as often.
- **Yellow** is the real sprint: wriggling no longer helps an escape, yellow costs less (0.015 per unit instead of 0.05, 0.02 while running) and pushes a little harder, and a darter with yellow darts 50% faster.
- **Spitters** reach 240px (was 160), and spit and stings stack: a slowed creature stays frozen a second longer, a frozen one stays slowed a second longer.
- **Controls.** Pause, Speed, Stories, View, **Whole dish** and **Full screen** sit in a row under the title that stays when the panel is hidden. Whole dish (or Esc) stops stories and following, clears the spotlight and shows the whole dish. Full screen hides the panels and goes full screen where the browser allows.
- **Simple and complex, made clear.** A Graphs chart of simple, middle and complex bodies over time with the average part count; body-type tags in the species list and Top species, a body filter and a part-count sort; a part-count chart on each species page.
- **Happenings in Stories.** Arms races, outbreaks, migrations, raids, gene sweeps, bounce backs and new seasons become stories. The camera frames everyone involved and a small live chart sits beside the caption (pin it to keep it).
- **Versions pruned.** v3, v5, v6, v9.1 and v10 are removed from the menu and `versions/` (still in git history). The menu keeps v1, v8, v11, v12 and v13.
- **Test** (16 dishes, 15 minutes each, against v12's 16; four tuning rounds): food chain held in 15 of 16 (v12: 16). Plants, grazers and hunters 40/41/20 (v12: 55/35/15). Average parts 9.5 (v12: 8.3); complex bodies 13% (v12: 3%). Yellow in 16% of animals (v12: 9%).
- **Knockouts** (each change switched off in 8 dishes): without the sting paths stingers fall from 10% to 4% of animals and complex bodies to 7%; without the complex-body changes average parts fall to 7.7 and complex bodies to 7%; without the yellow changes yellow falls to 8%. The eye and spit changes made no clear difference.
- **Still open.** Hunters at 20% are a little above the 12 to 18% target. Hunters with stings or eyes still raise fewer young per lifetime than those without (0.85 and 0.88 against about 1.25), even though the sting paths make stingers more common.

## v12: Gene roles & stories (2026-10-28)

`versions/v12.html` (also the current `index.html`). Follows v11, which stays in the menu.

Plans: https://claude.ai/artifact/S7fV33ywFmch27wiRAqmKZ (balance) and https://claude.ai/artifact/Eqrj32sWQAczsNU2eUsRTc (viewing tools)

- **Scavengers.** Corpses last longer and are bigger; scavengers smell them from further, follow hunters, stash carrion and pay less upkeep while waiting.
- **Hive raiders.** A new instinct that seeks out queens. A queen kill opens a "raid" happening and feeds the pack. Big hives lay eggs more slowly.
- **Simple bodies** grow up sooner, cost less to raise, catch fewer chills and illnesses, and are spotted closer in. Unused parts can fade away again after an arms race.
- **Gene roles.**
  - Filter feeders (new instinct) sieve food bits as they drift, instead of biting.
  - Movement parts on animals give a wriggle; darters (new instinct) put on short bursts of speed.
  - Spit slows its target; stings paralyse longer, drain more, and teach hunters to leave the stinger alone.
  - Eyes come in levels 1 to 3; sharper eyes than the prey help a hunter keep track and see through camouflage.
  - Poison teaches the hunter's family, brood helps when food is thin, fat burns slower in the cold, and noses reach further at night.
- **Genes tab** counts carriers by default (with a switch back to strength), shows plants, grazers and predators side by side or one species, and has a new "Simple and complex" section.
- **Seeing the stories.**
  - Stories button: the camera picks a chase, raid, birth or migration, captions it and moves on.
  - View button: normal, calm (no trails or food) or coloured by way of life.
  - Spotlight a species and fade the rest; follow a creature and read its life story; marks for kills, raids, migrations and births; optional pause on big moments.
  - Slow motion at ¼× and ½×, and "Show me in the dish" on every happening.
- **Test** (16 dishes, 15 minutes each, against 8 dishes of v11): the food chain held in all 16 (v11: 4 of 8). Plants, grazers and hunters 55/35/15. Hives average 2% of creatures (peak 12%), with raids in 3 dishes. Scavengers raise 1.61 young each (v11: 0.79). 64% of bodies are simple (6 parts or fewer) and 3% complex (16+); average parts fell from 11.4 to 8.3.
- **Still open.** Stingers and sharp eyes still give hunters no clear edge in young raised (0.85 and 1.05 against 1.27 and 1.22 without), and yellow is now in only 9% of animals.

## v11: Stronger grazers & genes (2026-10-28)

`versions/v11.html` (also the current `index.html`). Follows v10, which stays in the menu.

Plan: https://claude.ai/artifact/CFEjqHPUZYBu3XdDuEJx5G

- **Stronger grazers**, eight changes:
  - When grazers fall under a fifth of all creatures, their young cost the parents less and come sooner.
  - Thorns hurt half as much, and tough mouths cost half as much.
  - Old plants drop extra food bits as leaf litter.
  - A hunter chasing one of a herd of 5 or more can lose it in the crowd.
  - A clever grazer that sees a hunter calls out, and its kind nearby run.
  - Hunters without a brain stop hunting at 60% full; clever ones still bank a surplus.
  - Cunning grazers steer clear of hunters when migrating.
  - Grazing specialists digest 10% better.
- **Hive penalty.** Workers' upkeep discount drops from 20% to 10%. Plant hives need brain 1 to found, get no discount, and their workers lose 55% of what they carry home.
- **Genes tab** in the right drawer, replacing the left panel's gene pool:
  - the gene pool for everyone or one part of the food chain, with genes you can hide;
  - a sortable table of every gene;
  - instincts and brain levels over time;
  - the gene mix by type;
  - genes that go together, with a grid of every pair;
  - body plans.
- **Gene sweeps** in Happenings, logged when a gene goes from under 5% to over 25% of the pool within two minutes.
- **What it inherited**, a new section on species pages. Down the line of descent, it shows which genes each split passed on and which were new mutations, plus how today's typical member differs from the first. It can also flip to show what each offspring species changed.
- **Species pictures fixed.** They showed each species' first member, but only about half of living creatures still had that body plan. They now show a typical living member, with the first member small beside it when the two differ. Lines are drawn as thick as in the dish, and the armour, poison, bark and thorn rims now show.
- A species is no longer listed as "under pressure" from its own kind.
- **Tested** over 16 dishes of 20 minutes against 16 of v10:
  - Grazers averaged 32% of creatures (v10: 24%), on target for 30-40%.
  - The full chain held in 14 of 16 (v10: 15 of 16).
  - Predators averaged 13% (v10: 18%).
  - Without the hive penalty, the grazer changes let plant hives grow, peaking at about 14% of creatures. With it, they peak at about 4% (v10: about 3%).
  - Gene sweeps are rare: one in 16 dishes.

## v10: Happenings, arms races & migration (2026-10-28)

`versions/v10.html`. Follows v9.1, which stays in the menu.

Plan: https://claude.ai/artifact/VaEAHnBgK4HNfHaa8hpKM8

- **Happenings tab** in the right drawer, next to Graphs and Species: what's going on now, buttons to make something happen and to switch random events on or off, a filterable timeline (seasons, events, disease, arms races, migrations, bounce-backs) whose entries open a report, and disease totals. Click a yellow mark on a graph to open that event.
- **3 to 5 vents** by default (New dish also offers none, 2 or 6). Each puts out less, but all together give 50% more food than v9.1's two.
- **Plants** get about 15% more sun, lose 15% less to a nibble and live three times longer, so old age is now rare for them.
- **Scavengers**: corpses last 40s (was 25), give their full energy (was 85%) and are noticed from 1.5x further away.
- **Arms races.** A species that is being eaten a lot evolves faster (up to 2x mutation), leaning towards defences; a hunter that is going hungry sharpens its attack. Plants can grow thorns, and grazers can evolve tough mouths to get past them. Shown on the species page, in Happenings and in a new Arms race graph.
- **Bounce back.** After a die-off of 40% or more, life mutates faster for 90 seconds.
- **Migration.** The dish is split into a 4x3 grid. A clever grazer in a poor part sets off with its herd for a better one; brilliant ones know the whole dish. Hunters were meant to migrate too, but in tests they followed the grazers and wiped them out, so only grazers move.
- **Ages graph** with 7 bands, a switch between share of lifespan and actual age, a legend and tiles.
- **Roomier left panel** (330px) split into folding sections; the colour key is hidden until you open it. Below the gene pool graph, a **gene breakdown**: genes by type, genes that turn up together (or avoid each other), and genes rising or falling.
- **Top predators** have their own group (purple crown) in Species, with a food-chain level for every species.
- On phones, the zoom buttons moved to the top so they no longer cover the Top species card.
- **Tested** over 8 dishes of 20 minutes each (half single-ancestor, half random), against v9.1:
  - The full chain held in 8 of 8 (v9.1: 8 of 8).
  - Plants are now a median of 63% of creatures (target 55-60%; v9.1: 45%). Old age fell from 36% to 3% of plant deaths.
  - Grazers dropped to between 15% and 33% of creatures depending on the batch (v9.1: 52%). Predators rose to 13-19% (v9.1: 11%). This is the main miss: plants and hunters both got stronger and grazers are squeezed.
  - Arms races raise branching: 159 species over 20 minutes with them, 100 without.
  - Migration's effect on spread is unclear. Empty parts of the dish were 24% with it and 36% without in the final batch, but an earlier batch went the other way (16% vs 11%). Grazers did worse with migration in two batches out of three.

## v9.1: Vents, heat & immunity (2026-10-27)

`versions/v9.1.html`. Replaces v9.

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
