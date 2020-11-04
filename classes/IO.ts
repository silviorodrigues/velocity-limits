import { readFileSync } from 'fs';
import { DateTime } from 'luxon';
import { Attempt } from '../interfaces/Attempt';
import { IOClass } from '../interfaces/IO';

export class IO implements IOClass {
  readonly inputFile: string;
  readonly attempts: Attempt[];
  
  public constructor(inputFile: string) {
    this.inputFile = inputFile;
    this.attempts = this.read();
  }

  public write({id, customer_id}: Attempt, accepted: boolean): void {
    console.log({id, customer_id, accepted});
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