import { FunctionComponent } from "react";

import styles from "styles/components/LayoutFooter.module.css";

const LayoutFooter: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <svg className={styles.divider} aria-hidden="true">
        <defs>
          <pattern
            id="line-17"
            x="0"
            y="0"
            width="15"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M15 5.9c-3.8 0-3.8-4.4-7.5-4.4S3.7 5.9 0 5.9"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="8" fill="url(#line-17)" />
      </svg>
      @srigi · a fullstack webdeveloper
    </footer>
  );
};

export default LayoutFooter;
