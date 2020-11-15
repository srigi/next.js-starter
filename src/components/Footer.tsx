import { FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';

import styles from './Footer.module.css';

const Footer: FunctionComponent = () => (
  <footer className={styles.footer}>
    <Container>
      <p>Copyright &copy; 2020</p>
    </Container>
  </footer>
);

export default Footer;
