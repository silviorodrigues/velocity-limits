import { Attempt } from './Attempt';

export interface CustomerClass {
  id: string;
  canAttempt(Attempt): boolean;
}