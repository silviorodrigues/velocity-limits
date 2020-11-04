import { Attempt } from '../interfaces/Attempt';
import { Customer as CustomerInterface } from '../interfaces/Customer';

const MAX_DAILY_LOADS = 3;
const MAX_DAILY_AMOUNT = 5000;
const MAX_WEEKLY_AMOUNT = 20000;

export class Customer implements CustomerInterface {
  readonly id: string;
  private attempts: Attempt[] = [];
  
  public constructor(id: string) {
    this.id = id;
  }

  public canAttempt(attempt: Attempt): boolean {
    if(this.canAttemptOnDay(attempt) && this.canAttemptOnWeek(attempt)) {
      this.attempts.push(attempt);

      return true
    };

    return false;
  }

  private canAttemptOnDay({ load_amount, time }: Attempt): boolean {
    const dayAttempts = this.attempts.filter(attempt => attempt.time.hasSame(time, 'day'));

    return this.canLoadOnDay(dayAttempts) && this.haveAmmountOnDay(dayAttempts, load_amount);
  }

  private canAttemptOnWeek({ load_amount, time }: Attempt): boolean {
    const weekAttempts = this.attempts.filter(attempt => attempt.time.hasSame(time, 'week'));

    return this.haveAmmountOnWeek(weekAttempts, load_amount);
  }

  private canLoadOnDay(attempts: Attempt[]): boolean {
    return attempts.length < MAX_DAILY_LOADS;
  }

  private haveAmmountOnDay(attempts: Attempt[], amount: number): boolean {
    return this.sumAmmounts(attempts, amount) <= MAX_DAILY_AMOUNT;
  }

  private haveAmmountOnWeek(attempts: Attempt[], amount: number): boolean {
    return this.sumAmmounts(attempts, amount) <= MAX_WEEKLY_AMOUNT;
  }

  private sumAmmounts(attempts: Attempt[], amount: number): number {
    return attempts.reduce((acc, current) => acc + current.load_amount, 0) + amount;
  }
}