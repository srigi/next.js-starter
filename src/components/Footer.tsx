import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { cyan, grey } from '@material-ui/core/colors';
import { FunctionComponent } from 'react';

const useStyles = makeStyles({
  footer: {
    backgroundColor: grey.A400,
    color: cyan[100],
    fontSize: '1.2rem',
    padding: '2rem 0',
    textAlign: 'center',
  },
});

const Footer: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Container>
        <Typography>Copyright &copy; 2020</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
