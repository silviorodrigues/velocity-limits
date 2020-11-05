import { DateTime } from 'luxon';
import { IO } from '../../classes';

const io = new IO('input.txt');
const attempt = {
  id: '1', customer_id: '1', load_amount: 500, time: DateTime.local(2020, 11, 4),
};

describe('#constructor', () => {
  it('should populate this.input array with attempts', () => {
    expect(io.input).toHaveLength(1000);
  });
});

describe('#hasLoaded', () => {
  describe('when an attempt has never been loaded before', () => {
    it('should return false', () => {
      expect(io.hasLoaded(attempt)).toBeFalsy();
    });
  });

  describe('when an attempt with the same id and custumer_id was loaded before', () => {
    it('should return true', () => {
      io.log(attempt, true);

      expect(io.hasLoaded(attempt)).toBeTruthy();
    });
  });
});
