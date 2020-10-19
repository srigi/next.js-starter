import { NextPage } from 'next';
import React from 'react';

const ClientTest5Page: NextPage = () => (
  <>
    <h1>Client Test 5</h1>
    <button
      className="btn-blue"
      onClick={() => {
        throw new Error('Client Test 5');
      }}
      type="button"
    >
      Click me to throw an Error
    </button>
  </>
);

export default ClientTest5Page;
