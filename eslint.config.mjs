import config from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'

/** @type unknown[] */
const array = [
  ...config,
  {
    ignores: ['legacy']
  }
]

export default array
