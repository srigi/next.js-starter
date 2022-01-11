import { FunctionComponent } from "react";
import { Unconstrained } from "layouts/landingPage";
import styles from "styles/components/Hero.module.css";

const Hero: FunctionComponent = () => {
  return (
    <Unconstrained>
      <section className={styles.hero}>
        <h1 className={styles.title}>Next.js starter</h1>
        <p className={styles.disclaimer}>
          Jump right into most successful ReactJS framework
        </p>
      </section>
    </Unconstrained>
  );
};

export default Hero;
