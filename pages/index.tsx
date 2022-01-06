import { NextPageWithLayout } from "../src/types";
import withDefaultLayout from "../src/layouts/default";
import styles from "../styles/HomePage.module.css";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{WEBSITE_NAME}</a>
      </h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => withDefaultLayout(page);

export default HomePage;
