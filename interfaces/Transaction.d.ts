import { Attempt } from './Attempt';

export interface Transaction {
  inputFile: string;
  attempts: Attempt[];
}