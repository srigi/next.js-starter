import { NextPage } from 'next';
import React from 'react';

import SimpleLayout from '../components/layouts/SimpleLayout';

const IndexPage: NextPage = () => {
  return (
    <SimpleLayout title="Welcome">
      <h1 className="font-thin text-5xl text-center mb-2">Next.js starter</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </SimpleLayout>
  );
};

export default IndexPage;
