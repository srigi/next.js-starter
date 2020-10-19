import { NextPage } from 'next';
import React, { useEffect } from 'react';

const ClientTest4Page: NextPage = () => {
  useEffect(function effect() {
    async function doTest() {
      const doAsyncWork = () => Promise.reject(new Error('Client Test 4'));
      await doAsyncWork();
    }
    doTest();
  }, []);

  return <h1>Client Test 4</h1>;
};

export default ClientTest4Page;
