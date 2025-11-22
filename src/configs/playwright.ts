import type { Linter } from 'eslint'
import pluginPlaywright from 'eslint-plugin-playwright'
import { GLOB_TESTS } from '../globs'

// https://github.com/mskelton/eslint-plugin-playwright#readme
export const playwright = (): Linter.Config => ({
    ...pluginPlaywright.configs['flat/recommended'],
    files: [GLOB_TESTS],
    rules: {
        ...pluginPlaywright.configs['flat/recommended'].rules,
    },
})
