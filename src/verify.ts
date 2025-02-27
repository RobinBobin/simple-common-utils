import { isString } from 'radashi'

export function verify(
  condition: unknown,
  error: string | Readonly<Error>
): asserts condition {
  if (!(condition as boolean)) {
    throw isString(error) ? new Error(error) : (error as Error)
  }
}
