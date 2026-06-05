# ml-kernel-gaussian

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

The gaussian (radial basis function) kernel.

## Installation

`$ npm i ml-kernel-gaussian`

## Usage

### new GaussianKernel(options)

**Options**:

- `sigma` - value for the sigma parameter (default: 1).

### kernel.compute(x, y)

Returns the dot product between `x` and `y` in feature space.

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-kernel-gaussian.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-kernel-gaussian
[ci-image]: https://github.com/mljs/kernel-gaussian/actions/workflows/nodejs.yml/badge.svg?branch=main
[ci-url]: https://github.com/mljs/kernel-gaussian/actions/workflows/nodejs.yml
[download-image]: https://img.shields.io/npm/dm/ml-kernel-gaussian.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-kernel-gaussian
