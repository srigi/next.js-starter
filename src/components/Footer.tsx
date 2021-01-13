import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import { FunctionComponent } from 'react';

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    color: cyan[100],
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(3)} 0`,
    textAlign: 'center',
  },
}));

const Footer: FunctionComponent<Props> = ({ className }) => {
  const styles = useStyles();

  return (
    <footer className={classNames(styles.footer, className)}>
      <Container>
        <Typography>Copyright &copy; 2020</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
