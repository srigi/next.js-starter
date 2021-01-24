import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode, FunctionComponent, useEffect } from 'react';

import sentry from '../src/lib/sentry';
import theme from '../src/theme';
import './_app.css';

sentry.init();

export const cache = createCache({ key: 'css', prepend: true });

const App: FunctionComponent<AppProps & { err: Record<string, unknown> }> = ({ Component, pageProps, err }) => {
  // Remove the server-side CSS
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles != null) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StrictMode>
      <CacheProvider value={cache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} err={err} />
        </ThemeProvider>
      </CacheProvider>
    </StrictMode>
  );
};

export default App;
