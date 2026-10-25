# Bioevolution

A little artificial-life petri dish that runs in the browser. Creatures are built from coloured line segments around a coloured nucleus dot. They drift around, eat each other, breed, mutate, and over time the population evolves.

Inspired by the 1990s *Primordial Life* screensaver and its successor *Biogenesis*.

## Run it

Open `index.html` in any modern browser. There is no build step and nothing to install.

## How the creatures work

Each segment's colour is what it does:

| Colour | Job |
|---|---|
| Green | Makes energy from sunlight. Sunlight is shared, so a crowded dish feeds each plant less. |
| Red | Bites, draining energy from any segment it crosses, unless that segment is blue. |
| Blue | Armour. Blocks red bites and pushes attackers away. |
| Yellow | Swims. Faster movement, at an extra energy cost. |

- Every segment costs upkeep proportional to its length, so bigger bodies must earn more.
- Creatures are born small and grow while well fed. Energy runs out → they die; old age also kills.
- **Breeding:** close relatives (similar body plan and nucleus colour) breed when they touch and are well fed. Their child mixes both genomes. Very well fed creatures can also bud asexually.
- **Mutation:** segment length, angle and colour drift; segments and arms are occasionally added or removed; the nucleus colour drifts so lineages diverge.
- **You are what you eat:** when a creature kills another, it can keep one of the prey's genes and pass it to its children.

## Controls

- **Click** a creature to kill it. **Shift-click** to feed it. Hover to inspect.
- Space pauses. Speed goes up to 8×. Sliders change sunlight and mutation rate.
- The graph shows total segment length of each colour over time, so you can watch the gene pool shift.

## Files

- `src/app.html` is the source: page markup, styles and the whole simulation in one file.
- `index.html` is `src/app.html` wrapped in a standard HTML document. Regenerate it with `./build.sh` after editing the source.
