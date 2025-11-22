import type { Linter } from 'eslint'
import pluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export const unicorn = (): Linter.Config => ({
    ...pluginUnicorn.configs.recommended,
    name: 'michael-yakovlev/unicorn/rules',
    languageOptions: {
        globals: globals.builtin,
    },
})
