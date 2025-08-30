import { configs } from 'eslint-plugin-regexp'
import type { ConfigWithExtends } from 'typescript-eslint'

export const regexp: ConfigWithExtends = {
    ...configs['flat/recommended'],
    name: 'michael-yakovlev/regexp/rules',
}
