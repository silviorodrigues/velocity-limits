import { Customer, Transaction } from './classes';
import { Customer as CustomerInterface } from './interfaces/Customer';
import { Attempt } from './interfaces/Attempt';

const transactions = new Transaction('input.txt');
const customers: CustomerInterface[] = [];

const getCustomer = (customerId: string): CustomerInterface => {
  const loadedCustomer =  customers.find(({ id }) => id === customerId);

  if(loadedCustomer) {
    return loadedCustomer;
  } else {
    const newCustomer = new Customer(customerId);

    customers.push(newCustomer);
    return newCustomer;
  }
}

const sendAttempt = ({ customer_id, load_amount, time }: Attempt): void => {
  const attemptResult = getCustomer(customer_id).canAttempt(load_amount, time);
}

transactions.attempts.forEach((attempt) => {
  sendAttempt(attempt);
});