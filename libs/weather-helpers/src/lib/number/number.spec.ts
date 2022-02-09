import {roundNumber} from './number';

describe('numberHelpers', () => {
  it('should work', () => {
    expect(roundNumber(10.4)).toEqual(10);
  });
});
