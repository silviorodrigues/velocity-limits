import { DateTime } from 'luxon';

export interface Attempt {
  id: string;
  customer_id: string;
  load_amount: number;
  time: DateTime;
}