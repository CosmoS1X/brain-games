import getRandomInteger from '../getRandomInteger';
import GameEngine from './GameEngine';

export default class BrainEven extends GameEngine {
  constructor() {
    const name = 'Brain Even';
    const task = 'Answer "yes" if the number is even, otherwise answer "no".';
    super({ name, task });
  }

  generateQuestionAndAnswer() {
    const randomInteger = getRandomInteger(1, 99);
    this.setQuestion(String(randomInteger));
    this.setAnswer(randomInteger % 2 === 0 ? 'yes' : 'no');
  }
}
