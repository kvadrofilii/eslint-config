import { GLOB_JSX, GLOB_TSX } from '../globs'
import type { ConfigWithExtends } from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'

// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
export function jsx(a11y: boolean): ConfigWithExtends {
    // Base JSX configuration without a11y
    const baseConfig: ConfigWithExtends = {
        files: [GLOB_JSX, GLOB_TSX],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        name: 'michael-yakovlev/jsx/setup',
        plugins: {},
        rules: {},
        settings: {
            react: {
                version: 'detect',
            },
        },
    }

    // Return early if no a11y configuration is needed
    if (!a11y) {
        return baseConfig
    }

    const a11yConfig = jsxA11y.flatConfigs.recommended

    // Merge base config with a11y configuration
    return {
        ...baseConfig,
        ...a11yConfig,
        files: baseConfig.files,
        languageOptions: {
            ...baseConfig.languageOptions,
            ...a11yConfig.languageOptions,
        },
        name: baseConfig.name,
        plugins: {
            ...baseConfig.plugins,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            ...baseConfig.rules,
        },
    }
}
