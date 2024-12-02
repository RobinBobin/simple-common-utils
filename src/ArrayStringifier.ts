import { isString } from 'radashi'

export class ArrayStringifier<T> {
  protected postfix = ''
  protected prefix = ''

  constructor(
    protected array: readonly T[] = [],
    protected separator = ', '
  ) {}

  setArray(array: readonly T[]): this {
    this.array = array

    return this
  }

  setPostfix(postfix: string): this {
    this.postfix = postfix

    return this
  }

  setPrefix(prefix: string): this {
    this.prefix = prefix

    return this
  }

  setSeparator(separator: string): this {
    this.separator = separator

    return this
  }

  toString(): string {
    const result: string[] = []

    if (this.canAddPrefix()) {
      result.push(this.getPrefix())
    }

    result.push(
      ...this.array.map(
        (element, index) =>
          this.getStringifiedElement(index, element) +
          this.getSeparator(index, element)
      )
    )

    if (this.canAddPostfix()) {
      result.push(this.getPostfix())
    }

    return result.join('')
  }

  protected canAddPostfix(): boolean {
    return Boolean(this.getPostfix() && this.array.length)
  }

  protected canAddPrefix(): boolean {
    return Boolean(this.getPrefix() && this.array.length)
  }

  protected getPostfix(): string {
    return this.postfix
  }

  protected getPrefix(): string {
    return this.prefix
  }

  // @ts-expect-error `element` not used
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getSeparator(index: number, element: T): string {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return index === this.array.length - 1 ? '' : this.separator
  }

  // @ts-expect-error `el` not used
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getStringifiedElement(index: number, el: T): string {
    const element = this.array[index] as { toString?: () => string }
    const stringifiedElement = element.toString?.()

    if (isString(stringifiedElement)) {
      return stringifiedElement
    }

    throw new Error(`this.array[${index}] doesn't have 'toString()'`)
  }
}
