import { Customer, Transaction } from './classes';
import { Customer as CustomerInterface } from './interfaces/Customer';

const transactions = new Transaction('input.txt');
const customers: CustomerInterface[] = [];

const isCustomerLoaded = (customerId: string): boolean => {
  return customers.some(({ id }) => id === customerId);
}

const getLoadedCustomer = (customerId: string): CustomerInterface | undefined => {
  return customers.find(({ id }) => id === customerId);
}

transactions.attempts.forEach(({ customer_id }) => {
  if(isCustomerLoaded(customer_id)) {
    getLoadedCustomer(customer_id)?.isInstantiaed()
  } else {
    customers.push(new Customer(customer_id))
  }
});

console.log(customers)