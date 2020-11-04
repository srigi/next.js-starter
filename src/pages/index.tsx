import { NextPage } from 'next';
import { Container, Col, Row } from 'react-bootstrap';
import cn from 'classnames';

import SimpleLayout from '../components/layouts/SimpleLayout';
import styles from './index.module.css';

const IndexPage: NextPage = () => {
  return (
    <SimpleLayout title="Welcome">
      <header className={cn(styles.header, 'mb-4')}>
        <Container className="mw-800px">
          <Row className="px-md-3">
            <Col className={styles.headerContent}>
              <h1 className="font-thin text-5xl mb-2">Next.js starter</h1>
              <p>Jump right into most successful ReactJS framework</p>
            </Col>
          </Row>
        </Container>
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
