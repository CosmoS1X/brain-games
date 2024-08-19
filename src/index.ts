import readlineSync from 'readline-sync';
import BrainEven from './games/BrainEven';

type Games = {
  [key: string]: BrainEven;
};

const gamesMapping: Games = {
  1: new BrainEven(),
};

export default (): void => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);
  console.log('Here is the list of Games:\n');
  console.log('1. Brain Even');
  console.log('');

  const gameNumber = readlineSync.question('Please enter the number of the game you wish to play: ');
  const game = gamesMapping[gameNumber];

  if (!game) {
    console.log(`There is no game with number ${gameNumber}. Please enter the correct number.`);
    return;
  }

  console.log(`You chose "${game.getName()}"`);

  const maxRound = Number(readlineSync.question('How many rounds do you want to play? '));

  console.log(game.getTask());

  while (game.getRound() <= maxRound) {
    console.log(`Round ${game.getRound()}! Question: ${game.getQuestion()}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLocaleLowerCase() === game.getAnswer()) {
      console.log('Correct!');
      game.nextRound();
    } else {
      console.log(`"${answer}" is wrong answer! Correct answer was "${game.getAnswer()}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
