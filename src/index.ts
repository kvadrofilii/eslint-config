import type { Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'
import { GLOB_EXCLUDE } from './globs'
import type { ExtendableConfigName } from './types'
import {
    base,
    jsdoc,
    jsonc,
    jsxA11y,
    node,
    playwright,
    react,
    regexp,
    sonarjs,
    sortPackageJson,
    sortTsconfig,
    tanstack,
    unicorn,
    vitest,
} from './configs'
import { isPackageExists } from 'local-pkg'

const eslintConfig = (options: ExtendableConfigName = {}, ...userConfigs: Linter.Config[]) => {
    const {
        a11y: enableA11y = isPackageExists('react'),
        node: enableNode = false,
        jsdoc: enableJsdoc = false,
        jsonc: enableJsonc = false,
        playwright: enablePlaywright = isPackageExists('playwright'),
        prettier: enablePrettier = isPackageExists('prettier'),
        react: enableReact = isPackageExists('react'),
        regexp: enableRegexp = false,
        sonarjs: enableSonarjs = false,
        sort: enableSort = false,
        tanstack: enableTanstack = isPackageExists('@tanstack/react-query'),
        unicorn: enableUnicorn = false,
        vitest: enableVitest = isPackageExists('vitest'),
    } = options

    const configs: Linter.Config[] = base()

    if (enableReact) configs.push(...react())
    if (enableA11y) configs.push(jsxA11y())
    if (enableTanstack) configs.push(...tanstack())
    if (enableUnicorn) configs.push(unicorn())
    if (enableSonarjs) configs.push(sonarjs())

    if (enableNode) configs.push(node())

    if (enableRegexp) configs.push(regexp())
    if (enableJsdoc) configs.push(jsdoc())
    if (enableJsonc) configs.push(jsonc())

    if (enableSort) {
        if (!enableJsonc) {
            configs.push(jsonc())
        }

        configs.push(sortPackageJson(), sortTsconfig())
    }

    // Тесты
    if (enableVitest) configs.push(vitest())
    if (enablePlaywright) configs.push(playwright())
    // Добавляем пользовательские настройки
    if (userConfigs) configs.push(...userConfigs)
    // В конце добавляем config-prettier, чтобы устранить конфликты правил
    if (enablePrettier) configs.push(eslintConfigPrettier)

    return defineConfig([...configs, globalIgnores([...GLOB_EXCLUDE, ...(options.ignores ?? [])])])
}

export default eslintConfig

export const configs = {
    base,
    jsdoc,
    jsonc,
    jsxA11y,
    node,
    playwright,
    react,
    regexp,
    sonarjs,
    sortPackageJson,
    sortTsconfig,
    tanstack,
    unicorn,
    vitest,
    prettier: eslintConfigPrettier,
}

export * as globs from './globs'
