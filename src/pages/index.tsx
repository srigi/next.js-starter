import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';

import SimpleLayout from '../components/layouts/SimpleLayout';
import styles from './index.module.css';

const { NEXT_PUBLIC_COMMIT_SHA } = process.env;

const useStyles = makeStyles((theme) => {
  return {
    hero: {
      background: 'url("/img/unsplash.jpg") 50% 50% no-repeat, linear-gradient(74deg, #031d3c, #0d0e13 80%)',
      backgroundSize: 'cover',
      padding: '184px 0 112px',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        padding: '215px 0 160px',
      },
    },
    heroText: {
      color: '#ffffff',
      textAlign: 'right',
    },
    heroTextTitle: {
      fontSize: '3.5rem',
      fontWeight: 700,
      textShadow: '0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    heroTextSubtitle: {
      fontSize: '1.5rem',
      textShadow: '0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    centeredGridItem: {
      alignSelf: 'center',
      textAlign: 'center',
    },
  };
});

const IndexPage: NextPage = () => {
  const muiStyles = useStyles();

  return (
    <SimpleLayout title="Welcome">
      <section className={muiStyles.hero}>
        <Container>
          <div className={muiStyles.heroText}>
            <Typography variant="h1" className={muiStyles.heroTextTitle}>
              Next.js starter
            </Typography>
            <Typography variant="h6" className={muiStyles.heroTextSubtitle}>
              Jump right into most successful ReactJS framework
            </Typography>
          </div>
        </Container>
        <p className={styles.gitRev}>
          GIT_REV: <code>{NEXT_PUBLIC_COMMIT_SHA}</code>
        </p>
      </section>

      <section className={styles.section}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <div className={styles.shoutText}>
                <h3>Typescript only</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                  esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                  molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={muiStyles.centeredGridItem}>
              <div className={styles.shoutImage}>
                <img src="/img/logo-TS.png" alt="Typescript logo" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {/* className="text-center justify-content-center align-self-center" */}
            <Grid item xs={12} sm={6} className={muiStyles.centeredGridItem}>
              <div className={styles.shoutImage}>
                <img src="/img/logo-ESLint.png" alt="ESLint logo" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={styles.shoutText}>
                <h3>Maximum strictness to code-quality</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                  esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                  molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </SimpleLayout>
  );
};

export default IndexPage;
