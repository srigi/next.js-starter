/*
 * based on https://www.joshwcomeau.com/css/full-bleed/
 */

import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent, ReactNode, isValidElement } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import withTitle from '../../HOCs/withTitle';

type Props = {
  children: ReactNode;
  title?: string;
};

const useStyles = makeStyles((theme) => ({
  StickyFooterWrapper: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gridRowGap: theme.spacing(6),
    alignItems: 'start',
    minHeight: '100%',
  },
  FullBleedLayout: {
    display: 'grid',
    gridColumnGap: theme.spacing(2),
    gridTemplateColumns: `1fr min(${theme.breakpoints.values.md}px, calc(100% - ${theme.spacing(4)})) 1fr`,
    '& > *': {
      gridColumn: 2,
    },
  },
  Unconstrained: {
    gridColumn: '1 / -1',
    width: '100%',
  },
}));

export const Unconstrained: FunctionComponent = ({ children }) => {
  const styles = useStyles();

  if (isValidElement(children)) {
    return <div className={styles.Unconstrained}>{children}</div>;
  }

  return null;
};

const FullBleedLayout: FunctionComponent<Props> = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.StickyFooterWrapper}>
      <div className={styles.FullBleedLayout}>
        <Unconstrained>
          <Header />
        </Unconstrained>

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default withTitle(FullBleedLayout);
