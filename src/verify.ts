import { isError } from 'radashi'

export const verify = (
  condition: unknown,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  error: string | Error
): condition is true => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!condition) {
    throw isError(error) ? error : new Error(error)
  }

  return true
}
