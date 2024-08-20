import GameEngine from './GameEngine';
import getRandomInteger from '../getRandomInteger';

const calculate = (a: number, b:number, op: string): number => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Unexpected error in calculation function');
  }
};

const getRandomOperator = (): string => {
  const operators: [string, string, string] = ['+', '-', '*'];
  const randomIndex = getRandomInteger(0, operators.length - 1);
  return operators[randomIndex];
};

export default class BrainCalc extends GameEngine {
  constructor() {
    const name = 'Brain Calc';
    const task = 'What is the result of the expression?';
    super({ name, task });
  }

  generateQuestionAndAnswer() {
    const a = getRandomInteger(1, 99);
    const b = getRandomInteger(1, 99);
    const op = getRandomOperator();
    this.setQuestion(`${a} ${op} ${b}`);
    this.setAnswer(String(calculate(a, b, op)));
  }
}
