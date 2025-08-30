import type { ConfigWithExtends } from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export const prettier: ConfigWithExtends = {
    plugins: { prettier: eslintPluginPrettier },
    //extends: [eslintConfigPrettier],
    ...eslintConfigPrettier,
    name: 'michael-yakovlev/prettier',
    //rules: {
    //    ...eslintPluginPrettier.configs.recommended.rules
    // "prettier/prettier": [
    //  "error",
    //  {
    //    useTabs: false,
    //    singleQuote: true,
    //    printWidth: 120,
    //    tabWidth: 4,
    //    trailingComma: "all",
    //    bracketSpacing: true,
    //    semi: true,
    //    arrowParens: "always",
    //    bracketSameLine: false,
    //    endOfLine: "lf",
    //  },
    //],
    //}
}
