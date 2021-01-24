import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';

import FullBleedLayout, { Unconstrained } from '../src/components/layouts/FullBleedLayout';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';

const IndexPage: NextPage = () => {
  return (
    <FullBleedLayout title="Welcome">
      <Unconstrained>
        <Hero />
      </Unconstrained>

      <Unconstrained>
        <Navbar />
      </Unconstrained>

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
    </FullBleedLayout>
  );
};

export default IndexPage;
