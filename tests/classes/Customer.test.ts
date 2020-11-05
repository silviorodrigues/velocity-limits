import { DateTime } from 'luxon';
import { Customer } from '../../classes';

const customerId = '1';
const attempt = {
  id: '1', customer_id: customerId, load_amount: 500, time: DateTime.local(2020, 11, 4),
};

describe('#canAttempt', () => {
  describe('when is a valid attempt', () => {
    const customer = new Customer(customerId);
    customer.canAttempt(attempt);
    customer.canAttempt(attempt);

    it('should return true', () => {
      expect(customer.canAttempt(attempt)).toBeTruthy();
    });
  });

  describe('when daily attempts have 3 loads', () => {
    const customer = new Customer(customerId);
    customer.canAttempt(attempt);
    customer.canAttempt(attempt);
    customer.canAttempt(attempt);

    it('should return false', () => {
      expect(customer.canAttempt(attempt)).toBeFalsy();
    });
  });

  describe('when daily attempts are greater than the maximum daily amount', () => {
    const customer = new Customer(customerId);
    customer.canAttempt(attempt);

    it('should return false', () => {
      expect(customer.canAttempt({
        ...attempt,
        load_amount: 5000,
      })).toBeFalsy();
    });
  });

  describe('when weeekly attempts are greater than the maximum weekly amount', () => {
    const customer = new Customer(customerId);
    const load_amount = 5000;

    customer.canAttempt({
      ...attempt,
      load_amount,
      time: DateTime.local(2020, 11, 2),
    });

    customer.canAttempt({
      ...attempt,
      load_amount,
      time: DateTime.local(2020, 11, 3),
    });

    customer.canAttempt({
      ...attempt,
      load_amount,
      time: DateTime.local(2020, 11, 4),
    });

    it('should return false', () => {
      expect(customer.canAttempt({
        ...attempt,
        load_amount: 5001,
        time: DateTime.local(2020, 11, 5),
      })).toBeFalsy();
    });
  });
});
