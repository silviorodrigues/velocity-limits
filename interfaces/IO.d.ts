import { Attempt } from './Attempt';

export interface IO {
  inputFile: string;
  attempts: Attempt[];
  write(attempt: Attempt, accepted: boolean): void;
}