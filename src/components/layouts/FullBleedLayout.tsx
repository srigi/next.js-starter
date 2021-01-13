/*
 * based on https://www.joshwcomeau.com/css/full-bleed/
 */

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import withTitle from '../../HOCs/withTitle';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridColumnGap: theme.spacing(2),
    gridTemplateColumns: `1fr min(${theme.breakpoints.values.md}px, calc(100% - ${theme.spacing(4)})) 1fr`,
    '& > *': {
      display: 'flex',
      gridColumn: 2,
    },
  },
  unconstrained: {
    gridColumn: '1 / 4',
    width: '100%',
  },
}));

const FullBleedLayout: FunctionComponent<Props> = ({ children }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Navbar className={styles.unconstrained} />

      {children}

      <Footer className={styles.unconstrained} />
    </Box>
  );
};

export default withTitle(FullBleedLayout);
