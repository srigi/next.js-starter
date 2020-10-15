import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Nav from '../components/Nav';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome · Next.js starter</title>
      </Head>

      <Nav />
      <main className="py-20">
        <h1 className="font-thin text-5xl text-center mb-2">Next.js starter</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </main>
    </>
  );
};

export default IndexPage;
