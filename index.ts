import { Customer, IO } from './classes';
import { Customer as CustomerInterface } from './interfaces/Customer';
import { Attempt } from './interfaces/Attempt';

const io = new IO('input.txt');
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

const sendAttempt = (attempt: Attempt): void => {
  const attemptResult = getCustomer(attempt.customer_id).canAttempt(attempt);

  io.write(attempt, attemptResult);
}

io.attempts.forEach((attempt) => {
  sendAttempt(attempt);
});