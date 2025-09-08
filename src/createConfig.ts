import { globalIgnores } from 'eslint/config'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import {
    imports,
    javascript,
    jsdoc,
    jsonc,
    jsx,
    nextjs,
    node,
    prettier,
    query,
    react,
    regexp,
    sortPackageJson,
    sortTsconfig,
    test,
    typescript,
    unicorn,
} from './configs'
import { GLOB_EXCLUDE } from './globs'
import type { ExtendableConfigName } from './types'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export function createConfig(
    options: ExtendableConfigName = {},
    ...userConfigs: ConfigWithExtends[]
): FlatConfig.ConfigArray {
    const {
        jsdoc: enableJsdoc = true,
        jsonc: enableJsonc = true,
        jsx: enableJsx = false,
        nextjs: enableNextjs = false,
        node: enableNode = false,
        query: enableQuery = false,
        react: enableReact = false,
        regexp: enableRegexp = true,
        sort: enableSort = true,
        test: enableTest = true,
        unicorn: enableUnicorn = false,
        a11y: enableA11y = false,
    } = options

    const configs: ConfigWithExtends[] = []

    // Base configs
    configs.push(globalIgnores(GLOB_EXCLUDE), imports, ...javascript, typescript)

    if (enableJsdoc) {
        configs.push(jsdoc)
    }

    if (enableJsonc) {
        configs.push(...jsonc)
    }

    if (enableJsx) {
        configs.push(jsx(enableA11y))
    }

    if (enableNextjs) {
        configs.push(...nextjs)
    }

    if (enableNode) {
        configs.push(node)
    }

    if (enableQuery) {
        configs.push(query)
    }

    if (enableReact) {
        configs.push(...react())
    }

    if (enableRegexp) {
        configs.push(regexp)
    }

    if (enableSort) {
        if (!enableJsonc) {
            configs.push(...jsonc)
        }

        configs.push(sortPackageJson, sortTsconfig)
    }

    if (enableTest) {
        configs.push(test)
    }

    if (enableUnicorn) {
        configs.push(unicorn)
    }

    configs.push(...userConfigs)
    configs.push(prettier)

    return tseslint.config(configs)
}
