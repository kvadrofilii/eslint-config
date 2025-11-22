export const CONFIG_NAMES = [
    'a11y',
    'fsd',
    'jsdoc',
    'jsonc',
    'node',
    'playwright',
    'prettier',
    'react',
    'regexp',
    'sonarjs',
    'sort',
    'tanstack',
    'unicorn',
    'vitest',
] as const

export type ConfigNames = (typeof CONFIG_NAMES)[number]

export type ExtendableConfigName = Partial<Record<ConfigNames, boolean>> & {
    ignores?: Array<string>
}
