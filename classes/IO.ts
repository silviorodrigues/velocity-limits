import { readFileSync, writeFileSync } from 'fs';
import { DateTime } from 'luxon';
import { Attempt } from '../interfaces/Attempt';
import { IOClass, Output } from '../interfaces/IO';

export class IO implements IOClass {
  readonly inputFile: string;
  readonly input: Attempt[];
  private output: string = '';
  private loadedAttempts: Attempt[] = []
  
  public constructor(inputFile: string) {
    this.inputFile = inputFile;
    this.input = this.read();
  }

  public log(attempt: Attempt, accepted: boolean): void {
    const log = {
      id: attempt.id,
      customer_id: attempt.customer_id,
      accepted};

    this.loadedAttempts.push(attempt);
    this.output = this.output.concat(`${JSON.stringify(log)}\n`);
    console.log(log);
  }

  public write(outputFile: string): void {
    writeFileSync(outputFile, this.output, 'utf-8');
  }

  public hasLoaded({ id, customer_id }: Attempt): boolean {
    return this.loadedAttempts.some(attempt => attempt.id === id && attempt.customer_id === customer_id);
  }

  private read(): Attempt[] {
    return this.formatInput(readFileSync(this.inputFile, 'utf-8'));
  }

  private formatInput(input: string): Attempt[] {
    return input.split('\n').filter(line => line).map(line => {
      const attempts = JSON.parse(line);

      return {
        ...attempts,
        load_amount: parseFloat(attempts.load_amount.replace('$', '')),
        time: DateTime.fromISO(attempts.time, { setZone: true })
      };
    });
  }
}