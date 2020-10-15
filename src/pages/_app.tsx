import { AppProps } from 'next/app';
import React, { FunctionComponent } from 'react';

import './_app.css';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <React.StrictMode>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </React.StrictMode>
);

export default App;
