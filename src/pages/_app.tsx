import { AppProps } from 'next/app';
import React, { FunctionComponent } from 'react';

import './_app.css';

/* eslint-disable-next-line react/jsx-props-no-spreading */
const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
