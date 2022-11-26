import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(3)).toEqual(false);
  });
});
