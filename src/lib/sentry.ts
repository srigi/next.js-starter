import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/node';

export default {
  init(): void {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      const integrations = [];

      if (process.env.NEXT_IS_SERVER === 'true' && typeof process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR === 'string') {
        // rewrite Error.stack to use relative paths in Node.js
        // source maps starting with `~/_next` map to files in Error.stack with path `app:///_next`
        integrations.push(
          new RewriteFrames({
            iteratee: (frame) => {
              frame.filename = frame.filename?.replace(process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR!, 'app:///'); // eslint-disable-line no-param-reassign
              frame.filename = frame.filename?.replace('.next', '_next'); // eslint-disable-line no-param-reassign

              return frame;
            },
          }),
        );
      }

      Sentry.init({
        enabled: process.env.NODE_ENV === 'production',
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        integrations,
        release: process.env.NEXT_PUBLIC_COMMIT_SHA,
      });
    }
  },
};
