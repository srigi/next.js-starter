import { AppProps } from 'next/app';
import { StrictMode, FunctionComponent } from 'react';
import sentry from '../lib/sentry';

import './_app.css';

sentry.init();

const App: FunctionComponent<AppProps & { err: Record<string, unknown> }> = ({ Component, pageProps, err }) => (
  <StrictMode>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} err={err} />
  </StrictMode>
);

export default App;
