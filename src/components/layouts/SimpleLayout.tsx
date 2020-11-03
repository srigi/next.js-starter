import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from '../Navbar';
import withTitle from '../../HOCs/withTitle';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const SimpleLayout: FunctionComponent<Props> = ({ children }) => (
  <>
    <Container className="mw-800px">
      <Navbar />
    </Container>

    {children}
  </>
);

export default withTitle(SimpleLayout);
