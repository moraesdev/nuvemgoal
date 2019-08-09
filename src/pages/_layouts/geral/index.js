import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ContainerLayout } from './styles';

import Header from '../../../components/Header';

export default function GeralLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <ContainerLayout>{children}</ContainerLayout>
    </Wrapper>
  );
}

GeralLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
