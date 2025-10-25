import { MstFormattedError } from './MstFormattedError'

class MstNullishError extends MstFormattedError {
  // Nothing to do.
}

MstNullishError.prototype.name = 'MstFormattedError'

export { MstNullishError }
