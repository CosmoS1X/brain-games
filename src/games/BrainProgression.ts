import getRandomInteger from '../getRandomInteger';
import GameEngine from './GameEngine';

export default class BrainProgression extends GameEngine {
  constructor() {
    super('What number is missing in the progression?');
  }

  private generateProgression(begin: number, increaseBy: number): number[] {
    const progressionLength = getRandomInteger(5, 15);
    const progression: number[] = [begin];

    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(progression[i] + increaseBy);
    }

    return progression;
  }

  generateQuestionAndAnswer(): void {
    const begin = getRandomInteger(1, 99);
    const increaseBy = getRandomInteger(1, 99);
    const progression = this.generateProgression(begin, increaseBy);
    const indexOfHiddenElement = getRandomInteger(0, progression.length - 1);
    const hiddenElement = progression[indexOfHiddenElement];
    const leftSideOfProgression = progression.slice(0, indexOfHiddenElement);
    const rightSideOfProgression = progression.slice(indexOfHiddenElement + 1);
    this.setQuestion(`${leftSideOfProgression.join(' ')} .. ${rightSideOfProgression.join(' ')}`);
    this.setAnswer(String(hiddenElement));
  }
}
