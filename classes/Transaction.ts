import { readFileSync } from 'fs';
import { Attempt } from '../interfaces/Attempt';
import { Transaction as TransactionInterface } from '../interfaces/Transaction';

export class Transaction implements TransactionInterface {
  readonly inputFile: string;
  readonly attempts: Attempt[];
  
  public constructor(inputFile: string) {
    this.inputFile = inputFile;
    this.attempts = this.read();
  }

  private read(): Attempt[] {
    const input = readFileSync(this.inputFile, 'utf-8');

    return input.split('\n').map(line => line && JSON.parse(line));
  }
}