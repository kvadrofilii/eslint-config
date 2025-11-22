import pluginTanstack from '@tanstack/eslint-plugin-query'
import type { Linter } from 'eslint'

// https://www.npmjs.com/package/@tanstack/eslint-plugin-query?activeTab=readme
export const tanstack = (): Linter.Config[] => {
    return pluginTanstack.configs['flat/recommended']
}
