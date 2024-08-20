import readlineSync from 'readline-sync';
import BrainEven from './games/BrainEven';
import BrainCalc from './games/BrainCalc';

type GameTypesUnion = BrainEven | BrainCalc;

const gamesMap: Record<string, GameTypesUnion> = {
  1: new BrainEven(),
  2: new BrainCalc(),
};

const typeMessage = (message: string): void => console.log(message);

export default (): void => {
  const separator = '';
  typeMessage('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  typeMessage(separator);
  typeMessage(`Hello, ${name}!`);
  typeMessage('Here is the list of Games:');
  typeMessage(separator);
  typeMessage('1. Brain Even');
  typeMessage('2. Brain Calc');
  typeMessage(separator);

  const gameNumber = readlineSync.question('Please enter the number of the game you wish to play: ');
  const game = gamesMap[gameNumber];

  if (!game) {
    typeMessage(`There is no game with number ${gameNumber}. Please enter the correct number.`);
    return;
  }

  typeMessage(separator);
  typeMessage(`You chose "${game.getName()}"`);

  const maxRound = Number(readlineSync.question('How many rounds do you want to play? '));

  typeMessage(separator);
  typeMessage(game.getTask());
  typeMessage(separator);

  while (game.getRound() <= maxRound) {
    game.generateQuestionAndAnswer();
    typeMessage(`Round ${game.getRound()}! Question: ${game.getQuestion()}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() === game.getAnswer()) {
      typeMessage('Correct!');
      typeMessage(separator);
      game.nextRound();
    } else {
      typeMessage(`"${answer}" is wrong answer! Correct answer was "${game.getAnswer()}"`);
      typeMessage(`Let's try again, ${name}!`);
      return;
    }
  }

  typeMessage(`Congratulations, ${name}!`);
};
