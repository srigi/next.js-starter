import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Button, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';

const { NEXT_PUBLIC_SITE_NAME: siteName } = process.env;

const Navbar: FunctionComponent = () => {
  return (
    <BootstrapNavbar className="pr-0 pl-0" variant="light" expand="md">
      <BootstrapNavbar.Brand>
        <Link href="/">
          <a className="navbar-brand">
            <img
              className="d-inline-block align-top mr-2"
              width={30}
              height={30}
              src="/android-chrome-512x512.png"
              alt="go to home link"
            />
            {siteName}
          </a>
        </Link>
      </BootstrapNavbar.Brand>

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
