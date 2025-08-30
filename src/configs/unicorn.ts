import type { ConfigWithExtends } from 'typescript-eslint'
import pluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export const unicorn: ConfigWithExtends = {
    name: 'michael-yakovlev/unicorn/rules',
    languageOptions: {
        globals: globals.builtin,
    },
    plugins: {
        unicorn: pluginUnicorn,
    },
    extends: [pluginUnicorn.configs.recommended],
}
