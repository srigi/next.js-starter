import { NextPage } from 'next';
import React from 'react';

const doAsyncWork = () => Promise.reject(new Error('Client Test 1'));
doAsyncWork();

const ClientTest1Page: NextPage = () => <h1>Client Test 1</h1>;

export default ClientTest1Page;
