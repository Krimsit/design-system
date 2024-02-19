const { NxWebpackPlugin } = require('@nx/webpack')
const { NxReactWebpackPlugin } = require('@nx/react')
const { join } = require('path')

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/design-system'),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new NxWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: [],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
  module: {
    rules: [
      {
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
      },
      {
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
      },
    ],
  },
}
