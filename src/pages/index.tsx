import { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SimpleLayout from '../components/layouts/SimpleLayout';
import styles from './index.module.css';

const { NEXT_PUBLIC_COMMIT_SHA } = process.env;

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
        <p className={styles.gitRev}>
          GIT_REV: <code>{NEXT_PUBLIC_COMMIT_SHA}</code>
        </p>
      </header>

      <section className={styles.section}>
        <Container>
          <Row>
            <Col sm={{ span: 12 }} md={{ span: 6 }}>
              <div className={styles.shoutText}>
                <h3>Typescript only</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                  esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                  molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </Col>
            <Col sm={{ span: 12 }} md={{ span: 6 }} className="text-center justify-content-center align-self-center">
              <div className={styles.shoutImage}>
                <img src="/img/logo-TS.png" alt="Typescript logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Row>
            <Col sm={{ span: 12 }} md={{ span: 6 }} className="text-center justify-content-center align-self-center">
              <div className={styles.shoutImage}>
                <img src="/img/logo-ESLint.png" alt="ESLint logo" />
              </div>
            </Col>
            <Col sm={{ span: 12 }} md={{ span: 6 }}>
              <div className={styles.shoutText}>
                <h3>Maximum strictness to code-quality</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                  esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                  molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </SimpleLayout>
  );
};

export default IndexPage;
