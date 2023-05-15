const NextBundleAnalyzer = require('@next/bundle-analyzer');
const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT } = require('next/constants.js');

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

/**
 * @param {string} stage
 */
module.exports = function next(stage) {
  return withBundleAnalyzer(
    defineNextConfig({
      distDir: '_next',
      output: 'standalone',
      assetPrefix: stage == PHASE_DEVELOPMENT_SERVER ? undefined : './',
      reactStrictMode: false,
      swcMinify: false,
      images: {
        disableStaticImages: true,
        unoptimized: true,
        domains: (process.env.IMAGE_DOMAINS ?? '')
          .split(',')
          .map((s) => s.trim()),
      },
      experimental: {
        fallbackNodePolyfills: false,
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        config.module.rules.push({
          test: /\.ttf$/,
          type: 'asset/resource',
        });
        config.module.rules.push({
          test: /\.inline.jpg$/,
          type: 'asset',
        });
        config.module.rules.push({
          test: /^(?!.*(\.inline)\.).*\.(jpg|png|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: 'images/optimized',
                outputPath: '../public/images/optimized',
              },
            },
            {
              loader: 'webpack-image-resize-loader',
            },
          ],
        });
        config.experiments.topLevelAwait = true;
        return config;
      },
    }),
  );
};
