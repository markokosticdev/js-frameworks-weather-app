import {withStatus} from './observer';
import {of} from "rxjs";

describe('numberHelpers', () => {
  it('should work', () => {
    expect(withStatus(of(''))).toEqual('');
  });
});
