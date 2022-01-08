import { NextPageWithLayout } from "../src/types";
import withLandingPageLayout from "../src/layouts/landingPage";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.call}>
        <h1 className={styles.title}>{WEBSITE_NAME}</h1>
        <p className={styles.description}>
          On s’plante est un outil interactif qui vous aide à trouver des
          plantes compagnes pour vos légumes, fruits et fleurs.
        </p>
        <button className={styles.cta}>Action</button>
      </div>

      <Image
        src="/images/hero@2x.png"
        alt="Hero image"
        width={472}
        height={500}
      />
    </>
  );
};

HomePage.getLayout = (page) => withLandingPageLayout(page);

export default HomePage;
