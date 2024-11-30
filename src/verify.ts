import { isError } from 'radashi'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const verify = (condition: unknown, error: string | Error): void => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!condition) {
    throw isError(error) ? error : new Error(error)
  }
}
