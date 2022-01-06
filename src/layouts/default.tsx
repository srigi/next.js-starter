import Image from "next/image";
import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";

import styles from "../../styles/layouts/default.module.css";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const DefaultLayout: FunctionComponent<{
  title?: string;
}> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {title && `${title} ·`} {WEBSITE_NAME}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default function withLayout(page: ReactElement, title?: string) {
  return <DefaultLayout title={title}>{page}</DefaultLayout>;
}
