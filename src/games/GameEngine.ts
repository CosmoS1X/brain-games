type EngineArgs = {
  name: string;
  task: string;
};

export default class GameEngine {
  private name: string;

  private task: string;

  private round: number = 1;

  private question: string = '';

  private answer: string = '';

  constructor({ name, task }: EngineArgs) {
    this.name = name;
    this.task = task;
  }

  getName() {
    return this.name;
  }

  getTask() {
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
