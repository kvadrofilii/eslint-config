import type { ConfigWithExtends } from 'typescript-eslint'
import eslint from '@eslint/js'
import globals from 'globals'

// https://eslint.org/
export const javascript: ConfigWithExtends[] = [
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.es2025,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2022,
                sourceType: 'module',
            },
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        name: 'michael-yakovlev/javascript/setup',
    },
    {
        plugins: {
            eslint,
        },
        name: 'michael-yakovlev/javascript/rules',
        rules: {
            ...eslint.configs.recommended.rules,
            'no-console': 'warn', // Подсвечиваю использование console в коде
            'no-duplicate-imports': 'off', // it checked by import-x/no-duplicates
            'no-fallthrough': ['error', { allowEmptyCase: true }],
            'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draftState'] }],
            'no-shadow': 'off', // it checked by @typescript-eslint/no-shadow
            'padding-line-between-statements': [
                'error',
                // Require blank lines before all return statements
                { blankLine: 'always', prev: '*', next: 'return' },
                // Require blank lines after every sequence of variable declarations
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                // Require blank lines between clauses in switch statements
                { blankLine: 'always', prev: ['case', 'default'], next: '*' },
            ],
        },
    },
]
