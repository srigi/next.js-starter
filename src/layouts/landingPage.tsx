import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";

import LayoutHeader from "components/LayoutHeader";
import LayoutFooter from "components/LayoutFooter";
import styles from "styles/layouts/landingPage.module.css";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const LandingPageLayout: FunctionComponent<{
  title?: string;
}> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {title && `${title} ·`} {WEBSITE_NAME}
        </title>
      </Head>

      <div className={styles.container}>
        <LayoutHeader />
        <main className={styles.main}>{children}</main>
        <LayoutFooter />
      </div>
    </>
  );
};

export default function withLayout(page: ReactElement, title?: string) {
  return <LandingPageLayout title={title}>{page}</LandingPageLayout>;
}
