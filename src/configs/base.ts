import { configs as configsJS } from '@eslint/js'
import type { Linter } from 'eslint'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX as pluginImportX } from 'eslint-plugin-import-x'
import globals from 'globals'
import { cwd } from 'node:process'
import { configs as configsTs, parser } from 'typescript-eslint'
import { GLOB_SRC } from '../globs'

// https://typescript-eslint.io/
// https://www.npmjs.com/package/eslint-import-resolver-typescript
// https://www.npmjs.com/package/eslint-plugin-import-x
export const base = (): Linter.Config[] => [
    configsJS.recommended,
    ...configsTs.recommended,
    pluginImportX.flatConfigs.recommended,
    pluginImportX.flatConfigs.typescript,
    {
        files: [GLOB_SRC],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                parser,
                tsconfigRootDir: cwd(),
                projectService: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2025,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
            },
        },
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver({
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                }),
            ],
        },
    },
    {
        name: 'michael-yakovlev/javascript/rules',
        rules: {
            'no-console': 'warn', // Подсвечиваю использование console в коде
            'no-duplicate-imports': 'off', // it checked by import-x/no-duplicates
            'no-fallthrough': ['error', { allowEmptyCase: true }],
            'no-param-reassign': ['error'],
        },
    },
    {
        name: 'michael-yakovlev/imports/rules',
        rules: {
            'import-x/newline-after-import': 'error',
        },
    },
]
