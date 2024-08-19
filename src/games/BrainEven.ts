import getRandomInteger from '../getRandomInteger';

export default class BrainEven {
  private round = 1;

  private name = 'Brain Even';

  private task = 'Answer "yes" if the number is even, otherwise answer "no".';

  private question = 0;

  private answer: string | null = null;

  getRound() {
    return this.round;
  }

  nextRound() {
    this.round += 1;
  }

  getName() {
    return this.name;
  }

  getTask() {
    return this.task;
  }

  private setQuestion() {
    this.question = getRandomInteger(1, 99);
  }

  getQuestion() {
    this.generateQuestionAndAnswer();
    return this.question;
  }

  private setAnswer() {
    this.answer = this.question % 2 === 0 ? 'yes' : 'no';
  }

  getAnswer() {
    return this.answer;
  }

  private generateQuestionAndAnswer() {
    this.setQuestion();
    this.setAnswer();
  }
}
