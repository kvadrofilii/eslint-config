import pluginJsdoc from 'eslint-plugin-jsdoc'
import type { ConfigWithExtends } from 'typescript-eslint'

// https://github.com/gajus/eslint-plugin-jsdoc
export const jsdoc: ConfigWithExtends = {
    ...pluginJsdoc.configs['flat/recommended'],
    name: 'michael-yakovlev/jsdoc/rules',
}
