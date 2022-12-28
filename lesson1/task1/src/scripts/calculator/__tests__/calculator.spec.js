import { sum, mult } from '../calculator';

it('should return sum', () => {

  expect(sum(2, 3)).toEqual(5);
});

it('should return mult', () => {
  expect(mult(3, 3)).toEqual(9);
});