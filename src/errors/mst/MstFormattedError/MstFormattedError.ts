import type { TMstFormattedErrorParams } from './types'

import { getType } from 'mobx-state-tree'
import { isString } from 'radashi'

const format = ({
  entityName,
  message,
  model
}: TMstFormattedErrorParams): string => {
  const ar = ["'", getType(model).name, '.', entityName, "'"]

  if (isString(message) && message) {
    ar.push(message)
  }

  return ar.join('')
}

class MstFormattedError extends Error {
  constructor(params: TMstFormattedErrorParams) {
    super(format(params))
  }
}

MstFormattedError.prototype.name = 'MstFormattedError'

export { MstFormattedError }
