export const CONFIG_NAMES = [
    'a11y',
    'imports',
    'javascript',
    'jsdoc',
    'jsonc',
    'jsx',
    'nextjs',
    'node',
    'prettier',
    'query',
    'react',
    'regexp',
    'sort',
    'test',
    'typescript',
    'unicorn',
] as const

export type ConfigNames = (typeof CONFIG_NAMES)[number]
export type ExtendableConfigName = Partial<Record<ConfigNames, boolean>>
