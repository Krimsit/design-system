import { merge } from 'webpack-merge'

import type { StorybookConfig } from '@storybook/react-webpack5'

const svgrRule = {
  test: /\.svg$/,
  include: /sports|common/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColors: true,
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: '*:(fill|stroke)',
              },
            },
          ],
        },
      },
    },
    'url-loader',
  ],
}

const svgrFlagRule = {
  test: /\.svg$/,
  include: /flags/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    },
    'url-loader',
  ],
}

const rules = [svgrRule, svgrFlagRule]

const rulesConfig = {
  module: {
    rules,
  },
}

const updateConfigRulesForSvg = (config: any) => {
  config.module.rules = config.module.rules.map((rule: any) => {
    if (/file-loader/.test(rule.loader)) {
      return {
        ...rule,
        test: /\.(eot|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/, // Excluding `svg`
        type: 'javascript/auto', // Fixing images
      }
    }

    if (rule.test && rule.test.test('.svg')) {
      return {
        ...rule,
        ...svgrRule,
      }
    }

    return rule
  })
}

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@nx/react/plugins/storybook',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    updateConfigRulesForSvg(config)

    // add your own webpack tweaks if needed

    return merge(config, rulesConfig)
  },
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
