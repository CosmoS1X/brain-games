# Brain Games

[![Node.js CI](https://github.com/CosmoS1X/brain-games/actions/workflows/node.js.yml/badge.svg)](https://github.com/CosmoS1X/brain-games/actions/workflows/node.js.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/f41a41a5c06785a739d6/maintainability)](https://codeclimate.com/github/CosmoS1X/brain-games/maintainability) ![Docker Pulls](https://img.shields.io/docker/pulls/cosmos1x/brain-games)


## Description

Brain Games is a simple CLI application to test and enhance your math skills. To win you need to answer the question correctly several times in a row (depends on the number of rounds you choose). The wrong answer will end the game.

## Install

```bash
git clone git@github.com:CosmoS1X/brain-games.git
cd brain-games
make install
```

## Run

```bash
brain-games
```

or

```bash
#inside "brain-games" directory
make run
```

You can also download and run the [docker image](https://hub.docker.com/r/cosmos1x/brain-games) (requires docker installed).

```bash
docker run -it cosmos1x/brain-games
```

## Game descriptions and examples:

### "Brain Even" game:

You need to answer whether the number is even.

[![asciicast](https://asciinema.org/a/3clo1UfylhW5JOf905FskmwRs.svg)](https://asciinema.org/a/3clo1UfylhW5JOf905FskmwRs)

### "Brain Calc" game:

You need to calculate the result of the expression.

[![asciicast](https://asciinema.org/a/DSvhDmMZnnbTFlRw3QwpM27nr.svg)](https://asciinema.org/a/DSvhDmMZnnbTFlRw3QwpM27nr)

### "Brain GCD" game:

You need to find the greatest common divisor of given numbers.

[![asciicast](https://asciinema.org/a/lTdtcWQf8H9qTldOr8yc4LcIA.svg)](https://asciinema.org/a/lTdtcWQf8H9qTldOr8yc4LcIA)

### "Brain Progression" game:

You need to calculate the missing number of the progression.

[![asciicast](https://asciinema.org/a/LncOD24SAc3ZiDbALXDEGxu4L.svg)](https://asciinema.org/a/LncOD24SAc3ZiDbALXDEGxu4L)

### "Brain Prime" game:

Уou need to answer whether the number is prime.

[![asciicast](https://asciinema.org/a/QsvTHBpJoxtsbAkz2v5AcNMef.svg)](https://asciinema.org/a/QsvTHBpJoxtsbAkz2v5AcNMef)
