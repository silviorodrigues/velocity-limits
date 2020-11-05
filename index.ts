import { Customer, IO } from './classes';
import { CustomerClass } from './interfaces/Customer';
import { Attempt } from './interfaces/Attempt';

const io = new IO('input.txt');
const customers: CustomerClass[] = [];

const getCustomer = (customerId: string): CustomerClass => {
  const loadedCustomer = customers.find(({ id }) => id === customerId);

  if (loadedCustomer) {
    return loadedCustomer;
  }

  const newCustomer = new Customer(customerId);

  customers.push(newCustomer);
  return newCustomer;
};

const sendAttempt = (attempt: Attempt): void => {
  const attemptAccepted = getCustomer(attempt.customer_id).canAttempt(attempt);

  io.log(attempt, attemptAccepted);
};

io.input.forEach((attempt: Attempt): void => {
  if (!io.hasLoaded(attempt)) {
    sendAttempt(attempt);
  }
});

io.write('output.txt');
