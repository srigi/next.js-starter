import { FunctionComponent, ReactElement } from "react";

import LayoutHeader from "components/LayoutHeader";
import LayoutFooter from "components/LayoutFooter";
import styles from "styles/layouts/landingPage.module.css";

const LandingPageLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <LayoutHeader />
      <main className={styles.main}>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default function withLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
}
