import pluginVitest from '@vitest/eslint-plugin'
import { GLOB_TESTS } from '../globs'
import type { Linter } from 'eslint'

export const vitest = (): Linter.Config => ({
    ...pluginVitest.configs.recommended,
    files: GLOB_TESTS,
    languageOptions: {
        globals: {
            suite: 'writable',
            test: 'writable',
            describe: 'writable',
            it: 'writable',
            expectTypeOf: 'writable',
            assertType: 'writable',
            expect: 'writable',
            assert: 'writable',
            chai: 'writable',
            vitest: 'writable',
            vi: 'writable',
            beforeAll: 'writable',
            afterAll: 'writable',
            beforeEach: 'writable',
            afterEach: 'writable',
            onTestFailed: 'writable',
            onTestFinished: 'writable',
        },
    },
})
