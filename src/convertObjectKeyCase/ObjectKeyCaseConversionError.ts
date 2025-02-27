import type { TObjectKeyCaseConverter } from './types'

class ObjectKeyCaseConversionError extends Error {
  constructor(
    public readonly converter: TObjectKeyCaseConverter,
    public readonly key: string,
    public readonly value: unknown
  ) {
    super(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `'convertObjectKeyCase()': unknown value type converting '${key}' to '${converter(key)}'. typeof value: '${typeof value}', value: ${value}`
    )
  }
}

ObjectKeyCaseConversionError.prototype.name = 'SnakeToCamelConversionError'

export { ObjectKeyCaseConversionError }
