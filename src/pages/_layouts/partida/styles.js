import styled from 'styled-components';
import fundoCampo from '../../../assets/images/FundoCampoNovo.svg';

export const Wrapper = styled.div`
  height: 100%;
  background: url(${fundoCampo}) center bottom repeat-x, rgb(11, 10, 13);
`;

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`;
