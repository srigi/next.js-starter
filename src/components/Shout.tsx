import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import styles from "styles/components/Shout.module.css";

interface Props {
  text: ReactNode;
  image: {
    src: string;
    width: number;
    height: number;
  };
  imageFirst?: boolean;
}

const Shout: FunctionComponent<Props> = ({ image, imageFirst, text }) => {
  return (
    <section className={styles.shout}>
      {imageFirst ? (
        <>
          <div className={styles.image}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt="ESLint demonstration"
            />
          </div>
          <div>{text}</div>
        </>
      ) : (
        <>
          <div>{text}</div>
          <div className={styles.image}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt="ESLint demonstration"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Shout;
