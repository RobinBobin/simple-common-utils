import type { TObject, TObjectKeyCaseConverter, TToEntry } from './types'

import {
  isArray,
  isBoolean,
  isNullish,
  isNumber,
  isObject,
  isString,
  mapEntries
} from 'radashi'

import { ObjectKeyCaseConversionError } from './ObjectKeyCaseConversionError'

const toEntry =
  (converter: TObjectKeyCaseConverter): TToEntry =>
  (key, value) => {
    const mapObject = (object: TObject): TObject => {
      return mapEntries(object, toEntry(converter))
    }

    const map = (valueToMap: unknown): unknown => {
      if (isArray(valueToMap)) {
        return valueToMap.map(map)
      }

      const isIdentity = [isBoolean, isNullish, isNumber, isString].some(is =>
        is(valueToMap)
      )

      if (isIdentity) {
        return valueToMap
      }

      if (isObject(valueToMap)) {
        return mapObject(valueToMap as TObject)
      }

      throw new ObjectKeyCaseConversionError(converter, key, valueToMap)
    }

    const mappedKey = converter(key)
    const mappedValue = map(value)

    return [mappedKey, mappedValue]
  }

export const convertObjectKeyCase = <TValue = unknown>(
  converter: TObjectKeyCaseConverter,
  object: TObject<TValue>
): TObject<TValue> => {
  return mapEntries(object, toEntry(converter)) as TObject<TValue>
}

export type { TObjectKeyCaseConverter }
