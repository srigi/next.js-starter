import { FunctionComponent } from "react";
import Image from "next/image";

import styles from "styles/components/LayoutFooter.module.css";

const LayoutFooter: FunctionComponent = () => {
  return (
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
  );
};

export default LayoutFooter;
