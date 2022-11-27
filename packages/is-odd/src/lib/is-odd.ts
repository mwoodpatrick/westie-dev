import { isEven } from '@westie-dev/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
