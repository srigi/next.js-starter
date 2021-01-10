import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  className?: string;
}

const { NEXT_PUBLIC_SITE_NAME: siteName } = process.env;

const useStyles = makeStyles({
  brand: {
    alignItems: 'center',
    color: cyan[100],
    display: 'flex',
    marginRight: 16,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  brandImage: {
    marginRight: 8,
  },
  brandText: {
    fontSize: '1.25rem',
  },
});

const Navbar: FunctionComponent<Props> = ({ className }) => {
  const styles = useStyles();

  return (
    <AppBar className={className} position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Link href="/">
            <a className={styles.brand}>
              <img alt="Project logo" className={styles.brandImage} src="/img/logo.png" width={30} />{' '}
              <Typography component="span" className={styles.brandText}>
                {siteName}
              </Typography>
            </a>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/srigi/next.js-starter"
            target="_blank"
          >
            Github
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
