import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

const ServerTest1Page: NextPage = () => <h1>Server Test 1</h1>;

export const getServerSideProps: GetServerSideProps = () => {
  throw new Error('Server Test 1');
};

export default ServerTest1Page;
