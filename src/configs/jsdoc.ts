import type { Linter } from 'eslint'
import pluginJsdoc from 'eslint-plugin-jsdoc'

// https://github.com/gajus/eslint-plugin-jsdoc
export const jsdoc = (): Linter.Config => ({
    ...pluginJsdoc.configs['flat/recommended'],
    name: 'michael-yakovlev/jsdoc/rules',
})
