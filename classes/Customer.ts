import { Customer as CustomerInterface } from '../interfaces/Customer';

// - A maximum of $5,000 can be loaded per day
// - A maximum of $20,000 can be loaded per week
// - A maximum of 3 loads can be performed per day, regardless of amount

export class Customer implements CustomerInterface {
  readonly id: string;
  
  public constructor(id: string) {
    this.id = id;
  }

  public canAttempt(amount: number, time: string): boolean {
    return true;
  }
}