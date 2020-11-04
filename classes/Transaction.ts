import { readFileSync } from 'fs';
import { DateTime } from 'luxon';
import { Attempt } from '../interfaces/Attempt';
import { Transaction as TransactionInterface } from '../interfaces/Transaction';

export class Transaction implements TransactionInterface {
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
    return this.formatTransactions(readFileSync(this.inputFile, 'utf-8'));
  }

  private formatTransactions(input: string): Attempt[] {
    return input.split('\n').filter(line => line).map(line => {
      const transaction = JSON.parse(line);

      return {
        ...transaction,
        load_amount: parseFloat(transaction.load_amount.replace('$', '')),
        time: DateTime.fromISO(transaction.time, { setZone: true })
      };
    });
  }
}