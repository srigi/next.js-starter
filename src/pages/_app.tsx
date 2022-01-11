import type { AppProps } from "next/app";
import Head from "next/head";

import { NextPageWithLayout } from "types";
import "styles/globals.css";

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

export default function MyApp({ Component, pageProps }: MyAppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    (title) => (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>
            {title && `${title} ·`} {WEBSITE_NAME}
          </title>
        </Head>

        <Component {...pageProps} />
      </>
    ),
    pageProps
  );
}
