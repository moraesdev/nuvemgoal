import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ContainerLayout, Content } from './styles';

export default function HomeLayout({ children }) {
  return (
    <Wrapper>
      <ContainerLayout>
        <Content>{children}</Content>
      </ContainerLayout>
    </Wrapper>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
