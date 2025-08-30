import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import type { ConfigWithExtends } from 'typescript-eslint'
import { createNodeResolver } from 'eslint-plugin-import-x'

// https://github.com/un-ts/eslint-plugin-import-x
// https://github.com/import-js/eslint-import-resolver-typescript
export const imports: ConfigWithExtends = {
    name: 'michael-yakovlev/imports/rules',
    settings: {
        'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
    },
    plugins: { importX },
    extends: [importX.flatConfigs.typescript],
    rules: {
        'import-x/export': 'error',
        'import-x/no-deprecated': 'warn',
        'import-x/no-duplicates': 'error',
        'import-x/no-empty-named-blocks': 'error',
        'import-x/no-mutable-exports': 'error',
        // 'import-x/no-named-as-default': 'warn',
        // 'import-x/no-named-as-default-member': 'warn',
        // 'import-x/no-unused-modules': [
        //   1,
        //   { missingExports: true, unusedExports: true, ignoreUnusedTypeExports: true },
        // ],
        'import-x/default': 'error',
        // 'import-x/named': 'error',
        'import-x/namespace': 'error',
        'import-x/no-absolute-path': 'error',
        // 'import-x/no-cycle': [2, { maxDepth: 1 }],
        'import-x/no-self-import': 'error',
        'import-x/no-unresolved': 'off', // it should be checked by typescript
        'import-x/no-useless-path-segments': 'error',
        'import-x/exports-last': 'error',
        'import-x/first': 'error',
        // 'import-x/group-exports': 'error',
        'import-x/newline-after-import': 'error',
        // 'import-x/no-default-export': 'warn',
        // Настройка очерёдности импортов
        'import-x/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
                groups: [
                    // import fs from 'fs';
                    'builtin',
                    // import _ from 'lodash';
                    'external',
                    // import foo from 'src/foo';
                    'internal',
                    // import qux from '../../foo/qux';
                    'parent',
                    // import main from './';
                    'index',
                    // import baz from './bar/baz';
                    'sibling',
                ],
                'newlines-between': 'never',
                pathGroups: [
                    {
                        pattern: './**.module.scss', // ./my.module.scss
                        group: 'sibling',
                        position: 'after',
                    },
                    {
                        pattern: '~/**', // aliases, eg. "~/faq/MyComponent"
                        group: 'parent',
                        position: 'before',
                    },
                ],
            },
        ],
    },
}
