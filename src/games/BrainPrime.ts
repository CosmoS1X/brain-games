import getRandomInteger from '../getRandomInteger';
import GameEngine from './GameEngine';

export default class BrainPrime extends GameEngine {
  constructor() {
    super('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  private isPrime(number: number): boolean {
    if (number < 2) return false;

    for (let i = 2; i < Math.sqrt(number); i += 1) {
      if (number % i === 0) return false;
    }

    return true;
  }

  generateQuestionAndAnswer(): void {
    const randomInteger = getRandomInteger(1, 99);
    this.setQuestion(String(randomInteger));
    this.setAnswer(this.isPrime(randomInteger) ? 'yes' : 'no');
  }
}
