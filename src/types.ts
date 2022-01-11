import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (
    renderPropFn: (title?: string) => ReactElement,
    pageProps: P
  ) => ReactElement | null;
};
