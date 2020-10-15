import { NextPage } from 'next';
import React from 'react';
import cn from 'classnames';

import SimpleLayout from '../components/layouts/SimpleLayout';
import styles from './index.module.css';

const IndexPage: NextPage = () => {
  return (
    <SimpleLayout title="Welcome">
      <header className={cn(styles.header, 'mb-4')}>
        <div className={cn(styles.container, 'md:px-4')}>
          <section className={styles.headerContent}>
            <h1 className="font-thin text-5xl mb-2">Next.js starter</h1>
            <p>Jump right into most successful ReactJS framework</p>
          </section>
        </div>
      </header>

      <section className={cn(styles.container, 'px-4')}>
        <p>Highly pimped dev-stack for Next.js</p>
        <p>Very strict code-quality tools included</p>
        <p>Develop backend &amp; frontend together</p>
      </section>
    </SimpleLayout>
  );
};

export default IndexPage;
