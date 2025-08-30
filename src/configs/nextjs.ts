import type { ConfigWithExtends } from 'typescript-eslint'
import pluginNextJS from '@next/eslint-plugin-next'
import { GLOB_SRC } from '../globs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeRules(rules: Record<string, any>): Record<string, any> {
    return Object.fromEntries(
        Object.entries(rules).map(([key, value]) => [key, typeof value === 'string' ? [value] : value]),
    )
}

// https://nextjs.org/docs/app/api-reference/config/eslint
export const nextjs: ConfigWithExtends[] = [
    {
        name: 'michael-yakovlev/nextjs/setup',
        plugins: {
            next: pluginNextJS,
        },
    },
    {
        files: [GLOB_SRC],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            sourceType: 'module',
        },
        name: 'michael-yakovlev/nextjs/rules',
        rules: {
            ...normalizeRules(pluginNextJS.configs.recommended.rules),
            ...normalizeRules(pluginNextJS.configs['core-web-vitals'].rules),
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
