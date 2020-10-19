import { AppProps } from 'next/app';
import getConfig from 'next/config';
import React, { FunctionComponent } from 'react';
import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/node';

import './_app.css';

const { NEXT_PUBLIC_SENTRY_DSN } = process.env;

if (NEXT_PUBLIC_SENTRY_DSN) {
  const { serverRuntimeConfig } = getConfig();
  const distDir = `${serverRuntimeConfig.rootDir}/.next`;

  Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          frame.filename = frame.filename?.replace(distDir, 'app:///_next'); // eslint-disable-line no-param-reassign

          return frame;
        },
      }),
    ],
  });
}

const App: FunctionComponent<AppProps & { err: Record<string, unknown> }> = ({ Component, pageProps, err }) => (
  <React.StrictMode>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} err={err} />
  </React.StrictMode>
);

export default App;
