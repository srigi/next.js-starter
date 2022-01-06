import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactElement | null;
};
