import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../src/types";
import "../styles/globals.css";

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />, pageProps);
}
