import { NextPage } from 'next';
import React, { useEffect } from 'react';

const ClientTest3Page: NextPage = () => {
  useEffect(() => {
    throw new Error('Client Test 3');
  }, []);

  return <h1>Client Test 3</h1>;
};

export default ClientTest3Page;
