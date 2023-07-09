const isDev = process.env.NODE_ENV === 'development'

const defaultConfig = {
  extends: ['react-app', 'prettier'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    semi: ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error',
    'newline-before-return': 'error',
    'no-debugger': 'error',
    'eol-last': 'error',
  },
}

const devConfig = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-debugger': 'warn',
  },
}

module.exports = isDev ? devConfig : defaultConfig
