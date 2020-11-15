import { FunctionComponent } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import withTitle from '../../HOCs/withTitle';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const SimpleLayout: FunctionComponent<Props> = ({ children }) => (
  <>
    <Navbar />

    {children}

    <Footer />
  </>
);

export default withTitle(SimpleLayout);
