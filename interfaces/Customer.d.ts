export interface Customer {
  id: string;
  sendAttempt(amount: string, time: string): void;
}