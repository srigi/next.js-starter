import { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SimpleLayout from '../components/layouts/SimpleLayout';
import styles from './index.module.css';

const IndexPage: NextPage = () => {
  return (
    <SimpleLayout title="Welcome">
      <header className={styles.header}>
        <div className={styles.headerHero}>
          <Container>
            <h1>Next.js starter</h1>
            <p>Jump right into most successful ReactJS framework</p>
          </Container>
        </div>
      </header>

      <Container className="mw-800px">
        <Row>
          <Col>
            <p>Highly pimped dev-stack for Next.js</p>
            <p>Very strict code-quality tools included</p>
            <p>Develop backend &amp; frontend together</p>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  );
};

export default IndexPage;
