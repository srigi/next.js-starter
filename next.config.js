const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps');

const {
  GIT_COMMIT_SHA,
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_AUTH_TOKEN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  VERCEL_BITBUCKET_COMMIT_SHA,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
} = process.env;
process.env.SENTRY_DSN = SENTRY_DSN;
console.log('>>> process.env', {
  GIT_COMMIT_SHA,
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  VERCEL_BITBUCKET_COMMIT_SHA,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
});

const COMMIT_SHA =
  GIT_COMMIT_SHA || VERCEL_BITBUCKET_COMMIT_SHA || VERCEL_GITHUB_COMMIT_SHA || VERCEL_GITLAB_COMMIT_SHA;
const basePath = '';

module.exports = withSourceMaps({
  basePath,
  devtool: 'hidden-source-map',
  reactStrictMode: true,
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  webpack(config, { dev, isServer }) {
    console.log('>>> dev', { dev });

    // replace @sentry/node imports with @sentry/browser when building the browser's bundle
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    if (SENTRY_DSN && SENTRY_ORG && SENTRY_PROJECT && SENTRY_AUTH_TOKEN && COMMIT_SHA && !dev) {
      // upload the source maps during build step
      console.log('>>> doing SentryWebpackPlugin()');
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          stripPrefix: ['webpack://_N_E/'],
          urlPrefix: `~${basePath}/_next`,
          release: COMMIT_SHA,
        }),
      );
    }

    return config;
  },
});
