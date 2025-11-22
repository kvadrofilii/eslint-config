import type { Linter } from 'eslint'
import { configs as configsSonarJs } from 'eslint-plugin-sonarjs'

export const sonarjs = (): Linter.Config => {
    return configsSonarJs.recommended
}
