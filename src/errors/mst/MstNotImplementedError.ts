import { MstFormattedError } from './MstFormattedError'

class MstNotImplementedError extends MstFormattedError {
  // Nothing to do.
}

MstNotImplementedError.prototype.name = 'MstFormattedError'

export { MstNotImplementedError }
