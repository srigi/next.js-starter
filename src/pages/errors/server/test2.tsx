import { GetServerSideProps, NextPage } from 'next';

const ServerTest2Page: NextPage = () => <h1>Server Test 2</h1>;

export const getServerSideProps: GetServerSideProps = async () => {
  throw new Error('Server Test 2');
};

export default ServerTest2Page;
