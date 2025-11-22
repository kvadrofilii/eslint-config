import type { Linter } from 'eslint'
import pluginNode from 'eslint-plugin-n'

// https://github.com/eslint-community/eslint-plugin-n
export const node = (): Linter.Config => ({
    ...pluginNode.configs['flat/recommended'],
    name: 'michael-yakovlev/node/rules',
    rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/process': ['error', 'never'],
        'n/process-exit-as-throw': 'error',
    },
})
