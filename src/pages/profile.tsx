import Image from "next/image";

import { NextPageWithLayout } from "types";
import withInfoDetailLayout from "layouts/infoDetail";
import styles from "styles/ProfilePage.module.css";

const ProfilePage: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.info}>
        <Image
          src="/images/user-03C.svg"
          alt="User avatar"
          width={156}
          height={156}
        />
        <h1 className="title">Alicia Wellick</h1>
      </div>

      <div className={styles.detail}>
        <p>
          Morbi porta congue turpis eu tincidunt. Duis magna nisi, dictum vitae
          metus nec, laoreet viverra turpis. Suspendisse fringilla libero
          lectus, id viverra leo varius vel. Nam vitae porttitor diam. Cras
          sodales quam eu erat bibendum, in facilisis odio ornare. Nunc eu
          laoreet magna, a fringilla purus. Praesent accumsan lectus nec nulla
          consequat, et ultrices sapien aliquam. In at magna id ante sagittis
          vestibulum quis quis erat. Sed et quam ullamcorper, egestas sem
          varius, laoreet tortor. Mauris vel cursus odio, sed pretium velit.
          Nunc efficitur enim nec cursus hendrerit. Proin posuere tellus elit,
          nec auctor nisi accumsan faucibus. Nunc blandit iaculis sem, ac mattis
          odio semper quis. Phasellus aliquam faucibus fringilla. Vivamus
          accumsan dui neque, iaculis elementum ex finibus at.
        </p>
        <p>
          Pellentesque et metus metus. Cras erat nibh, consectetur et augue a,
          consectetur feugiat enim. In est velit, tincidunt ut nisi et, volutpat
          auctor enim. Nunc scelerisque luctus pulvinar. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur a pulvinar ligula, ac
          mollis augue. Vivamus pharetra ex orci, non mollis nibh tincidunt vel.
          Integer in velit magna. Donec nec lacus eu eros cursus euismod.
          Phasellus placerat ante neque, eget accumsan lorem gravida eu.
          Phasellus eu accumsan nisl, non posuere neque. Nulla tincidunt mollis
          lacus nec rhoncus. Sed hendrerit orci sit amet neque tempus, quis
          feugiat nulla malesuada. Curabitur eu sapien et leo varius convallis.
          Vivamus dignissim, dui et hendrerit tincidunt, nisi lacus venenatis
          ligula, quis tincidunt ipsum dolor sed libero. Praesent ultrices massa
          ante, et mattis justo pharetra id.
        </p>
      </div>
    </>
  );
};

ProfilePage.getLayout = (page) => withInfoDetailLayout(page, "Profile");

export default ProfilePage;
