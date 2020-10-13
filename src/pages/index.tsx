import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome · Next.js starter</title>
      </Head>

      <main className="py-20">
        <h1 className="text-5xl text-center text-accent-1">Next.js starter</h1>
      </main>
    </>
  );
};

export default IndexPage;
