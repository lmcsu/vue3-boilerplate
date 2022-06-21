module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/standard',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'proposal',
    ],
    rules: {
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', 120],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-unused-vars': [
            'error',
        ],
        'quote-props': [
            'error',
            'consistent-as-needed',
        ],
        'semi': [
            'error',
            'always',
        ],
        'brace-style': ['error', '1tbs'],
        'comma-spacing': ['error'],
        'curly': [
            'error',
            'all',
        ],
        'eol-last': ['error', 'always'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'key-spacing': ['error'],
        'keyword-spacing': ['error'],
        'lines-between-class-members': ['error', 'always'],
        'max-statements-per-line': ['error', { max: 1 }],
        'no-alert': ['error'],
        'no-multi-spaces': ['error'],
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 0,
            maxBOF: 0,
        }],
        'no-var': ['error'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never', {
            allowSingleLineBlocks: false,
        }],
        'proposal/class-property-semi': ['error', 'always'],
        'proposal/class-property-space-infix-ops': ['error', 'always'],
        'proposal/class-property-no-dupe-property': 'error',
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'semi-spacing': ['error'],
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'space-infix-ops': ['error'],
        'space-unary-ops': ['error'],
        'spaced-comment': ['error', 'always', {
            block: {
                balanced: true,
            },
        }],
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-inner-declarations': 'error',
        'prefer-arrow-callback': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
    },
    overrides: [
        {
            files: ['*.{ts,vue}'],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/explicit-function-return-type': ['error', {
                    allowExpressions: true,
                }],
                '@typescript-eslint/member-delimiter-style': ['error', {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false,
                    },
                }],
                'proposal/class-property-space-infix-ops': 'off',
                '@typescript-eslint/no-explicit-any': ['error'],
                '@typescript-eslint/no-inferrable-types': 'off',
                // '@typescript-eslint/no-misused-promises': ['error'],
                '@typescript-eslint/explicit-member-accessibility': ['error'],

                'comma-dangle': 'off',
                '@typescript-eslint/comma-dangle': ['error', {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'always-multiline',
                    enums: 'always-multiline',
                    generics: 'always-multiline',
                    tuples: 'always-multiline',
                }],

                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error'],

                'semi': 'off',
                '@typescript-eslint/semi': ['error'],
            },
        },
        {
            files: ['*.vue'],
            rules: {
                'indent': 'off',
                'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],

                'vue/html-indent': ['error', 4],
                'vue/no-undef-properties': ['error'],

                'func-call-spacing': 'off',
                '@typescript-eslint/func-call-spacing': ['error'],
            },
        },
    ],
};
