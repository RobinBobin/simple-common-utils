import type { mapEntries } from 'radashi'

type TObjectKeyCaseConverter = (string: string) => string
type TObject<TValue = unknown> = Readonly<Record<string, TValue>>

type TToEntry = Parameters<
  typeof mapEntries<string, unknown, string, unknown>
>[1]

export type { TObject, TObjectKeyCaseConverter, TToEntry }
