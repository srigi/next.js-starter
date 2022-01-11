import {
  FunctionComponent,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";

import LayoutHeader from "components/LayoutHeader";
import LayoutFooter from "components/LayoutFooter";
import styles from "styles/layouts/landingPage.module.css";

export const Unconstrained: FunctionComponent = ({ children }) => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      className: `${styles.unconstrained} ${children.props.className}`,
    });
  }

  return null;
};

const LandingPageLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <LayoutHeader />
      <main className={styles.content}>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default function withLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
}
