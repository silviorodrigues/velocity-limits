import { Transaction } from './classes';
// import { Customer } from './Customer';

const transaction = new Transaction('input.txt');

transaction.attempts.forEach(i => console.log(i.customer_id))