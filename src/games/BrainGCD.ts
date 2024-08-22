import getRandomInteger from '../getRandomInteger';
import GameEngine from './GameEngine';

// Euclidean algorithm
const findGCD = (integer1: number, integer2: number): number => {
  if (integer2 === 0) return integer1;

  return findGCD(integer2, integer1 % integer2);
};

export default class BrainGCD extends GameEngine {
  constructor() {
    super('Find the greatest common divisor of given numbers.');
  }

  generateQuestionAndAnswer(): void {
    const integer1 = getRandomInteger(1, 99);
    const integer2 = getRandomInteger(1, 99);
    this.setQuestion(`${integer1} ${integer2}`);
    this.setAnswer(String(findGCD(integer1, integer2)));
  }
}
