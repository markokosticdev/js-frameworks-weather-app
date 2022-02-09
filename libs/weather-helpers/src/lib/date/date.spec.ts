import {formatDate} from './date';

describe('dateHelpers', () => {
  it('should work', () => {
    expect(formatDate(new (Date))).toEqual('weather-helpers');
  });
});
