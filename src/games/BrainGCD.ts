import getRandomInteger from '../getRandomInteger';
import GameEngine, { IGame } from './GameEngine';

export default class BrainGCD extends GameEngine implements IGame {
  constructor() {
    super('Find the greatest common divisor of given numbers.');
  }

  // Euclidean algorithm
  private findGCD(integer1: number, integer2: number): number {
    if (integer2 === 0) return integer1;

    return this.findGCD(integer2, integer1 % integer2);
  }

  generateQuestionAndAnswer(): void {
    const integer1 = getRandomInteger(1, 99);
    const integer2 = getRandomInteger(1, 99);
    this.setQuestion(`${integer1} ${integer2}`);
    this.setAnswer(String(this.findGCD(integer1, integer2)));
  }
}
