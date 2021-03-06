const fs = require('fs');
const merge = require('babel-merge');
const ext = `${__dirname}/babel.ext.json`;
module.exports = merge({
  only: [
    'src',
    'styleguide',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-dynamic-import-webpack',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-json-strings',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-add-module-exports',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-syntax-dynamic-import',
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
}, fs.existsSync(ext) && require(ext)); // eslint-disable-line
