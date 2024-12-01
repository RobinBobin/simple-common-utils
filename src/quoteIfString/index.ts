import type { IOptions } from './types'

import { isString } from 'radashi'

export const quoteIfString = <T>(
  value: T,
  options?: Readonly<IOptions>
): T | string => {
  const quotingSymbol = options?.quotingSymbol ?? '"'
  const shouldSkip = options?.shouldSkip ?? false

  return shouldSkip || !isString(value) ?
      value
    : `${quotingSymbol}${value}${quotingSymbol}`
}
