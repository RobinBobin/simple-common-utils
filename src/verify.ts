import { isError } from 'radashi'

export function verify(
  condition: unknown,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  error: string | Error
): asserts condition {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!condition) {
    throw isError(error) ? error : new Error(error)
  }
}
