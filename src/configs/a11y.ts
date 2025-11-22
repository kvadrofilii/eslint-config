import type { Linter } from 'eslint'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'

// https://www.npmjs.com/package/eslint-plugin-jsx-a11y
export const jsxA11y = (): Linter.Config => {
    return pluginJsxA11y.flatConfigs.recommended
}
