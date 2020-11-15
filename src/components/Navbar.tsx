import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiExternalLink } from 'react-icons/fi';

import styles from './Navbar.module.css';

const { NEXT_PUBLIC_SITE_NAME: siteName } = process.env;

const Navbar: FunctionComponent = () => {
  return (
    <BootstrapNavbar className={styles.navbar} bg="dark" variant="dark" expand="md">
      <Link href="/">
        <a className={classNames(styles.brand, 'navbar-brand')}>
          <img alt="Project logo" className="d-inline-block align-top" src="/img/logo.png" width={30} height={30} />{' '}
          {siteName}
        </a>
      </Link>

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <BootstrapNavbar.Text>
            <Button className="text-white" href="https://github.com/srigi/next.js-starter" target="_blank">
              Github <FiExternalLink className="inline-block" />
            </Button>
          </BootstrapNavbar.Text>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
