import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import indexPageAtom from '../atoms/indexPage';

const Navbar: FunctionComponent = () => {
  const [, setIndexPageAtom] = useAtom(indexPageAtom);

  const handleLoginBtnClick = () => {
    setIndexPageAtom((atom) => ({ ...atom, loginDrawerOpened: !atom.loginDrawerOpened }));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="md" disableGutters sx={{ px: 2, '@media (min-width: 996px)': { px: 0 } }}>
        <Toolbar disableGutters variant="dense">
          <Link href="/">
            <Typography
              component="a"
              color="textSecondary"
              sx={{ cursor: 'pointer', marginRight: 2, textDecoration: 'none' }}
            >
              Introduction
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" onClick={handleLoginBtnClick}>
            login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
