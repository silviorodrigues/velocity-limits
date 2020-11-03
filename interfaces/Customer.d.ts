export interface Customer {
  id: string;
  canAttempt(amount: number, time: string): boolean;
}