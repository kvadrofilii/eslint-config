import process from 'node:process'
import { GLOB_TS, GLOB_TSX } from '../globs'
import type { ConfigWithExtends } from 'typescript-eslint'
import tseslint from 'typescript-eslint'
import parserTs from '@typescript-eslint/parser'

export const typescript: ConfigWithExtends = {
    ...tseslint.configs.recommended,
    name: 'michael-yakovlev/typescript/rules',
    languageOptions: {
        parser: parserTs,
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            tsconfigRootDir: process.cwd(),
        },
    },
    files: [GLOB_TS, GLOB_TSX],
}
