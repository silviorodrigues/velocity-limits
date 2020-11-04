import { Attempt } from './Attempt';

export interface IOClass {
  inputFile: string;
  attempts: Attempt[];
  write(attempt: Attempt, accepted: boolean): void;
}