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

      <section className={styles.section}>
        <Container>
          <Row>
            <Col>
              <div className={styles.shoutText}>
                <h3>Typescript only</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                  esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                  molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </Col>
            <Col className="text-center justify-content-center align-self-center">
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
            <Col className="text-center justify-content-center align-self-center">
              <div className={styles.shoutImage}>
                <img src="/img/logo-ESLint.png" alt="ESLint logo" />
              </div>
            </Col>
            <Col>
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

      <footer className={styles.footer}>
        <Container>
          <p>Copyright &copy; 2020</p>
        </Container>
      </footer>
    </SimpleLayout>
  );
};

export default IndexPage;
