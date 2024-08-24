import getRandomInteger from '../getRandomInteger';
import GameEngine from './GameEngine';

export default class BrainEven extends GameEngine {
  constructor() {
    super('Answer "yes" if the number is even, otherwise answer "no".');
  }

  generateQuestionAndAnswer(): void {
    const randomInteger = getRandomInteger(1, 99);
    this.setQuestion(String(randomInteger));
    this.setAnswer(randomInteger % 2 === 0 ? 'yes' : 'no');
  }
}
