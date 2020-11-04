import { Customer, IO } from './classes';
import { CustomerClass } from './interfaces/Customer';
import { Attempt } from './interfaces/Attempt';

const io = new IO('input.txt');
const customers: CustomerClass[] = [];

const getCustomer = (customerId: string): CustomerClass => {
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
  const attemptAccepted = getCustomer(attempt.customer_id).canAttempt(attempt);

  io.write(attempt, attemptAccepted);
}

io.attempts.forEach((attempt) => {
  sendAttempt(attempt);
});