import { expect, test } from 'vitest';

import GaussianKernel from '../index.js';

test('default options', () => {
  const kernel = new GaussianKernel();

  expect(kernel.compute([1, 2], [1, 2])).toBe(1);
});
