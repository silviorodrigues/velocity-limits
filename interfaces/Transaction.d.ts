import { Attempt } from './Attempt';

export interface Transaction {
  inputFile: string;
  attempts: Attempt[];
  write(attempt: Attempt, accepted: boolean): void;
}