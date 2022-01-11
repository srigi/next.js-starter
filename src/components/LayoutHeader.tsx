import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "styles/components/LayoutHeader.module.css";

const LayoutHeader: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={styles.brand}>
          <Image
            src="/images/logo.svg"
            alt="Site logo"
            width={64}
            height={36}
          />
          Next.js starter
        </a>
        <nav className={styles.nav}>
          <Link href="/profile">profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;
