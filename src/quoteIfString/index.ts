import type { IOptions } from './types'

import { isString } from 'radashi'

export const quoteIfString = (
  value: unknown,
  options?: Readonly<IOptions>
): unknown => {
  const quotingSymbol = options?.quotingSymbol ?? '"'
  const shouldSkip = options?.shouldSkip ?? false

  return shouldSkip || !isString(value) ?
      value
    : `${quotingSymbol}${value}${quotingSymbol}`
}
