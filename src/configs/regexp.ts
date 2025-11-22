import { configs } from 'eslint-plugin-regexp'
import type { Linter } from 'eslint'

export const regexp = (): Linter.Config => {
    return configs['flat/recommended']
}
