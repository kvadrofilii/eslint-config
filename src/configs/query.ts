import type { ConfigWithExtends } from 'typescript-eslint'
import pluginQuery from '@tanstack/eslint-plugin-query'

export const query: ConfigWithExtends = {
    ...pluginQuery.configs['flat/recommended'],
    name: 'michael-yakovlev/query/rules',
}
