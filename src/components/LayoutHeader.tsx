import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "styles/components/LayoutHeader.module.css";

const LayoutHeader: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">
        <Image src="/images/logo.png" alt="Site logo" width={36} height={36} />
      </a>
      <nav>
        <Link href="/profile">profile</Link>
      </nav>
    </header>
  );
};

export default LayoutHeader;
