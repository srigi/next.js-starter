import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';

import FullBleedLayout, { Unconstrained } from '../src/components/layouts/FullBleedLayout';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import styles from './index.module.css';

const { NEXT_PUBLIC_COMMIT_SHA } = process.env;

const useStyles = makeStyles((theme) => ({
  centeredGridItem: {
    alignSelf: 'center',
    textAlign: 'center',
  },
}));

const IndexPage: NextPage = () => {
  const muiStyles = useStyles();

  return (
    <FullBleedLayout title="Welcome">
      <Unconstrained>
        <Hero />
      </Unconstrained>

      <Unconstrained>
        <Navbar />
      </Unconstrained>

      <section>
        <Grid container spacing={2} justifyContent="center">
          <Grid item sm>
            <div className={styles.shoutText}>
              <Typography variant="h3">Typescript only</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
                adipisci, beatae obcaecati.
              </Typography>
            </div>
          </Grid>
          <Grid item sm className={muiStyles.centeredGridItem}>
            <div className={styles.shoutImage}>
              <img src="/img/logo-TS.png" alt="Typescript logo" />
            </div>
          </Grid>
        </Grid>
      </section>

      <section>
        <Grid container spacing={2} justifyContent="center">
          <Grid item sm className={muiStyles.centeredGridItem}>
            <div className={styles.shoutImage}>
              <img src="/img/logo-ESLint.png" alt="ESLint logo" />
            </div>
          </Grid>
          <Grid item sm>
            <div className={styles.shoutText}>
              <h3>Maximum strictness to code-quality</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
                adipisci, beatae obcaecati.
              </p>
            </div>
          </Grid>
        </Grid>
      </section>
    </FullBleedLayout>
  );
};

export default IndexPage;
