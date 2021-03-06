import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useAtom } from 'jotai';
import { NextPage } from 'next';

import FullBleedLayout, { Unconstrained } from '../src/components/layouts/FullBleedLayout';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import LoginForm from '../src/components/forms/LoginForm';
import indexPageAtom from '../src/atoms/indexPage';

const IndexPage: NextPage = () => {
  const [{ loginDrawerOpened }, setIndexPageAtom] = useAtom(indexPageAtom);

  const handleLoginDrawerOnClose = () => {
    setIndexPageAtom((atom) => ({ ...atom, loginDrawerOpened: false }));
  };

  return (
    <FullBleedLayout title="Welcome">
      <Unconstrained>
        <Hero
          title="Next.js starter"
          subtitle="Jump right into most successful ReactJS framework"
          picture="/img/unsplash.jpg"
        />
      </Unconstrained>

      <Unconstrained>
        <Navbar />
      </Unconstrained>
      <Box sx={{ mb: 4 }} />

      <section>
        <Grid container alignItems="center" spacing={2} style={{ marginBottom: '4rem' }}>
          <Grid item xs>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Typescript only
            </Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse
              assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
              adipisci, beatae obcaecati.
            </Typography>
          </Grid>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Box sx={{ maxWidth: 220 }} clone>
              <img src="/img/logo-TS.png" alt="Typescript logo" />
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Box sx={{ maxWidth: 220 }} clone>
              <img src="/img/logo-ESLint.png" alt="ESLint logo" />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Maximum strictness to code-quality
            </Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse
              assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
              adipisci, beatae obcaecati.
            </Typography>
          </Grid>
        </Grid>
      </section>

      <Drawer anchor="right" open={loginDrawerOpened} onClose={handleLoginDrawerOnClose}>
        <Box sx={{ padding: 2, width: 260 }}>
          <LoginForm onAuthenticated={handleLoginDrawerOnClose} />
        </Box>
      </Drawer>
    </FullBleedLayout>
  );
};

export default IndexPage;
