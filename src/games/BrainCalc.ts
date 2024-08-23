import GameEngine from './GameEngine';
import getRandomInteger from '../getRandomInteger';

type OperatorsUnion = '+' | '-' | '*';

export default class BrainCalc extends GameEngine {
  constructor() {
    super('What is the result of the expression?');
  }

  private calculate(leftOperand: number, rightOperand: number, operator: OperatorsUnion): number {
    switch (operator) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case '*':
        return leftOperand * rightOperand;
      default:
        throw new Error('Received unknown operator');
    }
  }

  private getRandomOperator(): OperatorsUnion {
    const operators: OperatorsUnion[] = ['+', '-', '*'];
    const randomIndex = getRandomInteger(0, operators.length - 1);
    return operators[randomIndex];
  }

  generateQuestionAndAnswer() {
    const leftOperand = getRandomInteger(1, 99);
    const rightOperand = getRandomInteger(1, 99);
    const operator = this.getRandomOperator();
    this.setQuestion(`${leftOperand} ${operator} ${rightOperand}`);
    this.setAnswer(String(this.calculate(leftOperand, rightOperand, operator)));
  }
}
