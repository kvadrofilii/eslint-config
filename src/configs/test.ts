import pluginVitest from '@vitest/eslint-plugin'
import { GLOB_TESTS } from '../globs'
import type { ConfigWithExtends } from 'typescript-eslint'

export const test: ConfigWithExtends = {
    ...pluginVitest.configs.recommended,
    name: 'michael-yakovlev/test/rules',
    files: GLOB_TESTS,
}
