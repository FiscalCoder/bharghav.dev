let path = require('path')
let withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')

let { i18n } = require('./next-i18next.config')
const nextJsConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    dirs: ['components', 'constant', 'layouts', 'libs', 'pages', 'scripts', 'utils'],
  },
  images: {
    domains: ['i.scdn.co'],
  },
  typescript: { tsconfigPath: './tsconfig.json' },
  i18n,
  trailingSlash: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.json$/,
      use: [options.defaultLoaders.babel],
      include: path.resolve(__dirname, 'public/locales'),
    })

    return config
  },
}

const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
}

module.exports = { ...withBundleAnalyzer(nextJsConfig), ...withPWA(pwaConfig) }
