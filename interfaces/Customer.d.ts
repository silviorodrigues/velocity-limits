import { Attempt } from './Attempt';

export interface Customer {
  id: string;
  canAttempt(Attempt): boolean;
}