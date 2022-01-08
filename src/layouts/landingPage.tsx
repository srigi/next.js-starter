import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactElement } from "react";

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
        <header className={styles.header}>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Site logo"
              width={36}
              height={36}
            />
          </a>
          <nav>
            <Link href="/profile">profile</Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          Powered by
          <span className={styles.logo}>
            <Image
              src="/images/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </footer>
      </div>
    </>
  );
};

export default function withLayout(page: ReactElement, title?: string) {
  return <LandingPageLayout title={title}>{page}</LandingPageLayout>;
}
