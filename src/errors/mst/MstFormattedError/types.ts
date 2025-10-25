import type { IAnyStateTreeNode } from 'mobx-state-tree'

export type TMstFormattedErrorParams = Readonly<{
  entityName: string
  message?: string
  model: Readonly<IAnyStateTreeNode>
}>
