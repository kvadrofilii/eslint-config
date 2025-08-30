import { isPackageExists } from 'local-pkg'
import { GLOB_SRC } from '../globs'
import type { ConfigWithExtends } from 'typescript-eslint'
import pluginReact from '@eslint-react/eslint-plugin'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

const ReactRefreshAllowConstantExportPackages = ['vite']
const ReactRouterPackages = ['@react-router/node', '@react-router/react', '@react-router/serve', '@react-router/dev']
const NextJsPackages = ['next']

// https://www.npmjs.com/package/@eslint-react/eslint-plugin
// https://www.npmjs.com/package/eslint-plugin-react-hooks
// https://www.npmjs.com/package/eslint-plugin-react-refresh
export function react(): ConfigWithExtends[] {
    const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some((i) => isPackageExists(i))
    const isUsingReactRouter = ReactRouterPackages.some((i) => isPackageExists(i))
    const isUsingNext = NextJsPackages.some((i) => isPackageExists(i))

    return [
        {
            name: 'michael-yakovlev/react/rules',
            extends: [pluginReact.configs['recommended-typescript']],
        },
        {
            ...pluginReactHooks.configs['recommended-latest'],
            name: 'michael-yakovlev/react-hooks/rules',
        },
        {
            ...pluginReactRefresh.configs.recommended,
            name: 'michael-yakovlev/react-refresh/rules',
            files: [GLOB_SRC],
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
                sourceType: 'module',
            },
            rules: {
                // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
                'react-refresh/only-export-components': [
                    'warn',
                    {
                        allowConstantExport: isAllowConstantExport,
                        allowExportNames: [
                            ...(isUsingNext
                                ? [
                                      'dynamic',
                                      'dynamicParams',
                                      'revalidate',
                                      'fetchCache',
                                      'runtime',
                                      'preferredRegion',
                                      'maxDuration',
                                      'config',
                                      'generateStaticParams',
                                      'metadata',
                                      'generateMetadata',
                                      'viewport',
                                      'generateViewport',
                                  ]
                                : []),
                            ...(isUsingReactRouter
                                ? [
                                      'meta',
                                      'links',
                                      'headers',
                                      'loader',
                                      'action',
                                      'clientLoader',
                                      'clientAction',
                                      'handle',
                                      'shouldRevalidate',
                                  ]
                                : []),
                        ],
                    },
                ],
            },
        },
    ]
}
