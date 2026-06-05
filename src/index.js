import { squaredEuclidean } from 'ml-distance-euclidean';

const defaultOptions = {
  sigma: 1,
};

/**
 * Gaussian (radial basis function) kernel.
 */
export default class GaussianKernel {
  /**
   * Create a new Gaussian kernel.
   * @param {object} [options] - Kernel options.
   * @param {number} [options.sigma=1] - Value for the sigma parameter.
   */
  constructor(options) {
    options = { ...defaultOptions, ...options };
    this.sigma = options.sigma;
    this.divisor = 2 * options.sigma * options.sigma;
  }

  /**
   * Compute the value of the kernel between two vectors.
   * @param {number[]} x - First vector.
   * @param {number[]} y - Second vector.
   * @returns {number} The dot product between `x` and `y` in feature space.
   */
  compute(x, y) {
    const distance = squaredEuclidean(x, y);
    return Math.exp(-distance / this.divisor);
  }
}
