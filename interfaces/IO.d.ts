import { Attempt } from './Attempt';

export interface IOClass {
  inputFile: string;
  input: Attempt[];
  log(attempt: Attempt, accepted: boolean): void;
  hasLoaded(attempt: Attempt): boolean;
  write(outputFile: string): void;
}