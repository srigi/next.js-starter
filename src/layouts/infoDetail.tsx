import { FunctionComponent, ReactElement } from "react";

import LayoutHeader from "components/LayoutHeader";
import LayoutFooter from "components/LayoutFooter";
import styles from "styles/layouts/infoDetail.module.css";

const InfoDetailLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <LayoutHeader />
      <main className={styles.main}>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default function withLayout(page: ReactElement) {
  return <InfoDetailLayout>{page}</InfoDetailLayout>;
}
