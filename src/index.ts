import readlineSync from 'readline-sync';
import BrainEven from './games/BrainEven';
import BrainCalc from './games/BrainCalc';

type GameInstancesUnion = BrainEven | BrainCalc;
type GameNamesUnion = 'Brain Even' | 'Brain Calc';

const gamesMap: Record<GameNamesUnion, GameInstancesUnion> = {
  'Brain Even': new BrainEven(),
  'Brain Calc': new BrainCalc(),
};

const gameNames: GameNamesUnion[] = Object.keys(gamesMap) as GameNamesUnion[];

const typeMessage = (message: string): void => console.log(message);

export default (): void => {
  const separator = '';
  typeMessage('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  typeMessage(separator);
  typeMessage(`Hello, ${name}!`);
  typeMessage('Here is the list of Games:');

  const gameIndex = readlineSync.keyInSelect(gameNames, 'Please enter the number of the game you wish to play:?');

  if (gameIndex === -1) {
    typeMessage(separator);
    typeMessage('The game has been canceled');
    return;
  }

  const gameName = gameNames[gameIndex];

  typeMessage(separator);
  typeMessage(`You chose "${gameName}"`);

  const game = gamesMap[gameName];
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
      typeMessage(separator);
      typeMessage(`Let's try again, ${name}!`);
      return;
    }
  }

  typeMessage(`Congratulations, ${name}!`);
};
