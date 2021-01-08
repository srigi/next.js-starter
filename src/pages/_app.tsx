import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { StrictMode, FunctionComponent, useEffect } from 'react';

import sentry from '../lib/sentry';
import theme from '../theme';

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
