import { NextPageWithLayout } from "types";
import withLandingPageLayout from "layouts/landingPage";
import Hero from "components/Hero";
import Shout from "components/Shout";
import styles from "styles/HomePage.module.css";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <h1 className={styles.claim}>
        Next.js setup focued on DX and code quality
      </h1>
      <h2 className={styles.claimSecondary}>Strict Typescript</h2>

      <Shout
        text={
          <>
            <h2>Code-quality tools</h2>
            <p>
              <strong>ESLint</strong> with sensible defaults.{" "}
              <strong>Prettier</strong> with minimum overrides.
            </p>
          </>
        }
        image={{
          src: "/images/shout1.png",
          width: 413,
          height: 260,
        }}
      />
      <Shout
        text={
          <>
            <h2>TypeScript only codebase</h2>
            <p>
              Check correctness of your code with help of{" "}
              <strong>type packages</strong>.
            </p>
          </>
        }
        imageFirst
        image={{
          src: "/images/shout2.png",
          width: 413,
          height: 260,
        }}
      />
    </>
  );
};

HomePage.getLayout = (fn) => withLandingPageLayout(fn());

export default HomePage;
