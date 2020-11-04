import { GetServerSideProps, NextPage } from 'next';

const doAsyncWork = () => Promise.reject(new Error('Server Test 3'));

const ServerTest3Page: NextPage = () => <h1>Server Test 3</h1>;

export const getServerSideProps: GetServerSideProps = async () => {
  doAsyncWork();

  return { props: {} };
};

export default ServerTest3Page;
