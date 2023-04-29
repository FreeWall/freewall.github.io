const NextBundleAnalyzer = require('@next/bundle-analyzer');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants.js');
const { i18n } = require('./next-i18next.config.js');

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
      distDir: stage == PHASE_DEVELOPMENT_SERVER ? '.next' : 'build',
      reactStrictMode: false,
      swcMinify: true,
      images: {
        domains: (process.env.IMAGE_DOMAINS ?? '')
          .split(',')
          .map((s) => s.trim()),
      },
      //i18n,
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
        config.experiments.topLevelAwait = true;
        return config;
      },
    }),
  );
};