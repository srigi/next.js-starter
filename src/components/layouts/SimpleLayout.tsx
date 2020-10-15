import React, { FunctionComponent } from 'react';

import Nav from '../Nav';
import withTitle from '../../HOCs/withTitle';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const SimpleLayout: FunctionComponent<Props> = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

export default withTitle(SimpleLayout);
