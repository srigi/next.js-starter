import { format } from 'light-date';
import { GetServerSideProps, NextPage } from 'next';
import { Container, Col, Row, Table } from 'react-bootstrap';

import SimpleLayout from '../components/layouts/SimpleLayout';
import { getDbConnection } from '../lib/db';

interface UserRow {
  id: string;
  user_name: string; // eslint-disable-line camelcase
  password?: string;
  roles?: string;
  created_at?: number; // eslint-disable-line camelcase
  updated_at?: number; // eslint-disable-line camelcase
}
interface User {
  id: string;
  userName: string;
  roles: string[];
  createdAt: string;
}

interface Props {
  users: User[];
}

const DbPage: NextPage<Props> = ({ users }) => {
  return (
    <SimpleLayout title="Welcome">
      <Container className="mw-800px">
        <Row>
          <Col>
            <h1>Database users:</h1>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>username</th>
                  <th>roles</th>
                  <th>created at</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.roles.join(', ')}</td>
                    <td>{user.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const connection = await getDbConnection();
  const table = connection('user');
  const users = await table.select('id', 'user_name', 'roles', 'created_at');

  return {
    props: {
      users: users.map((user: UserRow) => ({
        id: user.id,
        userName: user.user_name,
        ...(user.roles != null && { roles: JSON.parse(user.roles) }),
        ...(user.created_at != null && {
          createdAt: format(new Date(user.created_at), '{yyyy}-{MM}-{dd}, {HH}:{mm}:{ss}'),
        }),
      })),
    },
  };
};

export default DbPage;
