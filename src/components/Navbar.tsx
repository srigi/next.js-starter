import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => {
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Container maxWidth="md" disableGutters sx={{ px: 2, '@media (min-width: 996px)': { px: 0 } }}>
        <Toolbar disableGutters variant="dense">
          <Link href="/">
            <a>
              <Typography component="span">Introduction</Typography>
            </a>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
