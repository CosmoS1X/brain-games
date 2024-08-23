export interface IGame {
  generateQuestionAndAnswer(): void;
}

export default class GameEngine {
  private task: string;

  private round: number = 1;

  private question: string = '';

  private answer: string = '';

  constructor(task: string) {
    this.task = task;
  }

  getTask(): string {
    return this.task;
  }

  getRound(): number {
    return this.round;
  }

  nextRound(): void {
    this.round += 1;
  }

  getQuestion(): string {
    return this.question;
  }

  protected setQuestion(question: string): void {
    this.question = question;
  }

  getAnswer(): string {
    return this.answer;
  }

  protected setAnswer(answer: string): void {
    this.answer = answer;
  }
}
