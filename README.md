# @michael-yakovlev/eslint-config

Этот пакет содержит набор конфигураций ESLint, которые можно использовать для обеспечения единого стиля кода в ваших проектах.

## Установка

Установите пакет выполнив команду в терминале:

```sh
npm install --save-dev @michael-yakovlev/eslint-config jiti eslint typescript
```

Для работы пакета необходимо добавить в проект файл `tsconfig.json` и установить `typescript`

```json
{
    "include": ["src", "eslint.config.ts"],
    "compilerOptions": {
        "module": "esnext",
        "types": ["node"]
    }
}
```

## Использование

Добавьте в проект файл `eslint.config.ts`:

```ts
// eslint.config.ts
import eslintConfig from 'eslint-config'

export default eslintConfig()
```

## Конфигурация

```ts
// eslint.config.ts
import eslintConfig from 'eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

// Документация по использованию конфигураций устаревших плагинов в ESLint 9
// https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
const compat = new FlatCompat()

export default eslintConfig(
    {
        // Список файлов и папок для игнорирования
        ignores: ['node_modules', 'dist'],
        // Отключаем конфигурацию React для проекта
        react: false,
    },

    // Конфигурации устаревших плагинов
    ...compat.config({
        extends: [
            'eslint:recommended',
            // Другие расширения
        ],
    }),

    // Другие плоские конфиги
)
```
